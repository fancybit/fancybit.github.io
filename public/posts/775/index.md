# NPM Install -Save 和 -Save-Dev 傻傻分不清

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">NPM install -save 和 -save-dev 傻傻分不清</h1></div>

<div class="content" id="content"><p><!-- raw HTML omitted -->NPM install -save 和 -save-dev 傻傻分不清<!-- raw HTML omitted --></p><!-- raw HTML omitted --><h3 id="回顾-npm-install-命令">回顾 npm install 命令</h3><p>最近在写Node程序的时候，突然对 npm install 的-save和-save-dev 这两个参数的使用比较混乱。其实博主在这之前对这两个参数的理解也是模糊的，各种查资料和实践后对它们之间的异同点略有理解。遂写下这篇文章避免自己忘记，同时也给node猿友一点指引。</p><p>我们在使用 npm install 安装模块的模块的时候 ，一般会使用下面这几种命令形式：<!-- raw HTML omitted --></p><!-- raw HTML omitted --><precode language="" precodenum="0"></precode><!-- raw HTML omitted --><p>那么问题来了，在项目中我们应该使用四个命令中的哪个呢？这个就要视情况而定了。下面对这四个命令进行对比，看完后你就不再这么问了。</p><h3 id="npm-install-modulename-命令">npm install moduleName 命令</h3><ol><li>安装模块到项目node_modules目录下。</li><li>不会将模块依赖写入devDependencies或dependencies 节点。</li><li>运行 npm install 初始化项目时不会下载模块。</li></ol><h3 id="npm-install--g-modulename-命令">npm install -g moduleName 命令</h3><ol><li>安装模块到全局，不会在项目node_modules目录中保存模块包。</li><li>不会将模块依赖写入devDependencies或dependencies 节点。</li><li>运行 npm install 初始化项目时不会下载模块。</li></ol><h3 id="npm-install--save-modulename-命令">npm install -save moduleName 命令</h3><ol><li>安装模块到项目node_modules目录下。</li><li>会将模块依赖写入dependencies 节点。</li><li>运行 npm install 初始化项目时，会将模块下载到项目目录下。</li><li>运行npm install –production或者注明NODE_ENV变量值为production时，<strong>会</strong>自动下载模块到node_modules目录中。</li></ol><h3 id="npm-install--save-dev-modulename-命令">npm install -save-dev moduleName 命令</h3><ol><li>安装模块到项目node_modules目录下。</li><li>会将模块依赖写入devDependencies 节点。</li><li>运行 npm install 初始化项目时，会将模块下载到项目目录下。</li><li>运行npm install –production或者注明NODE_ENV变量值为production时，<strong>不会</strong>自动下载模块到node_modules目录中。</li></ol><h3 id="总结">总结</h3><p>devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。</p><p>作者：<!-- raw HTML omitted -->暗夜余晖<!-- raw HTML omitted --></p><p>本文版权归作者所有，欢迎转载，但未经作者同意必须保留此段声明，且在文章页面明显位置给出原文连接，否则保留追究法律责任的权利。</p></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/775/  

