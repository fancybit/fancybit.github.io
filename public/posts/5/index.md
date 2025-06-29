# IDA学习笔记 函数调用约定

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">IDA学习笔记 函数调用约定</h1></div>

<div class="content" id="content"><p>stdcall和cdecl：</p><p>stdcall和cdecl 压栈方向都是从右到左 区别在于c约定是调用方在函数返回后add esp,n指令清除堆栈中的参数，而stdcall在被调函数内使用ret n来清理堆栈内的参数。</p><p>另外c约定是可以使用可变数量参数的，而stdcall不可以，这是因为c约定清理工作由调用方做，调用方知道实际传入了多少参数，占用多大空间。而stdcall由被调方清理参数，如果用可变参数被调方不容易获取参数数量和尺寸。</p><p>fastcall和stdcall类似 只不过最左两个参数使用ecx edx寄存器传递。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/5/  

