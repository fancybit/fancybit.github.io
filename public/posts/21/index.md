# 关于js原型继承

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">关于js原型继承</h1></div>

<div class="content" id="content"><p>js的每个类都有一个prototype对象 访问对象的属性时，会先访问到对象自身是否有定义这个属性 如果没有定义，就会去访问对象所属类型的prototype对象是否有此属性</p><p>原型继承就是把类型的prototype指向一个父类的新对象，这样每派生一个新类出来都会构造一个新的父类对象作为原型，这个对象和父类的prototype是分离的 因而可以用于添加子类的新属性而不影响父类</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>　在构造函数中赋值的属性也能被派生类中使用，因为每个对象都运行了一次构造函数，每个对象都有一个此属性的定义 并且这个属性是优先于prototype里的属性的 比如下面的例子：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>其实这个和LUA利用元数据表的模拟继承非常相似</p><p>关于原型继承的写法可以参见：</p><p><a href="http://www.cnblogs.com/yangjinjin/archive/2013/02/01/2889368.html" target="_blank" rel="external nofollow noopener noreferrer">http://www.cnblogs.com/yangjinjin/archive/2013/02/01/2889368.html</a></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/21/  

