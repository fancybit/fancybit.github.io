# EF Core 配合pomelo.EntityFramework.Mysql使用

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">EF Core 配合pomelo.EntityFramework.Mysql使用</h1></div>

<div class="content" id="content"><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><p>要加上这个NuGet包否则dot net ef xxx的指令会报错：</p><!-- raw HTML omitted --><p>另外两个需要的NuGet包是：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>然后在程序包管理器控制台把默认项目设置成Model项目 Context类里加上配置：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>运行dotnet ef migrations add DATA_MODEL_NAME</p><p>就可以创建可迁移数据模型了</p><p>其他常用指令：</p><p>1.增加迁移 dotnet ef migrations add 名字</p><p>2.删除迁移 dotnet ef migrations remove</p><p>3.更新数据库 dotnet ef database update</p><p>4.生成脚本 dotnet ef migrations script</p><p>5.还原数据库版本 dotnet ef database update 名字</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/92/  

