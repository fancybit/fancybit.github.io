# .Net Core Webapi跨域问题

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">.net core webapi跨域问题</h1></div>

<div class="content" id="content"><p>跨域问题是通过ajax在一个域A访问域B上的资源的时候 需要在B域的跨域列表里加上A。</p><p>另外一个重点是判断2个域是否跨域需要3个要素 协议(http或者https,ftp) 地址(包含域名) 端口号 三者有一个不同就是跨域的</p><p>比如 <a href="http://abc.com:8888" target="_blank" rel="external nofollow noopener noreferrer">http://abc.com:8888</a> 和 <a href="https://abc.com:8888" target="_blank" rel="external nofollow noopener noreferrer">https://abc.com:8888</a>是2个域 http://localhost:12345&nbsp;和 http://127.0.0.1:12345&nbsp;也是2个域</p><p>.net core 的跨域设置看这里:</p><p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><a href="https://www.jianshu.com/p/26c2108bab05" target="_blank" rel="external nofollow noopener noreferrer">https://www.jianshu.com/p/26c2108bab05</a><!-- raw HTML omitted --></p><p>尤其最后一个不要漏掉</p><p></p><figure><a class="lightgallery" href="https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png" data-thumbnail="https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png" data-sub-html="<h2>.net core webapi跨域问题  跨域 cors webapi c# 第1张</h2><p>.net core webapi跨域问题  跨域 cors webapi c# 第1张</p>"><img class="lazyload" src="/svg/loading.min.svg" data-src="https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png" data-srcset="https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png, https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png 1.5x, https://www.fancybit.top/zb_users/upload/2020/02/202002221582309461495697.png 2x" data-sizes="auto" alt=".net core webapi跨域问题  跨域 cors webapi c# 第1张" title=".net core webapi跨域问题  跨域 cors webapi c# 第1张"></a><figcaption class="image-caption">.net core webapi跨域问题 跨域 cors webapi c# 第1张</figcaption></figure><p></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/86/  

