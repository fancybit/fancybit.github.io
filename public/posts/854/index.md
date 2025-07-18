# Unity3d Mirror插件联机开发备忘

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Unity3d Mirror插件联机开发备忘</h1></div>

<div class="content" id="content"><p>1、序列化的对象不能含有环状引用，一个典型的例子是单例模式，它的instance静态变量肯定要引用到本体，所以需要注意。如果拿这种对象去spawn，即使在NetworkManager里注册了这个物体 也一样会spawn失败，因为中途涉及到序列化，传输，反序列化的步骤。解决这种问题的简单方法目前想到的是设置一个数据类型，保证其中不包含环状引用 然后在客户端拿这个类型的对象来收集无法序列化的类的对象成员，然后进行序列化或者反序列化，或者去spawn</p><p>2、没有Spawn过的对象上调用ClientRPC方法会被忽略，而Spawn的对象需要和服务端同步，所以需要被序列化。mirror的序列化不可以包含环状引用，因此单例对象上是无法调用ClientRPC的，需要把这些单例去掉，才能在上面使用ClientRPC。</p><p>3、如果没有NetworkManager在场景里的话，挂上NetworkIdentity标签的物体会在场景启动时被禁用，还不知道为什么这么设计，猜测可能是为了避免不同时生成物体造成的跨端（服务端客户端）id混乱，毕竟全都spawn出来的话，生成的物体的identity的netid是一致的。</p><p>4、一个物体刚在服务端spawn的时候对它调用Rpc方法会失效，可能是客户端还没来得及生成对应的物体。这种情况需要用协程来延迟，也可以用UniTask库的async await轮询器和封装好的等待对象。</p><p>5、NetworkIdentity 的Server only属性被勾选的时候就不会在Spawn之后自动在客户端生成对应物体。</p><p>6、默认NetworkTransform的缩放同步是未开启的。</p><p>7、对一个对象使用NetworkServer.Spawn的时候，会同时在客户端创建其子对象树结构，但是未使用NetworkBehaviour的对象是否会一起创建？答案是会的，有一个例外就是一个spawn出来的transform树形体系只能在根对象有一个IdentifyComponent。其他子级不能有Identify或者从NetworkBehaviour派生的component,因为会自动引入IdentifyComponent。这种情况就需要写代码自行完成spawn之后的对象体系的挂接工作。</p><p>8、在一个跟节点有IdentifyComponent的体系上，被序列化的体系内不能有序列化不支持的类型，包括Component或者GameObject。但是我们可以在生成的体系中把层级关系让unity内置的transform树形结构来维护，这可以解决大部分引用不含IdentityComponent的子级节点的引用会妨碍序列化的问题。另外含有IdentifyComponent的子级组件的引用不会妨害序列化，因为这部分会自动被过滤掉不参加序列化，需要自行Spawn再挂接。</p><p>9、序列化只能保持在prefab就有的transform层级结构,从场景中的物体进行序列化的话，用代码后续添加的子级不会跟着被序列化传递到客户端。因为本质上spawn就是把用于寻找资源的AssetID发送到客户端，然后客户端同样用AssetID来找到预制件，然后实例化预制件，赋予同时传递来的NetID，用于接收后续发来的同步消息的分发凭据。所以服务端的物体，实例化后，spawn之前的对象层级变化，都不会在客户端同步，甚至可能造成不存在的NetID的问题。</p><p>10、command方法里再调用command方法可能造成服务端执行不完整，应该避免。</p><p>11、SyncXXX系列容器里同步一样是用Waves，所以元素类型不能是GameObject或者Component。可以通过存储NetId来变通实现远程同步。</p><p>12、isServer isClient isServerOnly isLocalPlayer</p><p>13、NetworkServer和NetworkClient是Transporter上第二层的连接和通信</p><p>14、NetworkServer.AddPlayer(conn,gameObject)把一个gameObject关联到一个conn作为Player的表示物体。conn的identity属性被赋予gameObject的identity组件。</p><p>15、调用NetworkManager游戏场景切换时，服务端先进行切换，然后广播场景切换消息到所有客户端，在LateUpdate里轮询检测场景切换是否完成:</p><ul><li></li></ul><p>，然后各自调用状态同步代码。</p><p>替换roomPlayer到gamePlayer和传递参数</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>创建RoomPlayer</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>NetworkRoomManager.OnClientEnterRoom添加RoomPlayerObject</p><p>NetworkRoomPlayer的OnGUI绘制了自己的准备状态和按钮</p><p>NetworkRoomManager的OnGUI绘制了进入房间后的UI底版</p><p>设置了DontDestroyOnLoad的对象如果重新设置setParent会导致不销毁标记失效</p></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/854/  

