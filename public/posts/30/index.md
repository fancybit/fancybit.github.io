# Sae开发备忘录

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">sae开发备忘录</h1></div>

<div class="content" id="content"><p>新浪的sina app engine是个不错的公用云空间：<!-- raw HTML omitted --></p><ul><li>注册开发者每月都有免费的云豆赠送，进入门槛低。</li><li>使用svn部署代码，符合一般开发者的习惯，也方便协作开发。</li><li>使用读写分离的mysql数据库，并发性和负载能力更强。</li><li>企业版可以使用cdn，利用新浪分散在各地的机房加快应用访问速度。</li><li>有各类流行框架和开放应用的支持，如thinkPHP，分词，面部识别api等等。</li><li>有新浪微博的api，可以整合到新浪微博便于推广自己的应用。</li><li>诸如此类的好处还有很多，还有各种新服务在不断推出，想了解更详细的话请自行进入传送门：<!-- raw HTML omitted --><a href="http://sae.sina.com.cn/?m=devcenter" target="_blank" rel="external nofollow noopener noreferrer">http://sae.sina.com.cn/?m=devcenter</a><!-- raw HTML omitted --></li></ul><p>&nbsp;不过由于性能，安全之类的考虑，sae平台和传统的php主机有些区别，新手（比如我这样的）经常在上面碰钉子，建议先浏览一遍文档再动手。这里记录一些开发中走的弯路，希望能帮到看到此文的朋友。<!-- raw HTML omitted --></p><ol><li>新浪的sae是基于linux+apache+mysql+php几个技术，在linux下面有个匪夷所思的特性就是路径是大小写敏感的。因此如果出现网页中的资源（如图片，swf)失效的情况，可以先检查一下文件夹名和url中的大小写是否一致。</li><li>sae提供了一个模拟的本地开发环境，一定程度上模拟了sae的环境，但还不完整。比如storage服务里面的文件路径不能自己拼出来，每个storage也不能简单的当做一级子目录处理，只能获取返回值里的文件路径再保存利用。另外有时候开着本地模拟环境访问服务器上的thinkPHP sae版会出现很多匪夷所思的情况，比如上传文件会传到本地的虚拟环境而不是服务器，所以svn同步到服务器后建议关闭虚拟环境再测试。</li></ol><p>未完待续….</p><p><!-- raw HTML omitted --></p><p></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/30/  

