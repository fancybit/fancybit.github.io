# Php转义符与正则表达式

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">php转义符与正则表达式</h1></div>

<div class="content" id="content"><p>php在书写regex的时候‘\’不需要转义，在’ ‘中包含’需要转义，在" “中包含’需要转义。</p><p>正则表达式的开头结尾要用”/"，这一点和js一样。&nbsp;</p><p>另外php的字符串不像js，不支持字符编码的转义。形如’\u4E00’这样的字符串不会被转义成单个字符，中文字符直接输入即可。匹配任意中文字符的正则表达式可以这么写:"[一-龥豈-鶴]"(utf8编码)。</p><p>先记这么多，以后遇到这方面问题再补充。&nbsp;</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/26/  

