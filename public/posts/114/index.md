# Unity调用Windows API备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Unity调用Windows API备忘</h1></div>

<div class="content" id="content"><p>最近接了个麻将游戏项目，需要用到一些透明的异形窗体。然后就需要用Interop库提供的功能引入一些windows api来调用。</p><p>首先要把unity的窗口做成有透明部分需要至少调用2个主要API，一个是SetWindowLong,一个是DwmExtendFrameIntoClientArea。前者是设置窗口显示模式，需要加上WS_EX_LAYERED风格。后者是设置可绘制客户区，把标题栏也归入可绘制控制区域。类似这样的调用方式：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>随后需要离开半透明载入的场景后停止窗口的透明状态，需要重新调用一次SetWindowLong和DwmExtendFrameIntoClientArea</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>另外加上的这行对SetLayeredWindowAttributes的调用，是把窗体的透明度恢复为不透明，如果没有这个调用，在unity里半透明渲染的东西可能会和unity窗口之后的屏幕内容发生混色，非常的难看。</p><p>然后是获取当前窗口句柄的方法：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>这样s_hwnd就存入了当前unity窗口的句柄。注意这里只对已经打包后的PC WINDOWS端有效，对于编辑器里的窗口是无效的，因为注册的类名就不同。</p><p>windows api中的char*类型参数可以用StringBuilder来获取，注意要多预留一个字节的容量用于存储C风格字符串的结尾字符“\0”</p><p>如果你需要获取其他类型的窗口，可以打开spy++去查找窗口，记录下窗口的类名就可以用上面的方法获取句柄了，很通用。还可以结合窗体的标题名。</p><p>具体的常量数值可以参考windows的头文件或者msdn手册。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/114/  

