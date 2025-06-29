# Css 4种定位方式

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">css 4种定位方式</h1></div>

<div class="content" id="content"><p>CSS的定位即position属性的值有4种：static,relative,absolute,fixed。</p><ol><li>static是默认值，元素位于文档流中，正常显示，忽略元素的top,bottom,left,right属性。需要注意的一点是z-index属性在这个定位方式下始终为0.如果其他定位方式的漂浮元素要位于static定位的内容之下，必须使用负数的z-index属性才行。</li><li>relative是保留元素在文档流中占用的位置和尺寸，元素在static模式的位置下为起点由top,left几个属性确定相对移动的距离。</li><li>absolute模式文档流中不再给元素保留空间，元素相对于网页的左上角定位。</li><li>fixed和absolute差不多，但是它相对的是窗口的左上角，也就是文档比较长出现滚动的时候，fixed定位的元素不会跟随文档滚动。但是如果在多frame页面里面，它相对的是所在frame的左上角，而不是一些地方讲的浏览器左上角。</li></ol><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/24/  

