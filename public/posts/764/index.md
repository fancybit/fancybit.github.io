# Win10自带ubuntu开启和安装pip过程记录

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">win10自带ubuntu开启和安装pip过程记录</h1></div>

<div class="content" id="content"><p>ylyyyy 2018-12-20 14:49:32 3901 收藏 2<br> 版权<br> 开启win10自带ubuntu<br> 进入【设置–更新和安全–针对开发人员模式】，选择开发人员模式，等待系统自动安装，安装完成后，提示“已安装开发人员模式程序包…”，如下图所示。</p><p>控制面板–程序–程序和功能–启用或关闭windows功能，勾选适用于Linux的windows子系统。如下图所示。</p><p>点击确定，重新启动电脑</p><p>按win+r输入bash，没反应就进入cmd下输入bash</p><p>在Windows应用商店搜索ubuntu</p><p>200M左右，下载，启动即可</p><p>一些包的安装<br> cat /etc/issue查看ubuntu版本，最新的应该是ubuntu18.04</p><p>一般情况下，ubuntu内置Python，新的应该是Python 3.6，可输入Python -V 或Python3 -V查看</p><p>首先更新update更新管理工具</p><p>sudo apt-get update</p><p>sudo apt install yum</p><p>安装pip</p><p>sudo apt-get install python3-pip</p><p>过程比较慢，应该先换源的</p><p>换源参考：</p><p><a href="https://blog.csdn.net/weixin_40240670/article/details/81198749" target="_blank" rel="external nofollow noopener noreferrer">https://blog.csdn.net/weixin_40240670/article/details/81198749</a><br> ————————————————<br> 版权声明：本文为CSDN博主「ylyyyy」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。<br> 原文链接：https://blog.csdn.net/weixin_40240670/article/details/85121265</p></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/764/  

