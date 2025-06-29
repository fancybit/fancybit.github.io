# Unity+.net5全景地图项目开发备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">unity+.net5全景地图项目开发备忘</h1></div>

<div class="content" id="content"><p>服务端采用.net5 客户端是unity2021</p><p>使用AutoFac做服务端的IOC容器 混用mvc的JsonResult 暂未使用ApiAttribute</p><p>KEY字段的Guid使用NewtonSoft.Json有点问题，暂时都使用<strong>GUID</strong>生成的字符串来做KEY 同时方便内容传输</p><p>用JWT来生成json保证手机端API的安全</p><p>Post的表单内容在body内以和Get的QueryString一致的形式存在，没有分隔符?</p><p>使用一个OwnerController基类来验证后台管理员的权限问题</p><p>.net5 mvc对于url中的//是会报错的，所以拼接url时候要注意否则容易出现404</p><p>从VS调试器里粘贴用于PostMan的json字符串数据的时候要注意去掉转义符，否则会形成类似2次序列化的问题导致PostMan发送到服务端的json解释混乱报错 通常是405</p><!-- raw HTML omitted --><p><!-- raw HTML omitted -->¨NBSP;<!-- raw HTML omitted --></p></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/759/  

