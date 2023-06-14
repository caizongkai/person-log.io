(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{304:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"整数集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整数集合"}},[t._v("#")]),t._v(" 整数集合")]),t._v(" "),s("p",[t._v("当一个集合只包含整数元素，并且元素不多时，Redis就会使用整数集合作为集合键的底层实现。")]),t._v(" "),s("h2",{attrs:{id:"整数集合的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整数集合的实现"}},[t._v("#")]),t._v(" "),s("strong",[t._v("整数集合的实现")])]),t._v(" "),s("p",[t._v("整数集合是Redis中用于保存整数值的集合"),s("strong",[t._v("抽象数据结构")]),t._v("，可以保证集合"),s("strong",[t._v("有序不重复")]),t._v("。每个"),s("code",[t._v("intset.h/intset")]),t._v("结构来表示一个整数集合：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("intset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编码方式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint32_t")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//集合包含的元素数量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint32_t")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存元素的数组")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int8_t")]),t._v(" contents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" intset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("length属性记录了整数集合包含的元素数量，contents是整数集合的底层实现。contents存储元素的真实类型取决于encoding，比如encoding==INT_ENC_INT16时，contents数组中每个项都是int16_t类型的整数。可以为int16_t,int32_t或int64_t。")]),t._v(" "),s("h2",{attrs:{id:"升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级"}},[t._v("#")]),t._v(" "),s("strong",[t._v("升级")])]),t._v(" "),s("p",[t._v("当我们要将一个新元素添加至集合时，并且新元素的类型比现有集合类型都长时，整数集合就要升级。")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("ul",[s("li",[t._v("根据新元素类型，扩展数组空间，为新元素分配空间。")]),t._v(" "),s("li",[t._v("将底层数组现有所有元素都转为新元素相同类型，并将类型转换后的元素放到正确位置。")]),t._v(" "),s("li",[t._v("将新元素添加到底层数组。")]),t._v(" "),s("li",[t._v("由于每次向整数集合添加新元素都可能会引起升级，而每次升级都需要对底层数组中已有元素进行类型转换，所以添加的时间复杂度为O(N)。")])]),t._v(" "),s("p",[t._v("升级的好处")]),t._v(" "),s("p",[t._v("有两个好处，可以提升整数集合的灵活性，也能尽可能地节约内存。\nC语言是静态类型语言，一般数组中的元素类型都相同，使用升级可以不用担心类型兼容问题，提升灵活性。元素统一以最大类型存储，而不是都用int64_t，可节约内存。")]),t._v(" "),s("h2",{attrs:{id:"降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[t._v("#")]),t._v(" "),s("strong",[t._v("降级")])]),t._v(" "),s("p",[t._v("整数集合"),s("strong",[t._v("不支持降低")]),t._v("，一旦升级就不能降级。")])])}],!1,null,null,null);s.default=e.exports}}]);