const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');
const showdown = require('showdown');
const matter = require('gray-matter');
const JSDOM = require('jsdom').JSDOM;

async function htmlToMarkdown(htmlContent) {
    // 加载 HTML 内容
    const $ = cheerio.load(htmlContent);
    $('script, style').remove(); // 移除脚本和样式标签
    $('[onclick],[onload],[onerror]').remove();

    // 提取标题（默认为 h1 标签内容）
    const title = $('h1').first().text().trim() || '未命名文章';

    // 提取日期（尝试从 meta 标签或 URL 中获取）
    let date = new Date().toISOString();
    const dateMeta = $('meta[name="date"]').attr('content');
    if (dateMeta) {
        try {
            date = new Date(dateMeta).toISOString();
        } catch (e) {
            console.warn('日期解析失败，使用当前日期');
        }
    }

    // 提取正文内容（假设在 article 或 .content 元素中）
    let contentElement = $('article').length ? $('article') : $('.content');



    // 如果没找到特定元素，使用整个 body
    if (!contentElement.length) {
        contentElement = $('body');
    }

    // 移除导航、页脚等不需要的元素
    contentElement.find('nav, footer, header').remove();

    console.log(`处理标题: ${title}, 日期: ${date}`);
    console.log(`正文内容: ${contentElement.html() ? contentElement.html().substring(0, 100) + '...' : '无内容'}`);

    // 清理剩余元素中的内联事件
    contentElement.find('*').each((i, el) => {
        const $el = $(el);
        Object.keys($el[0].attribs).forEach(attr => {
            if (attr.startsWith('on')) {
                $el.removeAttr(attr);
            }
        });
    });

    // 将 HTML 转换为 Markdown
    const converter = new showdown.Converter({
        ignoreScriptTags: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tables: true,
        tasklists: true,
        ghCompatibleHeaderId: true,
        literalMidWordUnderscores: true,
        noHeaderId: true,
        omitExtraWLInCodeBlocks: true,
        parseImgDimensions: true,
        openLinksInNewWindow: true,
        ghMentions: true,
        ghCodeBlocks: true,
        ghCompatibleHeaderId: true,
        simplifiedAutoLink: true,
        literalMidWordUnderscores: true,
    });

    const jsdom = new JSDOM(contentElement.html());
    const markdownContent = converter.makeMarkdown(contentElement.html(), jsdom.window.document);

    // 创建 YAML front matter
    const frontMatter = {
        title,
        date,
        author: 'fancybit',
        draft: false
    };

    // 返回包含 front matter 的完整 Markdown 内容
    return matter.stringify(markdownContent, frontMatter);
}

async function processHtmlFiles(htmlDir, outputDir) {
    // 确保输出目录存在
    await fs.mkdir(outputDir, { recursive: true });

    // 读取 HTML 目录中的所有文件
    const subDirs = await fs.readdir(htmlDir);

    //下面的遍历改为支持递归子目录的
    for (const no of subDirs) {
        const filePath = path.join(htmlDir, no, "index.html");
        const mdPath = path.join(outputDir, `${no}.md`);
        try {
            // 读取 HTML 文件内容
            const htmlContent = await fs.readFile(filePath, 'utf-8');

            // 转换为 Markdown
            const markdownContent = await htmlToMarkdown(htmlContent);
            // 写入 Markdown 文件
            await fs.writeFile(mdPath, markdownContent, 'utf-8');

            console.log(`已转换: ${filePath} -> ${mdPath}`);
        } catch (error) {
            console.error(`处理文件 ${file} 时出错:`, error.message);
        }
    }
}

async function main() {
    // 配置源 HTML 目录和目标 Markdown 目录
    const htmlDirectory = './archives/'; // 替换为实际的 HTML 文件目录
    const markdownDirectory = './content/posts/';        // 替换为实际的输出目录

    await processHtmlFiles(htmlDirectory, markdownDirectory);
    console.log('转换完成!');
}

main().catch(console.error);
