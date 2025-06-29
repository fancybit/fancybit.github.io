# 关于c#静态构造函数

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">关于c#静态构造函数</h1></div>

<div class="content" id="content"><p><a href="http://baike.baidu.com/view/2634573.htm?fr=aladdin" target="_blank" rel="external nofollow noopener noreferrer">http://baike.baidu.com/view/2634573.htm?fr=aladdin</a></p><p>在百科上看到C#的新特性静态构造函数，其中提到静态构造函数“不能继承” 今天做了个试验，发现实际上静态构造函数是可以继承的，代码如下：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>运行结果显示100 说明虽然是父类的静态构造函数 但是在创建子类实例前这个静态构造函数也被调用过了</p><p>另外一种情况是带有static修饰的类，因为同时被定义为sealed，也就是静态类，是不能被继承的，因而也无所谓它的静态构造函数是否能继承了。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/19/  

