# Docker下载镜像太慢的解决方案

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">docker下载镜像太慢的解决方案</h1></div>

<div class="content" id="content"><p>docker下载镜像卡死或太慢</p><p>找了网上很多方法，使用镜像中国也是下载卡死。</p><p>最后一种成功了，下载速度很满意</p><p>1.先再阿里云注册账号，不需要绑定什么，直接注册就可以了，有账号的直接登录就好。</p><p>地址：https://cr.console.aliyun.com</p><p>搜索 容器镜像服务</p><p>2.创建镜像仓库</p><p>3.创建好之后点到这个选项卡</p><p>打开安装呢docker的客户端</p><p>vim /etc/docker/daemon.json</p><p>将"registry-mirrors": [“https://……com”] （对应自己的加速地址）复制到文件中</p><p>这是我的格式</p><p>最后是重新加载文件和重启docker（不要忘记这两步）</p><p>sudo systemctl daemon-reload//重新加载</p><p>sudo systemctl restart docker//重启</p><p>1</p><p>2</p><p>最后就可以幸福的下载镜像了</p><p>docker install mysql(还是这种命令，不需要有任何的修改)</p><p>————————————————</p><p>版权声明：本文为CSDN博主「科代表」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。</p><p>原文链接：https://blog.csdn.net/weixin_43569697/article/details/89279225</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/82/  

