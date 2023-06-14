(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{219:function(s,_,v){s.exports=v.p+"assets/img/image-20210308143537580.b400c89c.png"},312:function(s,_,v){"use strict";v.r(_);var t=[function(){var s=this,_=s._self._c;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"aof持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof持久化"}},[s._v("#")]),s._v(" AOF持久化")]),s._v(" "),_("p",[s._v("AOF持久化是通过保存Redis服务器所执行的写命令来记录数据库状态。服务器启动时，可通过载入和执行AOF文件中保存的命令来还原服务器关闭前的数据库状态。")]),s._v(" "),_("h2",{attrs:{id:"aof持久化的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof持久化的实现"}},[s._v("#")]),s._v(" "),_("strong",[s._v("AOF持久化的实现")])]),s._v(" "),_("p",[s._v("AOF持久化可分为命令追加，文件写入，文件同步三个步骤。")]),s._v(" "),_("h3",{attrs:{id:"命令追加"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令追加"}},[s._v("#")]),s._v(" "),_("strong",[s._v("命令追加")])]),s._v(" "),_("p",[s._v("开启AOF持久化后，服务器执行完一个写命令后，会以协议格式将被执行的写命令"),_("strong",[s._v("追加")]),s._v("到服务器状态的"),_("strong",[s._v("aof_buf缓冲区末尾")]),s._v("：")]),s._v(" "),_("div",{staticClass:"language-c line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redisServer")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//AOF缓冲区")]),s._v("\n    sds aof_buf"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br"),_("span",{staticClass:"line-number"},[s._v("5")]),_("br")])]),_("p",[_("strong",[s._v("AOF文件的写入与同步")])]),s._v(" "),_("p",[s._v("Redis服务器进程就是一个"),_("strong",[s._v("事件循环")]),s._v("，负责接收客户端命令请求及命令回复，时间事件负责执行向"),_("code",[s._v("serverCron")]),s._v("函数这样需要定时运行的函数。服务器每结束一个时间循环前，都会调用"),_("code",[s._v("flushAppendOnlyFile")]),s._v("函数，考虑是否有必要"),_("strong",[s._v("将aof缓冲区中的内容写入和保存至AOF文件")]),s._v("里。这个判断的依据就是根据配置文件的"),_("strong",[s._v("appendfsync")]),s._v("值决定：")]),s._v(" "),_("ul",[_("li",[_("strong",[s._v("always")]),s._v("：将aof_buf缓冲区的所有内容"),_("strong",[s._v("写入并同步")]),s._v("到AOF文件。")]),s._v(" "),_("li",[_("strong",[s._v("everysec")]),s._v("：将aof_buf缓冲区中的所有内容写入到AOF文件，如果上次同步AOF文件的时间"),_("strong",[s._v("超过一秒")]),s._v("，就再次对AOF文件进行同步，并由一个线程专门负责。")]),s._v(" "),_("li",[_("strong",[s._v("no")]),s._v("：将aof_buf缓冲区中的所有内容写入到AOF文件，但并"),_("strong",[s._v("不对AOF文件进行同步")]),s._v("，何时同步"),_("strong",[s._v("由操作系统决定")]),s._v("。")])]),s._v(" "),_("p",[s._v("为什么有写入和同步的区分？写入≠同步")]),s._v(" "),_("p",[s._v("为提高写效率，操作系统一般将写入数据"),_("strong",[s._v("暂时保存在内存缓冲区")]),s._v("，等缓冲区"),_("strong",[s._v("填满或超过")]),s._v("指定时间后才会真正地将"),_("strong",[s._v("数据同步到磁盘里")]),s._v("。操作系统提供了fsync和fdatasync两同步函数，可"),_("strong",[s._v("强制操作系统同步数据")]),s._v("，保证数据安全性。")]),s._v(" "),_("p",[s._v("也就是说，每一次的事件循环，aof_buf中的指令"),_("strong",[s._v("都会被写入操作系统的缓冲区")]),s._v("，根据appendfsync配置，当操作系统缓冲区满足一定条件后，就被"),_("strong",[s._v("真实地写入")]),s._v("磁盘内。")]),s._v(" "),_("h3",{attrs:{id:"aof文件的载入与数据还原"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof文件的载入与数据还原"}},[s._v("#")]),s._v(" "),_("strong",[s._v("AOF文件的载入与数据还原")])]),s._v(" "),_("p",[s._v("步骤如下：")]),s._v(" "),_("ol",[_("li",[s._v("创建一个没有网络连接的伪客户端。由于Redis命令只能在客户端上下文中执行，并且AOF文件在本地而不是网络。")]),s._v(" "),_("li",[s._v("解析AOF文件并取出一条写命令。")]),s._v(" "),_("li",[s._v("使用伪客户端执行被读出的写命令")]),s._v(" "),_("li",[s._v("持续执行2和3，直到所有写命令都已经执行完毕")])]),s._v(" "),_("p",[_("img",{attrs:{src:v(219),alt:"image-20210308143537580"}})]),s._v(" "),_("h3",{attrs:{id:"aof创建和重写时对过期键的处理套路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof创建和重写时对过期键的处理套路"}},[s._v("#")]),s._v(" "),_("strong",[s._v("AOF创建和重写时对过期键的处理套路")])]),s._v(" "),_("p",[s._v("如果数据库中的某个键已经过期且没有被删除，AOF文件不会因为这个对过期键产生影响。当过期间被惰性删除或定期删除后，AOF文件"),_("strong",[s._v("追加一条DEL命令")]),s._v("来显式删除。")]),s._v(" "),_("p",[s._v("AOF重写时，程序会对数据库的键检查，已过期的"),_("strong",[s._v("不会保存")]),s._v("到AOF文件中。")]),s._v(" "),_("h2",{attrs:{id:"aof重写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof重写"}},[s._v("#")]),s._v(" "),_("strong",[s._v("AOF重写")])]),s._v(" "),_("p",[s._v("因为AOF持久化会将所有的写命令都记录，所以会有冗余情况，比如频繁地创建删除键值对，或者对同一个键的值频繁更新，都会导致文件的内容越来越多。所以需要一种"),_("strong",[s._v("瘦身的机制")]),s._v("确保AOF里存的都是必不可少的精华。")]),s._v(" "),_("p",[s._v("Redis提供AOF文件重写功能，让服务器创建一个新的AOF文件，替代现有的AOF文件，减少冗余命令。")]),s._v(" "),_("h3",{attrs:{id:"aof文件重写的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aof文件重写的实现"}},[s._v("#")]),s._v(" "),_("strong",[s._v("AOF文件重写的实现")])]),s._v(" "),_("p",[s._v("在新的AOF文件的重写过程中，不会读取旧AOF文件，而是通过"),_("strong",[s._v("读取数据库状态")]),s._v("来实现的。首先从数据库中读取键现在的值，然后用一条命令记录键值对，代替之前记录的多条命令。")]),s._v(" "),_("p",[s._v("注：在重写时会先检查键所包含的元素数量，因为多元素的键在命令转换时可能会导致客户端输入缓冲区溢出。因此读取配置中对应的常量，默认超过64个就用多条指令记录。")]),s._v(" "),_("p",[_("strong",[s._v("AOF后台重写过程")])]),s._v(" "),_("p",[s._v("AOF重写的过程中会有大量的写入操作，为了避免Redis服务器长时间的阻塞，重写工作将被放到"),_("strong",[s._v("子进程中进行")]),s._v("。这样的好处是：")]),s._v(" "),_("ul",[_("li",[s._v("父进程仍然可继续处理请求。")]),s._v(" "),_("li",[s._v("子进程有自己的数据副本，而非子线程，可以避免一些线程安全性问题的出现。")])]),s._v(" "),_("p",[s._v("子进程在执行AOF重写期间，服务器进程还需要继续处理命令请求，而新的命令可能会对现有的数据库状态进行修改，导致"),_("strong",[s._v("当前数据库状态与重写后的AOF文件保存状态不一致")]),s._v("。为解决这个问题，设置了"),_("strong",[s._v("AOF重写缓冲区")]),s._v("。")]),s._v(" "),_("p",[s._v("当重写子进程创建后，Redis服务器执行完写命令就会将其写入AOF缓冲区和AOF重写缓冲区，子进程执行重写期间，服务器进程要执行3个工作：")]),s._v(" "),_("ol",[_("li",[s._v("执行客户端发来的命令。")]),s._v(" "),_("li",[s._v("将执行后的写命令追加到AOF缓冲区。")]),s._v(" "),_("li",[s._v("将执行后的写命令追加到AOF重写缓冲区。")])]),s._v(" "),_("p",[s._v("当子进程完成重写后，会向父进程"),_("strong",[s._v("发送一个信号")]),s._v("，父进程接收并调用信号处理函数，将重写缓冲区的所有内容写到新AOF文件中，原子地覆盖现有的AOF文件。因此整个AOF文件重写的过程中，只有"),_("strong",[s._v("信号处理函数执行时，才会阻塞")]),s._v("，将性能损耗降到最低。")])])}],a=v(0),n=Object(a.a)({},(function(){this._self._c;return this._m(0)}),t,!1,null,null,null);_.default=n.exports}}]);