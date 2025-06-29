# 使用js把json字符串转为js对象的方法

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">使用js把json字符串转为js对象的方法</h1></div>

<div class="content" id="content"><p><strong>ECMA-262(E3)</strong>&nbsp;中没有将JSON概念写到标准中，还好在**&nbsp;<!-- raw HTML omitted -->ECMA-262(E5)&nbsp;<!-- raw HTML omitted -->**中JSON的概念被正式引入了，包括全局的JSON对象和Date的toJSON方法。</p><p>1，eval方式解析，恐怕这是最早的解析方式了。如下：</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><br><!-- raw HTML omitted -->复制代码<!-- raw HTML omitted -->代码如下:</p><p>function strToJson(str){&nbsp;</p><p>var json = eval(’(’ + str + ‘)’);&nbsp;</p><p>return json;&nbsp;</p><p>}&nbsp;</p><p>记得别忘了str两旁的小括号。&nbsp;</p><p>这里属性名可以使用数字，可以带引号也可以不带引号。如果属性名是纯数字，生成的对象属性可以用下表运算符[]来访问，不能用obj.123这样的方式访问。</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><p>2，new Function形式，比较怪异哦。如下&nbsp;</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><br><!-- raw HTML omitted -->复制代码<!-- raw HTML omitted -->代码如下:</p><p>function strToJson(str){&nbsp;</p><p>var json = (new Function(“return " + str))();&nbsp;</p><p>return json;&nbsp;</p><p>}&nbsp;</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><p>3，使用全局的JSON对象，如下：&nbsp;</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><br><!-- raw HTML omitted -->复制代码<!-- raw HTML omitted -->代码如下:</p><p>function strToJson(str){&nbsp;</p><p>return JSON.parse(str);&nbsp;</p><p>}&nbsp;</p><p>目前 IE8(S)/Firefox3.5+/Chrome4/Safari4/Opera10 已实现了该方法，以下是部分资料：<!-- raw HTML omitted --><a href="http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx" target="_blank" rel="external nofollow noopener noreferrer">http://blogs.msdn.com/ie/archive/2008/09/10/native-json-in-ie8.aspx</a><!-- raw HTML omitted --><!-- raw HTML omitted --><a href="https://developer.mozilla.org/en/Using_JSON_in_Firefox" target="_blank" rel="external nofollow noopener noreferrer">https://developer.mozilla.org/en/Using_JSON_in_Firefox</a><!-- raw HTML omitted --><br> 使用JSON.parse需严格遵守JSON规范，如属性都需用引号引起来，如下</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><br><!-- raw HTML omitted -->复制代码<!-- raw HTML omitted -->代码如下:</p><p>var str = ‘{name:“jack”}’;&nbsp;</p><p>var obj = JSON.parse(str); // –&gt; parse error&nbsp;</p><p>name没有用引号引起来，使用JSON.parse所有浏览器中均抛异常，解析失败。而前两种方式则没问题。 另外必须用双引号包围属性名，单引号会有解析错误，范例：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><p>另见：<!-- raw HTML omitted -->Chrome中JSON.parse的特殊实现<!-- raw HTML omitted --></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/15/  

