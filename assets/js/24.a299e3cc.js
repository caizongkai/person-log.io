(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{191:function(v,_,a){v.exports=a.p+"assets/img/0082zybply1gc8tjehg8bj318m0lbtbu.b5fde4f3.jpg"},371:function(v,_,a){"use strict";a.r(_);var t=[function(){var v=this,_=v._self._c;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"jvm内存结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存结构"}},[v._v("#")]),v._v(" JVM内存结构")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("线程私有")]),v._v("：程序计数器、栈、本地栈")]),v._v(" "),_("li",[_("strong",[v._v("线程共享")]),v._v("：堆、堆外内存（Java7的永久代或JDK8的元空间、代码缓存）")])]),v._v(" "),_("h2",{attrs:{id:"一、程序计数器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、程序计数器"}},[v._v("#")]),v._v(" 一、程序计数器")]),v._v(" "),_("p",[v._v("程序计数器是一块较小的内存空间，可以看作是当前线程所执行的字节码的"),_("strong",[v._v("行号指示器")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("使用PC寄存器存储字节码指令地址有什么用呢？为什么使用PC寄存器记录当前线程的执行地址呢？")])])]),v._v(" "),_("p",[v._v("因为CPU需要不停的切换各个线程，这时候切换回来以后，就得知道接着从哪开始继续执行。JVM的字节码解释器就需要通过改变PC寄存器的值来明确下一条应该执行什么样的字节码指令。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("程序计数器为什么会被设定为线程私有的？")])])]),v._v(" "),_("p",[v._v("多线程在一个特定的时间段内只会执行其中某一个线程方法，CPU会不停的做任务切换，这样必然会导致经常中断或恢复。为了能够准确的记录各个线程正在执行的当前字节码指令地址，所以为每个线程都分配了一个PC寄存器，每个线程都独立计算，不会互相影响。")]),v._v(" "),_("h2",{attrs:{id:"二、虚拟机栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、虚拟机栈"}},[v._v("#")]),v._v(" 二、虚拟机栈")]),v._v(" "),_("blockquote",[_("p",[v._v("Java 虚拟机栈(Java Virtual Machine Stacks)，早期也叫 Java 栈。每个线程在创建的时候都会创建一个虚拟机栈，其内部保存一个个的栈帧(Stack Frame），对应着一次次 Java 方法调用，是线程私有的，生命周期和线程一致。")])]),v._v(" "),_("p",[_("strong",[v._v("作用")]),v._v("：主管 Java 程序的运行，它保存方法的"),_("strong",[v._v("局部变量、部分结果")]),v._v("，并参与方法的调用和返回。")]),v._v(" "),_("h3",{attrs:{id:"栈中存储什么？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈中存储什么？"}},[v._v("#")]),v._v(" 栈中存储什么？")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("每个线程都有自己的栈，栈中的数据都是以"),_("strong",[v._v("栈帧（Stack Frame）的格式存在")])])]),v._v(" "),_("li",[_("p",[v._v("在这个线程上正在执行的每个方法都各自有对应的一个栈帧")])]),v._v(" "),_("li",[_("p",[v._v("栈帧是一个内存区块，是一个数据集，维系着方法执行过程中的各种数据信息")])])]),v._v(" "),_("h3",{attrs:{id:"栈运行原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈运行原理"}},[v._v("#")]),v._v(" 栈运行原理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("JVM 直接对 Java 栈的操作只有两个，对栈帧的"),_("strong",[v._v("压栈")]),v._v("和"),_("strong",[v._v("出栈")]),v._v("，遵循“先进后出/后进先出”原则")])]),v._v(" "),_("li",[_("p",[v._v("在一条活动线程中，一个时间点上，只会有一个活动的栈帧。即只有当前正在执行的方法的栈帧（"),_("strong",[v._v("栈顶栈帧")]),v._v("）是有效的，这个栈帧被称为"),_("strong",[v._v("当前栈帧")]),v._v("（Current Frame），与当前栈帧对应的方法就是"),_("strong",[v._v("当前方法")]),v._v("（Current Method），定义这个方法的类就是"),_("strong",[v._v("当前类")]),v._v("（Current Class）")])]),v._v(" "),_("li",[_("p",[v._v("执行引擎运行的所有字节码指令只针对当前栈帧进行操作")])]),v._v(" "),_("li",[_("p",[v._v("如果在该方法中调用了其他方法，对应的新的栈帧会被创建出来，放在栈的顶端，称为新的当前栈帧")])]),v._v(" "),_("li",[_("p",[v._v("不同线程中所包含的栈帧是不允许存在相互引用的，即不可能在一个栈帧中引用另外一个线程的栈帧")])]),v._v(" "),_("li",[_("p",[v._v("如果当前方法调用了其他方法，方法返回之际，当前栈帧会传回此方法的执行结果给前一个栈帧，接着，虚拟机会丢弃当前栈帧，使得前一个栈帧重新成为当前栈帧")])]),v._v(" "),_("li",[_("p",[v._v("Java 方法有两种返回函数的方式，"),_("strong",[v._v("一种是正常的函数返回，使用 return 指令，另一种是抛出异常，不管用哪种方式，都会导致栈帧被弹出")])])])]),v._v(" "),_("h3",{attrs:{id:"栈帧的内部结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈帧的内部结构"}},[v._v("#")]),v._v(" 栈帧的内部结构")]),v._v(" "),_("p",[v._v("每个"),_("strong",[v._v("栈帧")]),v._v("（Stack Frame）中存储着：")]),v._v(" "),_("ul",[_("li",[v._v("局部变量表（Local Variables）")]),v._v(" "),_("li",[v._v("操作数栈（Operand Stack）(或称为表达式栈)")]),v._v(" "),_("li",[v._v("动态链接（Dynamic Linking）：指向运行时常量池的方法引用")]),v._v(" "),_("li",[v._v("方法返回地址（Return Address）：方法正常退出或异常退出的地址")]),v._v(" "),_("li",[v._v("一些附加信息")])]),v._v(" "),_("p",[_("img",{attrs:{src:a(191),alt:"jvm-stack-frame"}})]),v._v(" "),_("h4",{attrs:{id:"局部变量表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#局部变量表"}},[v._v("#")]),v._v(" 局部变量表")]),v._v(" "),_("p",[v._v("是一组变量值存储空间，"),_("strong",[v._v("主要用于存储方法参数和定义在方法体内的局部变量")]),v._v("，包括编译器可知的各种 Java 虚拟机"),_("strong",[v._v("基本数据类型")]),v._v("（boolean、byte、char、short、int、float、long、double）、"),_("strong",[v._v("对象引用")]),v._v("。")]),v._v(" "),_("p",[v._v("由于局部变量表是建立在线程的栈上，是线程的私有数据，因此"),_("strong",[v._v("不存在数据安全问题")]),v._v("。"),_("strong",[v._v("局部变量表中的变量只在当前方法调用中有效")]),v._v("。")]),v._v(" "),_("h5",{attrs:{id:"槽-slot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#槽-slot"}},[v._v("#")]),v._v(" 槽 Slot")]),v._v(" "),_("p",[v._v("局部变量表最基本的存储单元是 Slot（变量槽），在局部变量表中，32 位以内的类型只占用一个 Slot(包括returnAddress类型)，64 位的类型（long和double）占用两个连续的 Slot。")]),v._v(" "),_("p",[_("strong",[v._v("局部变量表中的变量也是重要的垃圾回收根节点，只要被局部变量表中直接或间接引用的对象都不会被回收")])]),v._v(" "),_("h4",{attrs:{id:"操作数栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作数栈"}},[v._v("#")]),v._v(" 操作数栈")]),v._v(" "),_("p",[v._v("主要用于保存计算过程的中间结果，同时作为计算过程中变量临时的存储空间。")]),v._v(" "),_("h5",{attrs:{id:"栈顶缓存（top-of-stack-cashing）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈顶缓存（top-of-stack-cashing）"}},[v._v("#")]),v._v(" 栈顶缓存（Top-of-stack-Cashing）")]),v._v(" "),_("p",[v._v("将栈顶元素全部缓存在物理 CPU 的寄存器中，以此降低对内存的读/写次数，提升执行引擎的执行效率")]),v._v(" "),_("h4",{attrs:{id:"动态链接（指向运行时常量池的方法引用）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态链接（指向运行时常量池的方法引用）"}},[v._v("#")]),v._v(" 动态链接（指向运行时常量池的方法引用）")]),v._v(" "),_("p",[v._v("在 Java 源文件被编译到字节码文件中时，所有的变量和方法引用都作为"),_("strong",[v._v("符号引用")]),v._v("（Symbolic Reference）保存在 Class 文件的常量池中。"),_("strong",[v._v("每一个栈帧内部都包含一个指向运行时常量池中该栈帧所属方法的引用")]),v._v("。持有该引用是为了支持方法调用过程中的动态链接。")]),v._v(" "),_("p",[_("strong",[v._v("静态链接")]),v._v("：当一个字节码文件被装载进 JVM 内部时，如果被调用的"),_("strong",[v._v("目标方法在编译期可知")]),v._v("，且运行期保持不变时。这种情况下将调用方法的符号引用转换为直接引用的过程称之为静态链接")]),v._v(" "),_("p",[_("strong",[v._v("动态链接")]),v._v("：如果被调用的方法在编译期无法被确定下来，也就是说，只能在程序运行期将调用方法的符号引用转换为直接引用，由于这种引用转换过程具备动态性，因此也就被称之为动态链接")]),v._v(" "),_("h4",{attrs:{id:"方法返回地址（return-address）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法返回地址（return-address）"}},[v._v("#")]),v._v(" 方法返回地址（return address）")]),v._v(" "),_("p",[v._v("用来存放调用该方法的程序计数器的值。")]),v._v(" "),_("h2",{attrs:{id:"三、本地方法栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、本地方法栈"}},[v._v("#")]),v._v(" 三、本地方法栈")]),v._v(" "),_("p",[v._v("本地方法栈用于管理本地方法的调用")]),v._v(" "),_("blockquote",[_("p",[v._v("栈解决程序的运行问题，即程序如何执行，或者说如何处理数据。堆解决的是数据存储的问题，即数据怎么放、放在哪。")])]),v._v(" "),_("h2",{attrs:{id:"四、堆内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、堆内存"}},[v._v("#")]),v._v(" 四、堆内存")]),v._v(" "),_("p",[v._v("对于大多数应用，Java 堆是 Java 虚拟机管理的内存中最大的一块，被所有线程共享。此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数据都在这里分配内存。")]),v._v(" "),_("p",[v._v("虚拟机把堆内存"),_("strong",[v._v("逻辑上")]),v._v("划分成三块区域（分代的唯一理由就是优化 GC 性能）：")]),v._v(" "),_("p",[v._v("新生带（年轻代）：新对象和没达到一定年龄的对象都在新生代")]),v._v(" "),_("p",[v._v("老年代（养老区）：被长时间使用的对象，老年代的内存空间应该要比年轻代更大")]),v._v(" "),_("p",[v._v("元空间（JDK1.8 之前叫永久代）：像一些方法中的操作临时对象等，JDK1.8 之前是占用 JVM 内存，JDK1.8 之后直接使用物理内存")]),v._v(" "),_("h3",{attrs:{id:"内存划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存划分"}},[v._v("#")]),v._v(" 内存划分")]),v._v(" "),_("h4",{attrs:{id:"年轻代-young-generation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#年轻代-young-generation"}},[v._v("#")]),v._v(" 年轻代 (Young Generation)")]),v._v(" "),_("p",[v._v("年轻一代被分为三个部分：Eden，survivor （from+ to）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("大多数新创建的对象都位于 Eden 内存空间中")])]),v._v(" "),_("li",[_("p",[v._v("当 Eden 空间被对象填充时，执行"),_("strong",[v._v("Minor GC")]),v._v("，并将所有幸存者对象移动到一个幸存者空间中")])]),v._v(" "),_("li",[_("p",[v._v("Minor GC 检查幸存者对象，并将它们移动到另一个幸存者空间。所以每次，一个幸存者空间总是空的")])]),v._v(" "),_("li",[_("p",[v._v("经过多次 GC 循环后存活下来的对象被移动到老年代。通常，这是通过设置年轻一代对象的年龄阈值来实现的，然后他们才有资格提升到老一代")])])]),v._v(" "),_("h4",{attrs:{id:"老年代-old-generation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#老年代-old-generation"}},[v._v("#")]),v._v(" 老年代(Old Generation)")]),v._v(" "),_("p",[v._v("旧的一代内存包含那些经过许多轮小型 GC 后仍然存活的对象。通常，垃圾收集是在老年代内存满时执行的。老年代垃圾收集称为 主GC（Major GC），通常需要更长的时间。")]),v._v(" "),_("h3",{attrs:{id:"设置堆内存大小和-oom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置堆内存大小和-oom"}},[v._v("#")]),v._v(" 设置堆内存大小和 OOM")]),v._v(" "),_("p",[v._v("Java 堆用于存储 Java 对象实例，那么堆的大小在 JVM 启动的时候就确定了，我们可以通过 "),_("code",[v._v("-Xmx")]),v._v(" 和 "),_("code",[v._v("-Xms")]),v._v(" 来设定")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-Xmx")]),v._v(" 用来表示堆的起始内存，等价于 "),_("code",[v._v("-XX:InitialHeapSize")])]),v._v(" "),_("li",[_("code",[v._v("-Xms")]),v._v(" 用来表示堆的最大内存，等价于 "),_("code",[v._v("-XX:MaxHeapSize")])])]),v._v(" "),_("p",[v._v("如果堆的内存大小超过 "),_("code",[v._v("-Xms")]),v._v(" 设定的最大内存， 就会抛出 "),_("code",[v._v("OutOfMemoryError")]),v._v(" 异常。")]),v._v(" "),_("p",[v._v("我们通常会将 "),_("code",[v._v("-Xmx")]),v._v(" 和 "),_("code",[v._v("-Xms")]),v._v(" 两个参数配置为相同的值，其目的是为了能够在垃圾回收机制清理完堆区后不再需要重新分隔计算堆的大小，从而提高性能")]),v._v(" "),_("h3",{attrs:{id:"tlab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tlab"}},[v._v("#")]),v._v(" TLAB")]),v._v(" "),_("h4",{attrs:{id:"什么是-tlab-（thread-local-allocation-buffer）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tlab-（thread-local-allocation-buffer）"}},[v._v("#")]),v._v(" 什么是 TLAB （Thread Local Allocation Buffer）?")]),v._v(" "),_("ul",[_("li",[v._v("从内存模型而不是垃圾回收的角度，对 Eden 区域继续进行划分，JVM 为每个线程分配了一个私有缓存区域，它包含在 Eden 空间内")])]),v._v(" "),_("h4",{attrs:{id:"为什么要有-tlab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-tlab"}},[v._v("#")]),v._v(" 为什么要有 TLAB ?")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("堆区是线程共享的，任何线程都可以访问到堆区中的共享数据")])]),v._v(" "),_("li",[_("p",[v._v("由于对象实例的创建在 JVM 中非常频繁，因此在并发环境下从堆区中划分内存空间是线程不安全的")])]),v._v(" "),_("li",[_("p",[v._v("为避免多个线程操作同一地址，需要使用加锁等机制，进而影响分配速度")])])]),v._v(" "),_("h3",{attrs:{id:"堆是分配对象存储的唯一选择吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆是分配对象存储的唯一选择吗"}},[v._v("#")]),v._v(" 堆是分配对象存储的唯一选择吗")]),v._v(" "),_("h4",{attrs:{id:"逃逸分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#逃逸分析"}},[v._v("#")]),v._v(" 逃逸分析")]),v._v(" "),_("p",[v._v("逃逸分析的基本行为就是分析对象动态作用域：")]),v._v(" "),_("ul",[_("li",[v._v("当一个对象在方法中被定义后，对象只在方法内部使用，则认为没有发生逃逸。")]),v._v(" "),_("li",[v._v("当一个对象在方法中被定义后，它被外部方法所引用，则认为发生逃逸。例如作为调用参数传递到其他地方中，称为方法逃逸。")])]),v._v(" "),_("p",[v._v("使用逃逸分析，编译器可以对代码做优化：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("栈上分配")]),v._v("：将堆分配转化为栈分配。如果一个对象在子程序中被分配，要使指向该对象的指针永远不会逃逸，对象可能是栈分配的候选，而不是堆分配")]),v._v(" "),_("li",[_("strong",[v._v("锁消除")]),v._v("：如果一个对象被发现只能从一个线程被访问到，那么对于这个对象的操作可以不考虑同步")]),v._v(" "),_("li",[_("strong",[v._v("分离对象或标量替换")]),v._v("：有的对象可能不需要作为一个连续的内存结构存在也可以被访问到，那么对象的部分（或全部）可以不存储在内存，而存储在 CPU 寄存器")])]),v._v(" "),_("h2",{attrs:{id:"五、方法区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、方法区"}},[v._v("#")]),v._v(" 五、方法区")]),v._v(" "),_("p",[v._v("主要是存储类信息，运行时常量池（字面量和符号引用）（static常量和static变量），编译后的代码（字节码）等数据")]),v._v(" "),_("ol",[_("li",[v._v("有时候也成为永久代，在该区内很少发生垃圾回收，但是并不代表不发生GC，在这里进行的GC主要是对方法区里的常量池和对类型的卸载")]),v._v(" "),_("li",[v._v("方法区主要用来存储已被虚拟机加载的类的信息、常量、静态变量和即时编译器编译后的代码等数据。")]),v._v(" "),_("li",[v._v("该区域是被线程共享的。")]),v._v(" "),_("li",[v._v("方法区里有一个运行时常量池，用于存放静态编译产生的字面量和符号引用。该常量池具有动态性，也就是说常量并不一定是编译时确定，运行时生成的常量也会存在这个常量池中。")])])])}],r=a(0),s=Object(r.a)({},(function(){this._self._c;return this._m(0)}),t,!1,null,null,null);_.default=s.exports}}]);