# Css Table

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">css table</h1></div>

<div class="content" id="content"><p>table中的td元素相比其他元素有很多限制，这里记录几点笔者尝试过的情况：</p><ul><li>td的padding属性有效，但是margin属性无效，被table的border-spaceingq设置的宽度和高度替代。</li><li>collapse可以使表格元素间的边框塌陷成单边框，border-spacing为0会出现宽度是边框宽度2倍的边框，并不能合并边框。</li><li>position属性对td无效。</li><li>float属性对td有效，会让每行的列不再对齐，而是根据内容宽度动态变化。并且格子之间的水平间距不再受table的border-spacing控制而受到margin控制。</li><li>table-layout属性设置单元格的宽度是根据内容自动计算（automatic）还是固定的（fixed）。fixed如果内容超出边框会和相邻格叠在一起，可以给td指定overflow:hidden属性来隐藏超出部分。</li><li>empty-cell:show/hide只控制有td但是没有内容的单元格显示，如果没有写td即使是empty-cell:show也不会显示</li><li>cation-side:top/bottom控制caption显示在最上还是最下</li></ul><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/22/  

