# C#通过PInvoke调用c++函数的备忘录,C#与C++与互操作

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">C#通过PInvoke调用c++函数的备忘录,C#与C++与互操作</h1></div>

<div class="content" id="content"><p>目前知道的情况被调用的C/C++函数只能是全局函数 不能调用类中的成员方法</p><p>被调用的C函数必须使用extern “C“包含，保证采用的导出函数名生成规则和.NET一致</p><p>函数调用约定通常使用WINAPI也就是__stdcall，.net默认也是__stdcall</p><p>.net可以和c++同时用cdecl调用约定，这样可以支持可变参数个数</p><p>c函数必须使用__declspec(dllexport)前缀来导出</p><p>PInvoke assistant工具可以辅助生成C#和VB的引入声明，还可以查看常见的常量枚举</p><p>能否调用重载的c++函数导出还没有试验，目前找到的信息看还是不行</p><p>字符串只支持C里的char* w_char* 不支持stl的string</p><p>各种指针句柄都可以使用C#的IntPtr UIntPtr来对应</p><p>向非托管的C传递字符串如果是通过变量 可以用Marshal.StringToHGlobalAuto(csstr)得到复制到非托管内存的字符串IntPtr句柄，然后可以IntPtr.ToInt32()或者IntPtr.ToInt64()方法转成int传递给PInvok方式声明的C函数调用。这个字符串的非托管副本用完之后记得在C#使用Marshal.FreeHGlobal(cstrAddr)来释放掉。</p><p>参考文章：</p><p>C# 托管内存与非托管内存之间的转换&nbsp;<!-- raw HTML omitted --><a href="https://blog.csdn.net/menjiawan/article/details/48734015" target="_blank" rel="external nofollow noopener noreferrer">https://blog.csdn.net/menjiawan/article/details/48734015</a><!-- raw HTML omitted --></p><p><!-- raw HTML omitted -->C#与C++与互操作<!-- raw HTML omitted --><!-- raw HTML omitted --><a href="https://www.cnblogs.com/zhaotianff/p/8991847.html" target="_blank" rel="external nofollow noopener noreferrer">https://www.cnblogs.com/zhaotianff/p/8991847.html</a><!-- raw HTML omitted --></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/9/  

