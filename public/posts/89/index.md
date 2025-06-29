# 将在Windows环境下编写的sh文件格式转化为Linux下的sh文件

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">将在Windows环境下编写的sh文件格式转化为Linux下的sh文件</h1></div>

<div class="content" id="content"><p>原创Dongguabai 最后发布于2018-07-22 19:59:21 阅读数 4145 收藏</p><p>展开</p><p>先演示一个翻车的现场：</p><p>这个是在Linux下编写的一个shell（B）脚本：</p><p>运行看看：</p><p>没问题，现在在Windows下编写一个：</p><p>保存后上传至虚拟机，运行发现居然报错了：</p><p>查看一下test.sh内容：</p><p>根本没什么问题啊，这时候再用cat -A查看看看：</p><p>cat -A是查看文件中的所有内容，包括隐藏字符！</p><p>在Linux中回车符识别为$符号，但是在test.sh文件中由于是在Windows下编写的，回车为^M$，所以就发生了格式不匹配，无法执行脚本。</p><p>将Windows格式转化为Linux格式</p><p>其实很简单，执行一个命令dos2unix即可：</p><p>额，我这里没有，安装一下：</p><p>cat -A看看：</p><p>发现格式已经转换过来了，可以直接执行了：</p><p>————————————————</p><p>版权声明：本文为CSDN博主「Dongguabai」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。</p><p>原文链接：https://blog.csdn.net/Dongguabai/article/details/81157928</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/89/  

