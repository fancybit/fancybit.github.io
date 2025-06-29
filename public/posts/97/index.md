# Laya踩坑记录

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">laya踩坑记录</h1></div>

<div class="content" id="content"><p>场景名不能用Game否则qq小游戏发布时会和系统内的Game类冲突造成Game.scene找不到。</p><p>挂到场景和场景内物体的组件从Laya.Script派生，文档类和Sprite的runtime类要派生自Sprite以及后继类</p><p>Script要获取物体引用调用.owner 然后as成Sprite或者它的runtime类</p><p>Sprite.getComponent(xxx)获取其上挂载的Script类</p><p>很多操作在Script的构造函数被调用时没有完成，所以在onEnable里处理初始化是最合适的</p><p>Script有一组对应生命周期阶段的虚函数可以直接被覆盖 注意覆盖时保证返回值和参数类型都一致</p><p>Sprite需要自己注册事件</p><p>重力感应：</p><p>微信小程序和QQ小程序需要先启动重力感应，并且使用不同于H5的另外一个API设置回调，下面例子</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>读取rotation有时候会变成NaN 用默认值0&nbsp;</p><p>x.rotation = xxx || 0;</p><p>解决</p><p>可在属性窗口看到的Laya.Script成员变量:</p><p>/** @prop {name:“属性显示名”,tips:“提示”,type:“属性类型名”,default:属性默认值} */</p><p>public propName:XXX = YYY</p><p>上面的空格都不能省略 否则属性窗口会显示不出</p><p>默认值需要在default和 = YYY一起指定</p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/97/  

