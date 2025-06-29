# C++关于变量初始化的琐记

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">C++关于变量初始化的琐记</h1></div>

<div class="content" id="content"><!-- raw HTML omitted --><!-- raw HTML omitted --><p>上面这种用dynamic_cast转换指针的写法可以在运行时判断被转换的对象是否能转换 不能转换会返回一个null</p><p>然后这里的变量初始化也是可以像赋值一样返回被赋予的值作为if的判断依据 这样就形成了这种简单的连续写法</p><p></p><p>然而变量初始化和变量赋值还是有区别的，目前经常遇到的问题是在循环内部。如果在循环内部初始化一个变量 这个初始化语句只会设定一次变量值 后几次循环会略过这一条初始化。这是C++和java,c#的一个很大区别，经常造成坑。java和c#都是在循环内部初始化变量也会每次循环都设定值的。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/6/  

