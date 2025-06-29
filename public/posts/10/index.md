# .Net Core SIMD范例分析

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">.net core SIMD范例分析</h1></div>

<div class="content" id="content"><p>单指令多数据流（SIMD）是CPU基本运算之外为了提高并行处理多条数据效率的技术，常用于多媒体处理如视频，3D模拟的计算。实现方式不同品牌的CPU各有自己的指令集，如SSE MMX 3DNOW等。</p><p>C#开发.net core软件的过程中也可以让编译器自动采用这些SIMD指令集进行代码优化，测试了一下在我的AMD 锐龙7 2700X上对于整数加法处理可以提高10倍的效率。</p><p>下面是我自己写的例子：</p><precode language="" precodenum="0"></precode><p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --></p><p>运行结果：</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->​<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --></p><p>只要用Vector<!-- raw HTML omitted -->支持的重载运算符来代替数组或者列表之类进行计算，即可获得编译器SIMD自动优化指令的效果。不过目前文档里说只支持x86系列的CPU ARM的CPU相关支持还在研发中</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/10/  

