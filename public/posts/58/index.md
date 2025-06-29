# 文件莫名其妙被共享

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">文件莫名其妙被共享</h1></div>

<div class="content" id="content"><p>最近发现隔一段时间我的电脑C D盘就会不知道什么时候被开了共享，这样来蹭WIFI的都可以随便下我的电脑内容了，然后就在火绒上开了个注册表保护：</p><p>高级防护-》自定义防护-》添加规则-》添加保护对象-》注册表规则-》</p><p>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Shares\</p><p>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Shares\Security</p><p>这两项注册表是有关局域网文件共享的</p><p>然后修改这2项之后重启lanmanserver服务 就可以看到lanmanserver会读取这两个里面的内容 重新启动注册表服务</p><p>windows xp之后好像都是这个服务在控制局域网的文件和打印机共享</p><p>哦了 现在就等着哪个捣蛋的进程再来动我的局域网共享了 到时候查出来彻底灭掉</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/58/  

