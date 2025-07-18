# 关于js闭包的误区

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">关于js闭包的误区</h1></div>

<div class="content" id="content"><p><!-- raw HTML omitted -->一直以为js的闭包只是内部函数保存了一份外部函数的变量值副本，但是以下代码打破了我的认识：<!-- raw HTML omitted --></p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>　执行结果是10个10 而不是0-9</p><p>看了JS高级编程7.2.1之后才明白 变量i并不是存在于匿名函数的局部变量表，而是存储在createFunctions的活动对象表（存储参数和局部变量）中。并且在创建函数的定义过程中匿名函数只是被定义而没有被执行。直到后面输出的循环被定义的匿名函数们才得以执行，而这时候它们的活动对象表里并不存在i，然后它们就会从作用域链向上查找createFunctions的活动对象表中的i。这时i的值已经是10，因此它们的执行结果全是10。</p><p>以下代码在闭包外部再加入了一个含参数的闭包，并且在定义之后调用，传递进去当前的i。这时这层新增的闭包活动对象表中含有参数num会存储i的当前值。这样结果就是0-9了：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>闭包的活动对象表中并不会包含this，this是当前执行上下文中的概念，会随着调用环境而变化。</p><p></p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>输出结果：</p><p>global name<br> object name<br> object name<br> object name<br> global name</p><p>第一个输出 因为this并不在活动对象表里，闭包在调用的地方才获得当前的this，也就是全局对象</p><p>第二个输出 因为闭包定义之前取了this存到外层函数的that变量，用that就可以得到自定义对象</p><p>第3,4个输出 没有闭包 直接输出this</p><p>第五个输出 因为赋值表达式取结果的操作把当前的上下文变成了全局的，可以当做赋值操作不属于任何对象因此得到的是全局对象</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/25/  

