# Kali Openvas安装

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">kali openvas安装</h1></div>

<div class="content" id="content"><p>最新的kali需要用apt-get安装后使用</p><p>安装</p><p>apt-get install openvas</p><p>自动设置</p><p>openvas-setup</p><p>检测设置</p><p>openvas-check-setup</p><p>如果检测没有问题的话就可以直接在弹出的浏览器里使用了</p><p>如果要改密码或者加用户 参照下面：</p><p>openvasmd –user=admin –<!-- raw HTML omitted -->new-password=新密码 <!-- raw HTML omitted -->//直接修改admin用户的密码<!-- raw HTML omitted --><!-- raw HTML omitted --></p><p>openvasmd –create-user=用户名 <!-- raw HTML omitted -->//创建用户<!-- raw HTML omitted --></p><p>openvasmd –<!-- raw HTML omitted -->delete-user=用户名 <!-- raw HTML omitted -->//删除用户<!-- raw HTML omitted --><!-- raw HTML omitted --></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/7/  

