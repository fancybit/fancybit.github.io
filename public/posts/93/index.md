# Kali 虚拟机安装记录

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">kali 虚拟机安装记录</h1></div>

<div class="content" id="content"><p>安装vmware</p><p>去kali官网上下载最新版的kali镜像 注意最好下载live版 installer是给windows环境下安装的目测 在vmware里用live才能安装成功</p><p>安装完毕了再安装vm-tools</p><p>安装teamviewer的时候需要用dpkg -i xxx.deb 然后会遇到一些依赖问题 这时再运行apt-get –fix-broken 就可以继续安装并且自动搞定所有依赖问题了 方便</p><p>安装输入法和添加国内镜像加快软件下载速度参照这里：</p><p><!-- raw HTML omitted --><a href="https://blog.csdn.net/wanglolaini/article/details/82845748" target="_blank" rel="external nofollow noopener noreferrer">https://blog.csdn.net/wanglolaini/article/details/82845748</a><!-- raw HTML omitted --></p><p>解决启动之后输入密码时候小键盘关闭的问题 参看下面：</p><p><!-- raw HTML omitted --><a href="https://www.cnblogs.com/lxmwb/p/6241788.html" target="_blank" rel="external nofollow noopener noreferrer">https://www.cnblogs.com/lxmwb/p/6241788.html</a><!-- raw HTML omitted --></p><p>不过我用的不是gedit 好像我用的kali版本是基于qt的kde界面 可以用mousepad 不过我最后还是用的vim就够了</p><p>kali使用代理的话可以用proxychains 修改配置文件 /etc/proxychains.conf 把最后一行换成代理服务器IP和端口 然后注掉其他代理IP 使用控制台proxychians xxx来启动需要代理的软件</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/93/  

