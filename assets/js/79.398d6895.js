(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{339:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var a=this,s=a._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"java并发-线程基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java并发-线程基础"}},[a._v("#")]),a._v(" Java并发-线程基础")]),a._v(" "),s("p",[a._v("[toc]")]),a._v(" "),s("blockquote",[s("p",[a._v("学习过程中出现的疑问")])]),a._v(" "),s("ul",[s("li",[a._v("线程中断")]),a._v(" "),s("li",[a._v("join()")]),a._v(" "),s("li",[a._v("Excutor")]),a._v(" "),s("li",[a._v("synchronized和ReentrantLock的区别")]),a._v(" "),s("li",[a._v("为什么wait需要在同步代码块中调用")]),a._v(" "),s("li",[a._v("Condition和Lock")])]),a._v(" "),s("blockquote",[s("p",[a._v("带着问题学本节知识点")])]),a._v(" "),s("ul",[s("li",[a._v("线程有哪几种状态? 分别说明从一种状态到另一种状态转变有哪些方式?")]),a._v(" "),s("li",[a._v("通常线程有哪几种使用方式?")]),a._v(" "),s("li",[a._v("基础线程机制有哪些?")]),a._v(" "),s("li",[a._v("线程的中断方式有哪些?")]),a._v(" "),s("li",[a._v("线程的互斥同步方式有哪些? 如何比较和选择?")]),a._v(" "),s("li",[a._v("线程之间有哪些协作方式?")])]),a._v(" "),s("h2",{attrs:{id:"线程的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的状态"}},[a._v("#")]),a._v(" 线程的状态")]),a._v(" "),s("h3",{attrs:{id:"新建（new）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建（new）"}},[a._v("#")]),a._v(" 新建（New）")]),a._v(" "),s("p",[a._v("线程创建后尚未启动")]),a._v(" "),s("h3",{attrs:{id:"可运行（runnable）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可运行（runnable）"}},[a._v("#")]),a._v(" 可运行（Runnable）")]),a._v(" "),s("p",[a._v("可能正在运行，也可能正在等待CPU的时间片。也就是Ready和Running两种状态。")]),a._v(" "),s("h3",{attrs:{id:"阻塞（blocking）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞（blocking）"}},[a._v("#")]),a._v(" 阻塞（Blocking）")]),a._v(" "),s("p",[a._v("表示线程在等待获取一个排他锁。")]),a._v(" "),s("h3",{attrs:{id:"无限期等待（waiting）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无限期等待（waiting）"}},[a._v("#")]),a._v(" 无限期等待（Waiting）")]),a._v(" "),s("p",[a._v("等待其他线程显式唤醒，否则不会被分配时间片。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("进入方法")]),a._v(" "),s("th",[a._v("退出方法")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("没有设置 Timeout 参数的 Object.wait() 方法")]),a._v(" "),s("td",[a._v("Object.notify() / Object.notifyAll()")])]),a._v(" "),s("tr",[s("td",[a._v("没有设置 Timeout 参数的 Thread.join() 方法")]),a._v(" "),s("td",[a._v("被调用的线程执行完毕")])]),a._v(" "),s("tr",[s("td",[a._v("LockSupport.park() 方法")]),a._v(" "),s("td",[a._v("-")])])])]),a._v(" "),s("h3",{attrs:{id:"限期等待（timed-waiting）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限期等待（timed-waiting）"}},[a._v("#")]),a._v(" 限期等待（Timed waiting）")]),a._v(" "),s("p",[a._v("无需等待其他线程的唤醒，一定时间后会被系统自动唤醒。")]),a._v(" "),s("p",[a._v("调用 Thread.sleep() 方法使线程进入限期等待状态时，常常用“使一个线程睡眠”进行描述。")]),a._v(" "),s("p",[a._v("调用 Object.wait() 方法使线程进入限期等待或者无限期等待时，常常用“挂起一个线程”进行描述。")]),a._v(" "),s("p",[a._v("睡眠和挂起是用来描述行为，而阻塞和等待用来描述状态。")]),a._v(" "),s("p",[a._v("阻塞和等待的区别在于，阻塞是被动的，它是在等待获取一个排它锁。而等待是主动的，通过调用 Thread.sleep() 和 Object.wait() 等方法进入。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("进入方法")]),a._v(" "),s("th",[a._v("退出方法")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Thread.sleep() 方法")]),a._v(" "),s("td",[a._v("时间结束")])]),a._v(" "),s("tr",[s("td",[a._v("设置了 Timeout 参数的 Object.wait() 方法")]),a._v(" "),s("td",[a._v("时间结束 / Object.notify() / Object.notifyAll()")])]),a._v(" "),s("tr",[s("td",[a._v("设置了 Timeout 参数的 Thread.join() 方法")]),a._v(" "),s("td",[a._v("时间结束 / 被调用的线程执行完毕")])]),a._v(" "),s("tr",[s("td",[a._v("LockSupport.parkNanos() 方法")]),a._v(" "),s("td",[a._v("-")])]),a._v(" "),s("tr",[s("td",[a._v("LockSupport.parkUntil() 方法")]),a._v(" "),s("td",[a._v("-")])])])]),a._v(" "),s("h3",{attrs:{id:"死亡（terminated）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死亡（terminated）"}},[a._v("#")]),a._v(" 死亡（Terminated）")]),a._v(" "),s("p",[a._v("可以是线程结束任务之后自己结束，或者产生了异常而结束。")]),a._v(" "),s("h2",{attrs:{id:"线程的实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的实现方式"}},[a._v("#")]),a._v(" 线程的实现方式")]),a._v(" "),s("p",[a._v("有三种使用线程的方法:")]),a._v(" "),s("ul",[s("li",[a._v("实现 Runnable 接口；")]),a._v(" "),s("li",[a._v("实现 Callable 接口；")]),a._v(" "),s("li",[a._v("继承 Thread 类。")])]),a._v(" "),s("h3",{attrs:{id:"实现runnable接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现runnable接口"}},[a._v("#")]),a._v(" 实现Runnable接口")]),a._v(" "),s("p",[a._v("需要实现 run() 方法。")]),a._v(" "),s("p",[a._v("通过 Thread 调用 start() 方法来启动线程。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyRunnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyRunnable")]),a._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyRunnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" thread "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"实现callable-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现callable-接口"}},[a._v("#")]),a._v(" 实现Callable 接口")]),a._v(" "),s("p",[a._v("通过Callable接口创建线程主要是通过实现Callable接口，然后用FetureTask包装Callable接口的实现类，然后再通过Thread去包装这个FetureTask的对象。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCallable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecutionException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InterruptedException")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCallable")]),a._v(" mc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCallable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" ft "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" thread "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"继承-thread-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承-thread-类"}},[a._v("#")]),a._v(" 继承 Thread 类")]),a._v(" "),s("p",[a._v("同样也是需要实现 run() 方法，因为 Thread 类也实现了 Runable 接口。")]),a._v(" "),s("p",[a._v("当调用 start() 方法启动一个线程时，虚拟机会将该线程放入就绪队列中等待被调度，当一个线程被调度时会执行该线程的 run() 方法。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyThread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyThread")]),a._v(" mt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    mt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"实现接口-vs-继承-thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现接口-vs-继承-thread"}},[a._v("#")]),a._v(" 实现接口 VS 继承 Thread")]),a._v(" "),s("p",[a._v("实现接口会更好一些，因为:")]),a._v(" "),s("ul",[s("li",[a._v("Java 不支持多重继承，因此继承了 Thread 类就无法继承其它类，但是可以实现多个接口；")]),a._v(" "),s("li",[a._v("类可能只要求可执行就行，继承整个 Thread 类开销过大。")])])])}],!1,null,null,null);s.default=e.exports}}]);