# Unity插件OdinInspector系列要点记录

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Unity插件OdinInspector系列要点记录</h1></div>

<div class="content" id="content"><p>对于Dictionary&lt;T,T&gt;之类的unity本身不支持序列化的字段，需要使用[OdinSerialize]标签来进行序列化存储。</p><p>需要启用Odin Inspector增强的组件需要从SerializedMonoBehaviour类型继承。</p><p>更换了组件的序列化方式之后，可能需要删除掉组件再添加组件，然后重启Unity编辑器。否则会出现一些莫名其妙的BUG。</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/110/  

