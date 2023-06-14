(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{382:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,a=s._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"docker-compose-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-详解"}},[s._v("#")]),s._v(" Docker Compose 详解")]),s._v(" "),a("blockquote",[a("p",[s._v("本文将通过下面四点展开讲解Docker Compose")])]),s._v(" "),a("ul",[a("li",[s._v("Docker Compose概述")]),s._v(" "),a("li",[s._v("Docker Compose快速入门")]),s._v(" "),a("li",[s._v("Docker Compose常用命令")]),s._v(" "),a("li",[s._v("docker-compose.yml参数详解")])]),s._v(" "),a("h2",{attrs:{id:"docker-compose概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose概述"}},[s._v("#")]),s._v(" Docker Compose概述")]),s._v(" "),a("p",[s._v("我们之前都是用Dockerfile构建镜像文件，然后对一个一个的镜像执行docker contain run等操作运行和停止容器，但是当我们在部署微服务的时候，每个微服务一般有多个镜像，如果对于每个微服务都要手动启动暂停，那么将大大增加我们的运维工作量，那么Docker Compose就是为了解决这个问题而出现的。")]),s._v(" "),a("p",[s._v("Docker Compose可以轻松、高效地管理多个容器。")]),s._v(" "),a("h2",{attrs:{id:"docker-compose快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose快速入门"}},[s._v("#")]),s._v(" Docker Compose快速入门")]),s._v(" "),a("h3",{attrs:{id:"安装-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-compose"}},[s._v("#")]),s._v(" 安装 Docker Compose")]),s._v(" "),a("ul",[a("li",[s._v("安装 Docker Compose 可以通过下面命令自动下载适应版本的 Compose，并为安装脚本添加执行权限")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果需要安装别的版本，请修改1.21.2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/docker/compose/releases/download/1.21.2/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /usr/local/bin/docker-compose\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查看安装是否成功")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[s._v("#")]),s._v(" 快速入门")]),s._v(" "),a("p",[s._v("接下来我们以一个例子来运行docker-compose,该例子来自Docker深入浅出的作者Nigel Poulton：")]),s._v(" "),a("ul",[a("li",[s._v("从git拉取项目")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:nigelpoulton/counter-app.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启动docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" counter-app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" compose up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("[root@iZbp1f2ch7qc857u7taai9Z counter-app]# docker-compose up -d\nStarting counter-app_web-fe_1 ... done\nStarting counter-app_redis_1  ... done\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("查看docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("[root@ counter-app]# docker-compose ps\n        Name                      Command               State           Ports         \n--------------------------------------------------------------------------------------\ncounter-app_redis_1    docker-entrypoint.sh redis ...   Up      6379/tcp              \ncounter-app_web-fe_1   python app.py                    Up      0.0.0.0:5000->5000/tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("查看docker镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("[root@ counter-app]# docker image ls\nREPOSITORY           TAG          IMAGE ID       CREATED          SIZE\ncounter-app_web-fe   latest       4c9ee157d7bc   12 minutes ago   84.5MB\nredis                alpine       933c79ea2511   2 weeks ago      31.6MB\npython               3.4-alpine   c06adcf62f6e   22 months ago    72.9MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里我们看到该项目拉了两个镜像counter-app_web-fe和redis")]),s._v(" "),a("ul",[a("li",[s._v("查看docker container")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v('[root@ counter-app]# docker container ls\nCONTAINER ID   IMAGE                COMMAND                  CREATED         STATUS         PORTS                    NAMES\nf437528b1ceb   counter-app_web-fe   "python app.py"          4 minutes ago   Up 2 minutes   0.0.0.0:5000->5000/tcp   counter-app_web-fe_1\n970499e648bc   redis:alpine         "docker-entrypoint.s…"   4 minutes ago   Up 2 minutes   6379/tcp                 counter-app_redis_1\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这里我们看到该项目启动了两个容器counter-app_web-fe和redis，一个端口5000，一个6379。")]),s._v(" "),a("ul",[a("li",[s._v("停止docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ counter-app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose stop")]),s._v("\nStopping counter-app_web-fe_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nStopping counter-app_redis_1  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("查看docker-compose状态")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ counter-app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose ps")]),s._v("\n        Name                      Command               State    Ports\n----------------------------------------------------------------------\ncounter-app_redis_1    docker-entrypoint.sh redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Exit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        \ncounter-app_web-fe_1   python app.py                    Exit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里我们看到docker-compose的状态为Exit 0，代表为停止中")]),s._v(" "),a("ul",[a("li",[s._v("删除docker-compose")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ counter-app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose rm")]),s._v("\nGoing to remove counter-app_web-fe_1, counter-app_redis_1\nAre you sure? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\nRemoving counter-app_web-fe_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving counter-app_redis_1  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("删除成功")]),s._v(" "),a("ul",[a("li",[s._v("再次查看镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ counter-app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker image ls")]),s._v("\nREPOSITORY           TAG          IMAGE ID       CREATED          SIZE\ncounter-app_web-fe   latest       4c9ee157d7bc   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" minutes ago   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),s._v(".5MB\nredis                alpine       933c79ea2511   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(".6MB\npython               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v("-alpine   c06adcf62f6e   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" months ago    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(".9MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以看到，镜像并不会被删除。所以用docker-compose rm不会删除镜像和卷。")]),s._v(" "),a("h3",{attrs:{id:"工程、服务、容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程、服务、容器"}},[s._v("#")]),s._v(" 工程、服务、容器")]),s._v(" "),a("p",[a("strong",[s._v("Docker Compose 将所管理的容器分为三层，分别是工程（project）、服务（service）、容器（container）")])]),s._v(" "),a("p",[a("strong",[s._v("Docker Compose 运行目录下的所有文件（docker-compose.yml）组成一个工程,一个工程包含多个服务，每个服务中定义了容器运行的镜像、参数、依赖，一个服务可包括多个容器实例")])]),s._v(" "),a("h2",{attrs:{id:"docker-compose常见命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose常见命令"}},[s._v("#")]),s._v(" Docker Compose常见命令")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("ps")]),s._v("：列出所有运行容器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("logs")]),s._v("：查看服务日志输出")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("port")]),s._v("：打印绑定的公共端口，下面命令可以输出 eureka 服务 8761 端口所绑定的公共端口")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" port eureka "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8761")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("build")]),s._v("：构建或者重新构建服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("start")]),s._v("：启动指定服务已存在的容器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" start eureka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("stop")]),s._v("：停止已运行的服务的容器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" stop eureka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("rm")]),s._v("：删除指定服务的容器")])]),s._v(" "),a("div",{staticClass:"language-undefined line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose rm eureka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("up")]),s._v("：构建、启动容器")])]),s._v(" "),a("div",{staticClass:"language-undefined line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("kill")]),s._v("：通过发送 SIGKILL 信号来停止指定服务的容器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" eureka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("pull")]),s._v("：下载服务镜像")]),s._v(" "),a("li",[a("strong",[s._v("scale")]),s._v("：设置指定服务运行容器的个数，以 service=num 形式指定")])]),s._v(" "),a("div",{staticClass:"language-undefined line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose scale user=3 movie=3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("run")]),s._v("：在一个服务上执行一个命令")])]),s._v(" "),a("div",{staticClass:"language-undefined line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose run web bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-yml-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-属性"}},[s._v("#")]),s._v(" docker-compose.yml 属性")]),s._v(" "),a("p",[a("strong",[s._v("version")]),s._v("：指定 docker-compose.yml 文件的写法格式")]),s._v(" "),a("p",[a("strong",[s._v("services")]),s._v("：多个容器集合")]),s._v(" "),a("p",[a("strong",[s._v("build")]),s._v("：配置构建时，Compose 会利用它自动构建镜像，该值可以是一个路径，也可以是一个对象，用于指定 Dockerfile 参数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("build: ./dir\n---------------\nbuild:\n    context: ./dir\n    dockerfile: Dockerfile\n    args:\n        buildno: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("command")]),s._v("：覆盖容器启动后默认执行的命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("command: bundle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" thin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n----------------------------------\ncommand: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bundle,exec,thin,-p,3000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("dns")]),s._v("：配置 dns 服务器，可以是一个值或列表")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dns: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n------------\ndns:\n    - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n    - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.9")]),s._v(".9.9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("environment")]),s._v("：环境变量配置，可以用数组或字典两种方式")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("environment:\n    RACK_ENV: development\n    SHOW: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ture'")]),s._v("\n-------------------------\nenvironment:\n    - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RACK_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("development\n    - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SHOW")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ture\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("env_file")]),s._v("：从文件中获取环境变量，可以指定一个文件路径或路径列表，其优先级低于 environment 指定的环境变量")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("env_file: .env\n---------------\nenv_file:\n    - ./common.env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("expose")]),s._v("：暴露端口，只将端口暴露给连接的服务，而不暴露给主机")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("expose:\n    - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3000"')]),s._v("\n    - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("image")]),s._v("：指定服务所使用的镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("image: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("network_mode")]),s._v("：设置网络模式")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("network_mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),s._v("\nnetwork_mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v("\nnetwork_mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),s._v("\nnetwork_mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service:[service name]"')]),s._v("\nnetwork_mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"container:[container name/id]"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("ports")]),s._v("：对外暴露的端口定义，和 expose 对应")])]),s._v(" "),a("p",[s._v("和ports的区别是，expose不会将端口暴露给主机。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ports:   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 暴露端口信息  - "宿主机端口:容器暴露端口"')]),s._v("\n  \n- "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定容器的80端口到主机的80端口")]),s._v("\n  \n- "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9000:8080"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定容器的8080端口到主机的9000端口")]),s._v("\n  \n- "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定容器的443端口到主机的任意端口，容器启动时随机分配绑定的主机端口号")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("links")]),s._v("：将指定容器连接到当前连接，可以设置别名，避免ip方式导致的容器重启动态改变的无法连接情况")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定服务名称:别名 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eureka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("volumes")]),s._v("：卷挂载路径")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /lib\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("logs")]),s._v("：日志输出信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("--no-color          单色输出，不显示其他颜.\n-f, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--follow")]),s._v("        跟踪日志输出，就是可以实时查看日志\n-t, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timestamps")]),s._v("    显示时间戳\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tail")]),s._v("              从日志的结尾显示，--tail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"更新容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新容器"}},[s._v("#")]),s._v(" 更新容器")]),s._v(" "),a("ul",[a("li",[s._v("当服务的配置发生更改时，可使用 docker-compose up 命令更新配置")]),s._v(" "),a("li",[s._v("此时，Compose 会删除旧容器并创建新容器，新容器会以不同的 IP 地址加入网络，名称保持不变，任何指向旧容起的连接都会被关闭，重新找到新容器并连接上去")])])])}],!1,null,null,null);a.default=t.exports}}]);