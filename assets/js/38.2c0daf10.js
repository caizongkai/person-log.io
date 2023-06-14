(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{270:function(v,_,e){v.exports=e.p+"assets/img/03223618-d81df0a505a64cae932be67152994676.7af854ea.png"},344:function(v,_,e){"use strict";e.r(_);var r=[function(){var v=this,_=v._self._c;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"设计模式面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计模式面试题"}},[v._v("#")]),v._v(" 设计模式面试题")]),v._v(" "),_("p",[_("strong",[v._v("1. 请列举出在JDK中几个常用的设计模式？")])]),v._v(" "),_("ul",[_("li",[v._v("单例模式：保证被创建一次，节省系统开销。Runtime，饿汉模式")]),v._v(" "),_("li",[v._v("工厂模式（简单工厂、抽象工厂）：解耦代码。")]),v._v(" "),_("li",[v._v("观察者模式：定义了对象之间的一对多的依赖，这样一来，当一个对象改变时，它的所有的依赖者都会收到通知并自动更新。")]),v._v(" "),_("li",[v._v("外观模式：提供一个统一的接口，用来访问子系统中的一群接口，外观定义了一个高层的接口，让子系统更容易使用。")]),v._v(" "),_("li",[v._v("模版方法模式：定义了一个算法的骨架，而将一些步骤延迟到子类中，模版方法使得子类可以在不改变算法结构的情况下，重新定义算法的步骤。")]),v._v(" "),_("li",[v._v("装饰器设计模式：（Decorator design pattern）被用于多个 Java IO 类中。比如说BufferReader和BufferWriter增强了Reader和Writer的功能。")])]),v._v(" "),_("p",[_("img",{attrs:{src:e(270),alt:"2013-1-3 星期四 22-27-07"}})]),v._v(" "),_("p",[_("strong",[v._v("2. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？")])]),v._v(" "),_("p",[v._v("使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。")]),v._v(" "),_("ul",[_("li",[v._v("使用观察者模式实现Websocket的消息通知，消息作为一个主体，websocketserve作为一个观察者，每当服务器连接上，就将服务器注册进消息主体中，每当消息主体增加时，会判断目前的观察者是否满足发送条件，如果满足发送条件就把消息发送出去，也就是调用观察者中的发送消息的方法。")])]),v._v(" "),_("p",[_("strong",[v._v("3. Java 中什么叫单例设计模式？请用Java 写出线程安全的单例模式")])]),v._v(" "),_("p",[v._v("单例模式重点在于在整个系统上共享一些创建时较耗资源的对象。整个应用中只维护一个特定类实例，它被所有组件共同使用。"),_("code",[v._v("Java.lang.Runtime")]),v._v("是单例模式的经典例子。从 Java 5 开始你可以使用枚举（enum）来实现线程安全的单例。")]),v._v(" "),_("p",[_("strong",[v._v("4. 在 Java 中，什么叫观察者设计模式（observer design pattern）")]),v._v("？")]),v._v(" "),_("p",[v._v("观察者模式是定义对象之间的一对多依赖，当一个对象状态改变时，它的所有依赖都会收到通知并且自动更新状态。")]),v._v(" "),_("p",[_("strong",[v._v("5. 使用工厂模式最主要的好处是什么？在哪里使用？")])]),v._v(" "),_("p",[v._v("工厂模式的最大好处是增加了创建对象时的封装层次。如果你使用工厂来创建对象，之后你可以使用更高级和更高性能的实现来替换原始的产品实现或类，这不需要在调用层做任何修改。")]),v._v(" "),_("p",[_("strong",[v._v("6. 举一个用 Java 实现的装饰模式(decorator design pattern)？它是作用于对象层次还是类层次？")])]),v._v(" "),_("p",[v._v("装饰模式增加强了单个对象的能力。Java IO 到处都使用了装饰模式，典型例子就是 Buffered 系列类如"),_("code",[v._v("BufferedReader")]),v._v("和"),_("code",[v._v("BufferedWriter")]),v._v("，它们增强了"),_("code",[v._v("Reader")]),v._v("和"),_("code",[v._v("Writer")]),v._v("对象，以实现提升性能的 Buffer 层次的读取和写入。")]),v._v(" "),_("p",[_("strong",[v._v("7. Java 编程为什么不允许从静态方法中访问非静态变量？")])]),v._v(" "),_("p",[v._v("Java 中不能从静态上下文访问非静态数据只是因为非静态变量是跟具体的对象实例关联的，而静态的却没有和任何实例关联。")]),v._v(" "),_("p",[_("strong",[v._v("8. 如果需要设计一个 ATM 机，你的设计思路是什么？")])]),v._v(" "),_("p",[v._v("比如设计金融系统来说，必须知道它们应该在任何情况下都能够正常工作。不管是断电还是其他情况，ATM 应该保持"),_("strong",[v._v("正确的状态（事务）")]),v._v(" , 想想 "),_("strong",[v._v("加锁（locking）、事务（transaction）、错误条件（error condition）、边界条件（boundary condition）")]),v._v(" 等等。尽管你不能想到具体的设计，但如果你可以指出非功能性需求，提出一些问题，想到关于边界条件，这些都会是很好的。")]),v._v(" "),_("p",[_("strong",[v._v("9. 在 Java语言 中，什么时候用重载，什么时候用重写？")])]),v._v(" "),_("p",[v._v("如果你看到一个类的不同实现有着不同的方式来做同一件事，那么就应该用重写（overriding），而重载（overloading）是用不同的输入做同一件事。在 Java 中，重载的方法签名不同，而重写并不是。")]),v._v(" "),_("p",[_("strong",[v._v("10. 请举例说明什么情况下会更倾向于使用抽象类而不是接口？")])]),v._v(" "),_("p",[v._v("接口和抽象类都遵循”面向接口而不是实现编码”设计原则，它可以增加代码的灵活性，可以适应不断变化的需求。下面有几个点可以帮助你回答这个问题：")]),v._v(" "),_("ul",[_("li",[v._v("在 Java 中，你只能继承一个类，但可以实现多个接口。所以一旦你继承了一个类，你就失去了继承其他类的机会了。")]),v._v(" "),_("li",[v._v("接口通常被用来表示附属描述或行为如："),_("code",[v._v("Runnable、Clonable、Serializable")]),v._v("等等，因此当你使用抽象类来表示行为时，你的类就不能同时是"),_("code",[v._v("Runnable")]),v._v("和"),_("code",[v._v("Clonable")]),v._v("(注：这里的意思是指如果把"),_("code",[v._v("Runnable")]),v._v("等实现为抽象类的情况)，因为在 Java 中你不能继承两个类，但当你使用接口时，你的类就可以同时拥有多个不同的行为。")]),v._v(" "),_("li",[v._v("在一些对时间要求比较高的应用中，倾向于使用抽象类，它会比接口稍快一点。")]),v._v(" "),_("li",[v._v("如果希望把一系列行为都规范在类继承层次内，并且可以更好地在同一个地方进行编码，那么抽象类是一个更好的选择。有时，接口和抽象类可以一起使用，接口中定义函数，而在抽象类中定义默认的实现。")])]),v._v(" "),_("p",[_("strong",[v._v("11. 简单工厂和抽象工厂有什么区别？")])]),v._v(" "),_("ul",[_("li",[v._v("简单工厂：在创建一个对象时不向客户暴露内部细节，并提供一个创建对象的通用接口。")]),v._v(" "),_("li",[v._v("工厂方法：定义了一个创建对象的接口，但由子类决定要实例化哪个类。工厂方法把实例化操作推迟到子类。")]),v._v(" "),_("li",[v._v("抽象工厂：提供一个接口，用于创建 "),_("strong",[v._v("相关的对象家族")]),v._v("。")])]),v._v(" "),_("p",[_("strong",[v._v("12.举一个用 Java 实现的装饰模式(decorator design pattern)？它是作用于对象层次还是类层次？")]),v._v("\n装饰模式增加强了单个对象的能力。Java IO 到处都使用了装饰模式，典型例子就是 Buffered 系列类如BufferedReader和BufferedWriter，它们增强了Reader和Writer对象，以实现提升性能的 Buffer 层次的读取和写入。")])])}],a=e(0),t=Object(a.a)({},(function(){this._self._c;return this._m(0)}),r,!1,null,null,null);_.default=t.exports}}]);