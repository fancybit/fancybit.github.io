# JS ValueOf与字符串

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">JS valueOf与字符串</h1></div>

<div class="content" id="content"><p>js在处理字符串和数值加运算的时候会转换数值为字符串 然后执行字符串连接</p><p>在覆盖String.prototype.valueOf之前，new String(111)这样的字符串与数值加法也是字符串连接：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><p>重写String.prototype.valueOf之后 用new String(“xxx”)构造的字符串对象会转换成数值与数值进行加法运算 而字符串常量仍旧是字符串连接</p><p>如下：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/23/  

