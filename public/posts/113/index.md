# Shader效果踩坑备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Shader效果踩坑备忘</h1></div>

<div class="content" id="content"><p>在使用%运算来制作图集中的sprite无限滚动的UV动画效果的时候，记得用abs把符号去掉，否则%运算（对于小数或者整数都一样）会保留符号，这就导致实际取值范围会到达(-1,1) 负数uv的部分会造成依赖于贴图超出处理方式属性的错误结果（clamp就是什么都没有或者色块 repeat就是显示出同图集的相邻其他sprite图像）。</p><p>还有几种可以代替%的计算方法：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><p>另外unity的UV坐标原点在贴图左下角，和GDI的左上角不同。</p><p>参考shader：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>另外传入UVRect的时候记得从sprite的rect属性里得到rect再除以sprite的纹理宽高，生成0-1范围的UV坐标再传入shader，否则会看不到任何东西。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/113/  

