(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{274:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var a=this,s=a._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"隐藏tomcat-隐藏nginx-版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏tomcat-隐藏nginx-版本号"}},[a._v("#")]),a._v(" 隐藏tomcat 隐藏nginx 版本号")]),a._v(" "),s("h2",{attrs:{id:"隐藏tomcat版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏tomcat版本号"}},[a._v("#")]),a._v(" 隐藏Tomcat版本号")]),a._v(" "),s("p",[a._v("如果tomcat的版本号暴露出来，会有人利用该版本所存在的漏洞进行攻击\n隐藏tomcat 版本号\n1.进入tomcat的lib目录找到catalina.jar文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/bmsoft/tomcat/tomcat-\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" catalina.jar\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 之后会多出两个文件夹，进入org/apache/catalina/util ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" org/apache/catalina/util \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 编辑配置文件ServerInfo.properties")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" ServerInfo.properties\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("修改为")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("server.info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Apache Tomcat\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("server.number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("server.built")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nov "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2016")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":05:27 UTC\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("将修改后的信息压缩回jar包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v("  /tomcat/lib\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\njar uvf catalina.jar org/apache/catalina/util/ServerInfo.properties\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"隐藏nginx版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏nginx版本号"}},[a._v("#")]),a._v(" 隐藏nginx版本号")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@proxy ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /usr/local/nginx/conf/nginx.conf")]),a._v("\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    include       mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    default_type  application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n    server_tokens off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#### 在http节点下加入server_tokens off;即可")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("测试")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}],!1,null,null,null);s.default=e.exports}}]);