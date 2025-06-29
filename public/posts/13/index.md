# Windows通过秘钥使用ssh和scp

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">windows通过秘钥使用ssh和scp</h1></div>

<div class="content" id="content"><p>windows10内置支持了ssh和scp等仿linux指令，可以让我们方便的使用类似linux的工作流把日常的代码资源部署维护工作写成脚本（批处理）。</p><p>ssh和scp都有-i参数可以通过指定一个私钥文件位置来远程登录linux或者windows操作系统，但是每次使用指令时都用-i参数指定私钥地址会比较麻烦。我们还可以通过ssh-add方法来添加私钥文件到缓存，这样以后非对称加密秘钥对不变的话就可以直接远程操作不需要输入密码或者私钥文件了。</p><p>这个操作需要先启用ssh-agent服务，这个服务在我的windows10里默认是禁用的,所以需要先在powershell里设置成auto并且启动它：</p><p>PS C:\windows\system32&gt; set-service -name ssh-agent -startuptype auto<br> PS C:\windows\system32&gt; get-service ssh-agent</p><p>Status Name DisplayName<br> -–-– -–- –-–-–-–<br> Stopped ssh-agent OpenSSH Authentication Agent</p><p>PS C:\windows\system32&gt; start-service ssh-agent<br> PS C:\windows\system32&gt;</p><p>我的windows用户名是fancy 假设把私钥文件放在了c:\windows\user\fancy\key</p><p>就这样添加私钥：</p><!-- raw HTML omitted --><p>也可以把秘钥文件改名成</p><p>identity</p><p>或者</p><p>id_rsa</p><p>放在~/.ssh/（也就是c:\users\fancy.ssh\）</p><p>然后直接ssh-add 这样就会自动把这些私钥文件加入到缓存，以后就不用每次使用-i参数了。</p><p>scp也是使用同样的-i参数，并且和上述操作共用秘钥缓存</p><p>然后我们就可以用scp把脚本文件复制到远程服务器，然后使用ssh在远程服务器上执行起来，实现脚本化操作远程服务器了。</p><p>OK 更多参看linux服务器操作方面的书籍，还有：</p><p>powershell ssh-agent 无法工作：<!-- raw HTML omitted --><a href="https://www.cnblogs.com/crb912/p/9987590.html" target="_blank" rel="external nofollow noopener noreferrer">https://www.cnblogs.com/crb912/p/9987590.html</a><!-- raw HTML omitted --></p><p></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://localhost:1313/posts/13/  

