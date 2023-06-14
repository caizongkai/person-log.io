(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{184:function(s,n,a){s.exports=a.p+"assets/img/image-20210419101056501.a60fbaf7.png"},375:function(s,n,a){"use strict";a.r(n);var t=[function(){var s=this,n=s._self._c;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"jenkins入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins入门"}},[s._v("#")]),s._v(" jenkins入门")]),s._v(" "),n("ul",[n("li",[s._v("查看jenkins的配置文件：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/sysconfig/jenkins\t\t\t\t#查看jenkins的配置文件，定义了home、JAVA_CMD、user、port等基础配置，保持默认即可")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Path:        Development/Jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Description: Jenkins Automation Server")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     "/var/lib/jenkins"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Directory where Jenkins store its configuration and working")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# files (checkouts, build reports, artifacts, ...).")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/jenkins"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Java executable to run Jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# When left empty, we'll try to find the suitable Java.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_JAVA_CMD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     "jenkins"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix user account that runs the Jenkins daemon")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Be careful when you change this, as you need to update")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# permissions of $JENKINS_HOME and /var/log/jenkins.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_USER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jenkins"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default: "false"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Whether to skip potentially long-running chown at the")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# $JENKINS_HOME location. Do not enable this, "true", unless')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# you know what you're doing. See JENKINS-23273.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#JENKINS_INSTALL_SKIP_CHOWN="false"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type: string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     "-Djava.awt.headless=true"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Options to pass to java when running Jenkins.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_JAVA_OPTIONS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.awt.headless=true"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        integer(0:65535)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default:     8080")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Port Jenkins is listening on.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set to -1 to disable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IP address Jenkins listens on for HTTP requests.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is all interfaces (0.0.0.0).")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_LISTEN_ADDRESS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        integer(0:65535)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS port Jenkins is listening on.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is disabled.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HTTPS_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to the keystore in JKS format (as created by the JDK 'keytool').")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is disabled.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HTTPS_KEYSTORE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Password to access the keystore defined in JENKINS_HTTPS_KEYSTORE.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is disabled.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HTTPS_KEYSTORE_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IP address Jenkins listens on for HTTPS requests.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is disabled.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HTTPS_LISTEN_ADDRESS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        integer(1:9)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default:     5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debug level for logs -- the higher the value, the more verbose.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5 is INFO.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_DEBUG_LEVEL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        yesno")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default:     no")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Whether to enable access logging or not.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_ENABLE_ACCESS_LOG")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        integer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default:     100")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maximum number of HTTP worker threads.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HANDLER_MAX")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        integer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default:     20")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maximum number of idle HTTP worker threads.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HANDLER_IDLE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Type:        string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Default:     ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ServiceRestart: jenkins")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pass arbitrary arguments to Jenkins.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Full option list: java -jar jenkins.war --help")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_ARGS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br")])]),n("ul",[n("li",[s._v("查看程序主目录：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ls /var/lib/jenkins/\t\t\t\t#查看程序主目录\nconfig.xml                                      nodes\nhudson.model.UpdateCenter.xml                   plugins\nhudson.plugins.git.GitTool.xml                  queue.xml.bak\nidentity.key.enc                                secret.key\njenkins.CLI.xml                                 secret.key.not-so-secret\njenkins.install.InstallUtil.lastExecVersion     secrets\njenkins.install.UpgradeWizard.state             updates\njenkins.model.JenkinsLocationConfiguration.xml  userContent\njobs                                            users\nlogs                                            workflow-libs\nnodeMonitors.xml\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("上面，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jobs\t\t浏览器上面创建的任务都会存放在这里\n\nlogs\t\t存放jenkins相关的日志\n\nnodes\t\t多节点时用到\n\nplugins\t\t插件所在目录\n\nsecrets\t\t密码秘钥所在目录\t\t\t\t#jobs和plugins目录比较重要\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("查看插件：\n系统管理–>插件管理，“可选插件”是未安装的插件，“已安装”是已经安装的插件，其中勾选为灰色的是不可卸载的插件。")]),s._v(" "),n("p",[s._v("检查是否有“Git plugin”和“Publish over SSH”两个插件，如果没有，在“可选插件”中安装。发现“Publish over SSH”没有，安装它")]),s._v(" "),n("p",[n("img",{attrs:{src:a(184),alt:"image-20210419101056501"}})]),s._v(" "),n("p",[s._v("安装完插件后，直接在linux机器上重启jenkins服务，而不是勾选空闲时重启")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl restart jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("重新在浏览器上登录jenkins，并在linux机器上生成一对秘钥")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# cd ~/.ssh/\n\n# ls\t\t\t\t#如果之前有生成过密钥对，那可以直接用，不需要再生成\nauthorized_keys  known_hosts\n\n# ssh-keygen -f ~/.ssh/jenkins\t\t\t\t#生成密钥对\nGenerating public/private rsa key pair.\nEnter passphrase (empty for no passphrase):\t\t\t\t#直接回车，也可以设置密码\nEnter same passphrase again:\t\t\t\t#直接回车\nYour identification has been saved in /root/.ssh/jenkins.\nYour public key has been saved in /root/.ssh/jenkins.pub.\nThe key fingerprint is:\nSHA256:VF7nN5V6pPco5DDnm8PUeu8OEg3VMj/IkgfYkqd/Hx4 root@lzx\nThe key's randomart image is:\n+---[RSA 2048]----+\n|          = . o.o|\n|         * = +ooo|\n|        . = = *=.|\n|       . .oooO =o|\n|        S .B+.+.o|\n|           .=ooE.|\n|           oo=+ o|\n|            *..+ |\n|             o ++|\n+----[SHA256]-----+\n\n# cat jenkins\t\t\t\t#查看私钥\n-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAu+H7NOAvrPYWwNPur64cwZYJz80MZdmQP44KJy1Zcqsfmawt\naxjbgzZSPyXSM9fDqo32dR4OR8PdqFdnSDWU8gXl2tgTcsUiy+y+1TB7ZdgzmI8Z\nLAAGKQsrWOFMBB9GCfBlAL6eGg4nnsnc4bDT2sJhZuzgfW/qK5AyWSCIm2wvfFw5\n1m2WcaslRzNwGkg2cFK4tuY0ZkiF/UfA+YC88RAhSbjFD5FQKLzSHmkZbxbSGC09\ncYtsZb3g4VwmkZUEuU/jy5nBUpxv54B6NjkvMxCVx9M/zviiTSZt+yRDaMySISxB\n/3Y9FP7R/3Rcf1ZXYGK32hmQ55pDlbcM0gCEFQIDAQABAoIBAD0uSFweiMfc1unx\n2W7R1sFfN1C4p8nev+9CNKIvTUpe2Qp0m9GdJZYjsUKo8Ts6jpfSZKgcom/SIzL3\nS0WjVR4+t2u9IxAji8I2FKpdgEFY1uxd5MeENn1VCseFjfhlqqv/4RQN/nPjmhlG\nCKxhpYs98vPOPQf70phe+1Y0ludtEztiJEM7viIsF8PLlCwf6P7S1JFIXXOAo+xQ\nJAHt3AlzUj+HVfq97SbS+cbhuR/MwvIMQs54AsyPOVtt1Q7AOniDw/bnX8JpE9mU\ndiww6KHn/qQIB0DSWgvfyGwC6qM6C3nUv+EyybdJBcEsYAUH3SgZpBvu3smT2XN9\nMCAFegECgYEA524LrSj57hPSKdGO3RT/jVReq0fHJscqSELHAl40lPSKQm+vFK2L\nZ20jnQhPg9ebJQjqdkZ/J8EHuwuZjtiqYAeWUERcp5cEEm/BQZ5fB+vYlTZ+QXNa\nS6Z9ex2/+qBwY8bJeZR5LPEzVN2cENH8t6FiJO1/csgS3T+KAxnGZoECgYEAz9Ri\nCyGwoJs9IpEb3y9Q1AVeFvUQ47XQGJo4xD5nivJ3W/4XApajJl6hXoVp96Z0gXIR\nHhqp+/d4MOlDSeAUPeHcW6gE0h8BYl25fXbvXSpA7rSv8QU+BtQ4vMpsKF5bpRNt\nvQjeJrPtHLuFJrOZ6yzov3s4EXlt0AbOBlWXW5UCgYEAvmn6zXRjfxFr3+B97UUz\npnL+mWqrXyqLjXz0BOzB0rUJdPQzV44anvRbUv7dfZrOGcCmOL50LJ9T3wACTlfS\nhsR3Vn+IxJMqVIkCtxy5D+lrAAogA3YHmyrXH48wv+N11YJfjtssgF/MXk0f9W7w\nwZ3VBJEsRaJ8cvGuejKg3QECgYEAzvoAun1O3mQ8OlSxoVAJ+11tGwftThofqKDO\nsAJGNEbNQDyIxfcnfGr54pyTsCOCG/hxu71qVJlchbmJXeVfw1FQl6d5RZnDUyds\nN9te/zW5fQFNx4clAsAP0VT26i0ur/PtcjmGpJzEI71NGgH75A7RrQEWEbERAAAG\n5qAPIRECgYEAjpNyIsvDYcEtBj/oCQCa3FdPsGqRaYmBZLqJ4nCP5DolYgJkewKx\nn5+AIYsXYYKB7W4a0uPKN6gMVVAkm0Icletpf9UpT51uMSR5JpqIwqOFNgI0+NkV\n+jlerYcD909WjV3OqrwZm7yPqwa2RPkIfCbeHnXbkAcv+DuWn4L8RdI=\n-----END RSA PRIVATE KEY-----\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br")])])])}],e=a(0),r=Object(e.a)({},(function(){this._self._c;return this._m(0)}),t,!1,null,null,null);n.default=r.exports}}]);