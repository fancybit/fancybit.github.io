# MingW与cygwin

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">mingW与cygwin</h1></div>

<div class="content" id="content"><!-- raw HTML omitted --><p>用MingW和cygwin编译出来的程序的区别。&nbsp;<br> 首先MingW和cygwin都不能让Linux下的程序直接运行在Windows上，必需通过源代码重新编译。&nbsp;<br> 现代操作系统包括Windows和Linux的基本设计概念像进程线程地址空间虚拟内存这些都是大同小异的，之所以二者上的程序不能兼容，主要是它们对这些功能具体实现上的差异，首先是可执行文件的格式，Window使用PE的格式，并且要求以.EXE为后缀名。Linux则使用Elf。其次操作系统的API也不一样，如Windows用CreateProcess()创建进程，而Linux使用fork()。&nbsp;<br> 所以要移植程序必然要在这些地方进行改变，MingW有专门的W32api头文件，来把代码中Linux方式的系统调用替换为对应的Windows方式。而Cygwin则通过cygwin1.dll这个文件来实现这种API的转换，并模拟一个Linux系统调用接口给程序，程序依然以Linux的方式调用系统API，只不过这个API在cygwin1.dll上，cygwin1.dll再调用Windows对应的实现，来把结果返回给程序。&nbsp;<br> 可以用查看他们编译好的程序的导入表来验证这点。&nbsp;<br> 二者生成的程序都是能在Windows上运行的EXE文件，显然都是PE格式，用一个PE格式查看工具检查一下就能发现，Cygwin生成的程序依然有fork()这样的Linux系统调用，但目标库是cygwin1。而MingW生成的程序，则全部使用从KERNEL32导出的标准Windows系统API。&nbsp;<br> 这样看来用Mingw编译的程序性能会高一点，而且也不用带着那个接近两兆的cygwin1.dll文件。&nbsp;<br> 但Cygwin对Linux的模拟比较完整，甚至有一个Cygwin&nbsp;X的项目，可以直接用Cygwin跑X。&nbsp;<br> 另外Cygwin可以设置-mno-cygwin的flag，来使用Mingw编译。&nbsp;<br> 而与Cygwin更有可比性的MSys上的工具也是通过Cygwin这种模拟的方式来提供的。&nbsp;<br> 总之这两个项目有千丝万缕的关系，一个不恰当的比方，如果Mingw是MFC，Cygwin就是.NET了。</p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><p><!-- raw HTML omitted -->浏览(443)<!-- raw HTML omitted --><br><!-- raw HTML omitted -->评论<!-- raw HTML omitted --><br><!-- raw HTML omitted -->转载<!-- raw HTML omitted --><!-- raw HTML omitted --></p></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/32/  

