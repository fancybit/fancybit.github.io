# 从as3鼠标事件说起

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">从as3鼠标事件说起</h1></div>

<div class="content" id="content"><p></p><ul><li>诡异的localX localY:&nbsp;</li></ul><p></p><!-- raw HTML omitted --><ul><li>在做照片裁剪上传的组件，需要获得控制块相对于父级的坐标：</li></ul><p></p><ol><li>直接使用stageX和stageY的话，在父级刚好在舞台(0,0)位置的情况凑巧可行，但是父级一旦移动就对不上了，使用localX,localY获得的坐标自然是错误的。之后找到办法是从父级的transform属性中获取concatenatedMatrix，即从父级sprite到舞台的变换矩阵。这个矩阵的（stageX,stageY）-（tx,ty）刚好得到正确的坐标。</li><li>这个方法对于一般情况是可以了，不过我想得更变态了一点，如果父级的变换矩阵中存在旋转呢？给父级加上一个rotation之后果然坐标又对不上了。于是终极的解决方案来了。获取父级的transform.concatenatedMatrix赋给m,m.invert()获得逆矩阵，即从舞台坐标系到父级坐标系的变换矩阵。从stageX,stageY构建一个Point p，p=m.transformPoint(p);此时p的x,y就是鼠标相对于父级的坐标了，可以直接赋值给控制块了。</li></ol><p></p><p></p><ul><li>MOVE,ROLL,OVER,OUT:</li></ul><p></p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><p></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/28/  

