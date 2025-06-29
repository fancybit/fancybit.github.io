# 如何设置 ASP.NET Core 程序监听的 IP 和端口

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">如何设置 ASP.NET Core 程序监听的 IP 和端口</h1></div>

<div class="content" id="content"><!-- raw HTML omitted --><!-- raw HTML omitted --><precode language="" precodenum="0"></precode><p>px 0px 8px; padding: 0px; font-size: 14px; box-sizing: border-box; list-style: inherit; color: rgb(0, 0, 0); line-height: 24px;"&gt; 方法二：使用 Kestrel 服务器的配置（不推荐） <!-- raw HTML omitted --></p><precode language="" precodenum="1"></precode><p>&nbsp;{&nbsp;CreateHostBuilder(args).Build().Run();&nbsp;}&nbsp;public&nbsp;static&nbsp;IHostBuilder&nbsp;CreateHostBuilder(string[]&nbsp;args)&nbsp;=&gt;&nbsp;Host.CreateDefaultBuilder(args)&nbsp;.ConfigureWebHostDefaults(webBuilder&nbsp;=&gt;&nbsp;{++&nbsp;webBuilder.ConfigureKestrel(serverOptions&nbsp;=&gt;++&nbsp;{++&nbsp;serverOptions.Listen(“0.0.0.0”,&nbsp;5000);++&nbsp;})&nbsp;.UseStartup&lt;Startup&gt;();&nbsp;});<!-- raw HTML omitted --></p><precode language="" precodenum="2"></precode><!-- raw HTML omitted --><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/83/  

