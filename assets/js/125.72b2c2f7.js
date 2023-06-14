(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{343:function(t,a,s){"use strict";s.r(a);var r=s(0),n=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("p",[t._v("1、ArrayList 和 Vector 的区别。")]),t._v(" "),a("p",[t._v("这两个类都实现了 List 接口（List 接口继承了 Collection 接口），他们都是有序集合，即存储在这两个集合中的元素的位置都是有顺序的，相当于一种动态的数组，我们以后可以按位置索引号取出某个元素，并且其中的数据是允许重复的。")]),t._v(" "),a("ul",[a("li",[t._v("Vector是同步的，Vector的对象是线程安全的；ArrayList是异步的，ArrayList的对象不是线程安全的。同步影响执行效率，所以ArrayList比Vector性能好。")]),t._v(" "),a("li",[t._v("ArrayList和Vector都有一个初始的容量大小，当存储的空间不够时，需要增加存储空间，Vector默认增长原来的一倍，而ArrayList是原来的0.5倍。ArrayList与Vector都可以设置初始的空间大小，Vector还可以设置增长的空间大小。")])]),t._v(" "),a("p",[t._v("2、说说 ArrayList,Vector, LinkedList 的存储性能和特性。\nArrayList 和 Vector 都是使用数组方式存储数据，此数组元素数大于实际存储的数据以便增加和插入元素，它们都允许直接按序号索引元素，但是插入元素要涉及数组元素移动等内存操作，所以索引数据快而插入数据慢，Vector 由于使用了 synchronized 方法（线程安全）。\n通常性能上较 ArrayList 差，而 LinkedList 使用双向链表实现存储，按序号索引数据需要进行前向或后向遍历，但是插入数据时只需要记录本项的前后项即可，所以插入速度较快 。\nArrayList 在查找时速度快，LinkedList 在插入与删除时更具优势。")]),t._v(" "),a("p",[t._v("3、 快速失败 (fail-fast) 和安全失败 (fail-safe) 的区别是什么？")]),t._v(" "),a("p",[t._v("Iterator 的安全失败是基于对底层集合做拷贝，因此，它不受源集合上修改的影响。java.util 包下面的所有的集合类都是快速失败的，而 java.util.concurrent 包下面的所有的类都是安全失败的。快速失败的迭代器会抛出 ConcurrentModificationException 异常，而安全失败的迭代器永远不会抛出这样的异常。")]),t._v(" "),a("p",[t._v("4、 HashMap 的工作原理是什么?")]),t._v(" "),a("p",[t._v("Java 中的 HashMap 是以键值对 (key-value) 的形式存储元素的。HashMap 需要一个 hash 函数，hash函数会对哈希值进行高低位异或，减少哈希碰撞，从而使分布更加均匀。当调用 put() 方法的时候，HashMap 会计算 key 的 hash 值，计算出值存储的值在数组中的位置，判断是否会发生哈希冲突，如果不会发生哈希冲突，直接把值存放在数组中， 如果存在哈希冲突，那么会判断当前存放的位置是红黑树还是链表，如果是红黑树，直接插入值，如果是链表，那么计算插入后链表长度是否大于8，如果链表长度大于8，那么会先转换为红黑树，再插入数据。")]),t._v(" "),a("p",[t._v("5、HashMap扩容原理")]),t._v(" "),a("p",[t._v("当HashMap的容量超过最大容量（默认12）*负载因子(默认0.75)时，会将容量扩大两倍，新建一个hashmap，然后重新计算存储位置，把旧值移过去。")]),t._v(" "),a("p",[t._v("6、ArrayList和LinkedList的区别？")]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("ol",[a("li",[t._v("LinkedList 实现了 List 和 Deque 接口，一般称为双向链表；ArrayList 实现了 List 接口，动态数组；")]),t._v(" "),a("li",[t._v("LinkedList 在插入和删除数据时效率更高，ArrayList 在查找某个 index 的数据时效率更高；")]),t._v(" "),a("li",[t._v("LinkedList 比 ArrayList 需要更多的内存；")])]),t._v(" "),a("p",[t._v("7、HashSet是如何保证数据不可重复的？")]),t._v(" "),a("p",[t._v("HashSet的底层其实就是HashMap，只不过我们"),a("strong",[t._v("HashSet是实现了Set接口并且把数据作为K值，而V值一直使用一个相同的虚值来保存")]),t._v("，我们可以看到源码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PRESENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用HashMap的put方法,PRESENT是一个至始至终都相同的虚值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("8、数组 (Array) 和列表 (ArrayList) 有什么区别？什么时候应该使用 Array 而不是 ArrayList？\nArray 可以包含基本类型和对象类型，ArrayList 只能包含对象类型。\nArray 大小是固定的，ArrayList 的大小是动态变化的。\nArrayList 处理固定大小的基本数据类型的时候，这种方式相对比较慢。")])])}],!1,null,null,null);a.default=n.exports}}]);