# Cp命令实现覆盖

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">cp命令实现覆盖</h1></div>

<div class="content" id="content"><p>展开</p><p>cp 命令参数以及覆盖与不覆盖</p><p>1.参数详解</p><p>-f&nbsp;：为强制 (force) 的意思，若有重复或其它疑问时，不会询问使用者，而强制复制；</p><p>-i&nbsp;：若目的檔(destination)已经存在时，在覆盖时会先询问是否真的动作！</p><p>-r&nbsp;：递归持续复制，用于目录的复制行为；</p><p>从上边我们可以看出，我们输入的cp命令，其实是“cp -i”命令，</p><p>也就是不管我们怎么输入 cp -rf，其实执行的是 cp -i -rf , 也无怪乎总是提问是否覆盖了。</p><p>其实还有一种更简单的方法可以解决这个问题，就是在cp前加一个反斜杠如：</p><p>\cp -rf $hour $date</p><p>就可以了！</p><p>————————————————</p><p>版权声明：本文为CSDN博主「xuehuagongzi000」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。</p><p>原文链接：https://blog.csdn.net/xuehuagongzi000/article/details/88657089</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/94/  

