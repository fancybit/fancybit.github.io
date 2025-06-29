# Shader编程备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Shader编程备忘</h1></div>

<div class="content" id="content"><p>目前效果</p><p>B站：<!-- raw HTML omitted --><a href="https://www.bilibili.com/video/bv1Wa4y147Nr" target="_blank" rel="external nofollow noopener noreferrer">https://www.bilibili.com/video/bv1Wa4y147Nr</a><!-- raw HTML omitted --></p><p>cg的乘法运算符是数值对乘 对向量和矩阵要求尺寸一致，cg的向量点积和向量矩阵 矩阵矩阵乘法用mul函数</p><p>只有4维的向量vector可以作为向量参数&nbsp;</p><p>设置Blend 并且才能启用半透明混合效果</p><p>透明相关tag参看这里:<!-- raw HTML omitted --><a href="https://www.cnblogs.com/0kk470/p/8250704.html" target="_blank" rel="external nofollow noopener noreferrer">https://www.cnblogs.com/0kk470/p/8250704.html</a><!-- raw HTML omitted --></p><p>Blend参数看这里：<!-- raw HTML omitted --><a href="https://blog.csdn.net/LeeXxs/article/details/85112661" target="_blank" rel="external nofollow noopener noreferrer">https://blog.csdn.net/LeeXxs/article/details/85112661</a><!-- raw HTML omitted --></p><p>用材质制作摄像机后处理效果时候，如果修改fragment shader出现拖影问题，就要在代码里把RenderTexture上面每一次处理绘制成全白，木有找到clear的办法只能先这样：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/100/  

