# 好商城二开备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">好商城二开备忘</h1></div>

<div class="content" id="content"><p>处理请求的核心流程：</p><p>base.php</p><!-- raw HTML omitted --><p>install/index.php</p><p>&nbsp;183行 安装时随机生成md5_key 用于cookie等地方加密 在encrypt函数中使用</p><p>设置选项在数据库的setting表里</p><p>cp 权限检测</p><p>init</p><p>&nbsp;读取配置文件到全局变量$setting_config</p><p>&nbsp;设置MD5 KEY</p><p>&nbsp;检测配置时区</p><p>&nbsp;配置启动session</p><p>&nbsp;配置语言</p><p>control&nbsp;</p><p>&nbsp;解析url get参数传递来的action op&nbsp;</p><p>&nbsp;控制转移到controller</p><p>/data/config/config.ini.php 存放了大多配置内容 包括用https还是http协议</p><p>/shop/index.php是商城入口</p><p>/wap/是手机h5入口</p><p>/admin/总管理入口</p><p>/mobile/ 手机服务端</p><p>/admin/include/menu.php 框架菜单列表</p><p>/data/log/ 日志文件 包括支付API的日志</p><p>/moblie/控制层修改：</p><p>\mobile\framework\function\function.php</p><!-- raw HTML omitted --><p>添加ob_clean()和ob_end_flush()解决ajax获取json可能被某些插件干扰的问题</p><p>默认布局模板：</p><p>/shop/templates/default/layout/home_layout.php</p><p>顶部布局模板：</p><p>/shop/templates/default/layout/layout_top.php</p><p>总后台管理端：</p><p>分多个模块 一个顶部菜单项一个模块，模块的M C层存放在下面路径的文件夹下：</p><p>/admin/modules/</p><p>由/admin/index.php调用 /core/framework/base/core/base.php 中的run方法，进入MVC流程</p><p>几个/admin/control/里的控制器是第一层，这些控制器从control.php里的SystemControl派生，在创建时都会先调用SystemControl的构造函数：</p><p>&nbsp;设置语言</p><p>&nbsp;检测是否登录</p><p>&nbsp;调用systemLogin函数，如果cookie取不到正确的信息则跳转登录页面</p><p>&nbsp;检测权限</p><p>&nbsp;用户ID为1的根用户可以越过检测控制所有功能</p><p>&nbsp;转码防止GBK乱码</p><p></p><p>index layout</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/73/  

