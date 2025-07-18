# Unity 自定义Inspector面板时的数据持久化问题

<div class="header"><h1 class="single-title animate__animated animate__pulse animate__faster">Unity 自定义Inspector面板时的数据持久化问题</h1></div>

<div class="content" id="content"><p>自定义Inspector面板的步骤：</p><ol><li>Unity内创建自定义的Inspector需要在Asset的任意文件夹下创建一个名字是Editor的文件夹，随后这个文件夹内的cs文件就会被放在vstu生成的Editor程序集里。</li><li>自定义Inspector需要创建一个继承自UnityEditor.Editor的类,并且提供一个[CustomEditor(typeof(Behavior))]类特性标记，其中Behaviour就是要自定义观察器的目标组件类型。</li><li>然后在Editor派生类里实现OnInspectorGUI方法，可以使用GUILayout,GUI,EditorGUILayout,EditorGUI的静态方法进行界面绘制。</li><li>如果要在自定义的部分后面显示默认Inspector内容的话，在方法结尾调用一次DrawDefaultInspector();</li></ol><p>观察目标的数据持久化问题：</p><p>　被观察的目标Prefab上或者场景内对象上挂载的MonoBehavior继承自UnityEngine.Object，支持持久化自身数据，默认会持久化所有public的成员变量。而派生自Editor的自定义Inspector则不适合用来存储数据，因为同一Inspector是可以用来查看不同MonoBehavior实例的。因此需要保存下来的数据，比如自定义Inspector里才显示的文本字段，数组，都应该放进MonoBehaviour，然后定为public访问权限，加上[HideInInspector]标记。</p><p>　这里我掉了个坑，在自定义的Inspector里通过target字段来读写MonoBehaviour成员是不会自动持久化的，需要在Editor派生类 （也就是控制自定义Inspector显示的类里）对需要操作的每个成员变量定义一个SerializedProperty类型的属性封装对象。然后用类似以下的方式获取属性实例，这里m_exportPath是被观察MonoBehaviour的字段：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>　serializadObject是Inspector的只读属性，表示target的序列化后数据。在OnInspectorGUI虚方法实现里，第一句最好就是</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>　这样是更新target数据到序列化后数据，然后在方法最后调用：</p><!-- raw HTML omitted --><!-- raw HTML omitted --><p>　如果需要DrawDefaultInspector(); 必须放在&nbsp;serializedObject.ApplyModifiedProperties(); 之后。</p><p></p><p>参考文章：</p><p>Unity Editor 基础篇（二）：自定义 Inspector 面板：</p><p><!-- raw HTML omitted --><a href="https://gameinstitute.qq.com/community/detail/117632" target="_blank" rel="external nofollow noopener noreferrer">https://gameinstitute.qq.com/community/detail/117632</a><!-- raw HTML omitted --></p><!-- raw HTML omitted --></div>



---

> Author: fancybit  
> URL: http://fancybit.github.io/posts/8/  

