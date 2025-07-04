# VC下防止反汇编的办法（1）

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">VC下防止反汇编的办法（1）</h1></div>

<div class="content" id="content"><p>最近在看IDA的书，讲汇编语言的部分提到了一种防止递归向下汇编器逆向程序的方法</p><!-- raw HTML omitted --><p>这里esp指向栈顶，也就是调用方最后入栈的返回地址。然而实际在VC2017里用内联汇编这么做是不行的，原因可以看看VC生成的汇编 代码：</p><p></p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>可以看到VC生成的汇编代码中添加了一些前缀后缀：</p><p>前缀用来保存调用前堆栈顶ebp，还有设置新的堆栈顶位置到ebp。如果有局部变量，还要减少esp位置（相当于入栈几个未知数据）以留出局部变量的位置。注意函数堆栈是从内存大编号向小编号堆叠的，越大的地址编号越靠下，就像一个金字塔，下大上小。</p><p>后缀用来清理堆栈（mov esp,ebp），并且从堆栈中恢复此次调用之前的ebp（pop ebp）。不难发现在被调用的函数体内修改函数返回地址的话，就需略过ebp的位置。因此内嵌汇编的那一句需要用ebp+4来得到返回地址指针。后面地址+13是略过的调用方的一个printf方法调用，要跳过多少代码可以在反汇编窗口自行查看地址计算一下。</p><p>下面是调用方的代码:</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><p>还有要注意的是这里为了防止代码优化，要关闭vc的编译优化选项。用以上这种方法可以配合一些跳转让反汇编的工具不能正确预测哪部分是代码区，从而达到隐藏一部分代码的目的。</p><p>以上是STDCALL调用约定的例子，cdecl和其他约定的以后再尝试整理。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/49/  

