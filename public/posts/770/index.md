# Docker容器里centos无法使用 Systemctl 命令

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Docker容器里centos无法使用 systemctl 命令</h1></div>

<div class="content" id="content"><p>提示信息：system has not been booted with systemd as systme init system（PID 1）. can’t operate<br> 解决办法：</p><p>命令1：docker run -tid –name 容器名称 –privileged=true 镜像ID /usr/sbin/init</p><p>命令2：docker exec -it centos01 /bin/bash<br> ————————————————<br> 版权声明：本文为CSDN博主「琪琪酱紫」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。<br> 原文链接：https://blog.csdn.net/qq_26889387/article/details/110524090</p></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/770/  

