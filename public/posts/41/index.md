# Cygwin + Git + Nat123 30元搭建公网可访问的git服务器

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">cygwin + git + nat123 30元搭建公网可访问的git服务器</h1></div>

<div class="content" id="content"><p>首先参考上一篇安装服务器上的CYGWIN：</p><p><a href="http://jingyan.baidu.com/article/7e440953eabd742fc0e2efae.html" target="_blank" rel="external nofollow noopener noreferrer">http://jingyan.baidu.com/article/7e440953eabd742fc0e2efae.html</a></p><p>上一篇中已经加入了GIT相关的包，这里就不再赘述。</p><p>然后添加git用户，在CYGWIN客户端输入：</p><p>net user git 123 /add</p><p>一般只是GIT用户用的话不需要加入管理员组。</p><p>随后切换windows用户，使用git用户登录，启动一次cygwin这时cygwin会自动创建用户的个人目录/home/git/以及更新其他一些配置文件</p><p>随后切回管理员用户操作。</p><p>在git用户的个人文件夹建立git容器：</p><p>git init –bare hellogit.git</p><p>参考上一篇文章把git也设置成使用秘钥文件登陆。</p><p>然后客户端安装TortoiseGit</p><p>安装完成后需要生成putty用的私钥，这个在登陆git服务器的时候会用到：</p><p>打开这个工具：</p><!-- raw HTML omitted --><p>导入git用户的私钥</p><p>导入成功后点击save private key保存用户的私钥到其他2个秘钥相同位置。</p><p>然后再打开这个工具：</p><!-- raw HTML omitted --><p>添加刚刚生成的ppk私钥</p><p>然后再tortoiseGit克隆和提交之类操作的时候，在这个地方设置这个PPK私钥：</p><!-- raw HTML omitted --><p>现在就可以通过ssh的加密通道来连接GIT了，克隆地址是：</p><p>git@服务器IP:/~/git路径</p><p>然后用nat123可以把内网的git服务器开放到公网，通过域名穿透进来。没有公网固定IP也可以搭建GIT服务器供网上协作。</p><p></p><p>在http://www.nat123.com/注册并登陆。</p><p>充值30元可以自定义二级域名，不介意的话也可以用随机生成的二级域名 但是我不知道会不会被系统回收。</p><p>在这里添加端口映射，非网站 内网端口22 外网端口我是随机生成的默认值，这个要记住。充值30就可以自定义这个外网二级域名：最后确定保存。</p><!-- raw HTML omitted --><p>在服务器上开启nat123客户端，登陆你的用户，此时你的git服务器就可以用域名从公网访问到了，地址如下：</p><p>ssh://git@外网域名:外网端口/~/git路径（相对于git用户目录）</p><p>ok就先记录这么多了，希望能帮到你。</p><p></p><p>另外如果GIT用户用秘钥一直登陆失败，可能是秘钥文件authorized_keys的所有权没有拿到，用chown更改一下文件所有者即可。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/41/  

