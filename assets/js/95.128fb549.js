(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{321:function(_,v,i){"use strict";i.r(v);var l=i(0),a=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var _=this,v=_._self._c;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"mysql优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql优化"}},[_._v("#")]),_._v(" MySQL优化")]),_._v(" "),v("p",[_._v("当MySQL单表记录数过大时，增删改查性能都会急剧下降")]),_._v(" "),v("h2",{attrs:{id:"单表优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单表优化"}},[_._v("#")]),_._v(" 单表优化")]),_._v(" "),v("p",[_._v("除非单表数据未来会一直不断上涨，否则不要一开始就考虑拆分，拆分会带来逻辑、部署、运维的各种复杂度，一般以整型值为主的表在千万级以下，字符串为主的表在五百万以下是没有太大问题的。")]),_._v(" "),v("p",[_._v("而事实上很多时候 MySQL 单表的性能依然有不少优化空间，甚至能正常支撑千万级以上的数据量。")]),_._v(" "),v("h2",{attrs:{id:"字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字段"}},[_._v("#")]),_._v(" 字段")]),_._v(" "),v("ul",[v("li",[_._v("尽量使用 TINYINT、 SMALLINT、 MEDIUM_INT 作为整数类型而非 INT，如果非负则加上 UNSIGNED")]),_._v(" "),v("li",[_._v("VARCHAR 的长度只分配真正需要的空间")]),_._v(" "),v("li",[_._v("使用枚举或整数代替字符串类型")]),_._v(" "),v("li",[_._v("尽量使用 TIMESTAMP 而非 DATETIME")]),_._v(" "),v("li",[_._v("单表不要有太多字段，建议在 20 以内")]),_._v(" "),v("li",[_._v("避免使用 NULL 字段，很难查询优化且占用额外索引空间")]),_._v(" "),v("li",[_._v("用整型来存 IP")])]),_._v(" "),v("h2",{attrs:{id:"索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[_._v("#")]),_._v(" 索引")]),_._v(" "),v("ul",[v("li",[_._v("索引并不是越多越好，要根据查询有针对性的创建，考虑在 WHERE 和 ORDER BY")]),_._v(" "),v("li",[_._v("命令上涉及的列建立索引，可根据 EXPLAIN 来查看是否用了索引还是全表扫描")]),_._v(" "),v("li",[_._v("应尽量避免在 WHERE 子句中对字段进行 NULL 值判断，否则将导致引擎放弃使用索引而进行全表扫描")]),_._v(" "),v("li",[_._v('值分布很稀少的字段不适合建索引，例如"性别"这种只有两三个值的字段')]),_._v(" "),v("li",[_._v("字符字段只建前缀索引")]),_._v(" "),v("li",[_._v("字符字段最好不要做主键")]),_._v(" "),v("li",[_._v("不用外键，由程序保证约束")]),_._v(" "),v("li",[_._v("尽量不用 UNIQUE，由程序保证约束")]),_._v(" "),v("li",[_._v("使用多列索引时主意顺序和查询条件保持一致，同时删除不必要的单列索引")])]),_._v(" "),v("h2",{attrs:{id:"查询sql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查询sql"}},[_._v("#")]),_._v(" 查询SQL")]),_._v(" "),v("ul",[v("li",[_._v("可通过开启慢查询日志来找出较慢的 SQL")]),_._v(" "),v("li",[_._v("不做列运算：SELECT id WHERE age+1=10，任何对列的操作都将导致表扫描，它包括数据库教程函数、计算表达式等等，查询时要尽可能将操作移至等号右边")]),_._v(" "),v("li",[_._v("sql 语句尽可能简单：一条 sql 只能在一个 cpu 运算；大语句拆小语句，减少锁时间；一条大sql 可以堵死整个库")]),_._v(" "),v("li",[_._v("不用 SELECT *")]),_._v(" "),v("li",[_._v("OR 改写成 IN：OR 的效率是 n 级别， IN 的效率是 log(n) 级别，IN 的个数建议控制在 200 以内")]),_._v(" "),v("li",[_._v("不用函数和触发器，在应用程序实现")]),_._v(" "),v("li",[_._v("避免 %xxx 式查询")]),_._v(" "),v("li",[_._v("少用 JOIN")]),_._v(" "),v("li",[_._v("使用同类型进行比较，比如用 '123' 和 '123' 比， 123 和 123 比")]),_._v(" "),v("li",[_._v("尽量避免在 WHERE 子句中使用 != 或 <> 操作符，否则将引擎放弃使用索引而进行全表扫描")]),_._v(" "),v("li",[_._v("对于连续数值，使用 BETWEEN 不用 IN：SELECT id FROM t WHERE num BETWEEN 1 AND 5")]),_._v(" "),v("li",[_._v("列表数据不要拿全表，要使用 LIMIT 来分页，每页数量也不要太大")])]),_._v(" "),v("h2",{attrs:{id:"引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引擎"}},[_._v("#")]),_._v(" 引擎")]),_._v(" "),v("p",[_._v("目前广泛使用的是 MyISAM 和 InnoDB 两种引擎：")]),_._v(" "),v("h4",{attrs:{id:"myisam"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[_._v("#")]),_._v(" MyISAM")]),_._v(" "),v("p",[_._v("MyISAM 引擎是 MySQL 5.1 及之前版本的默认引擎，它的特点是：")]),_._v(" "),v("ul",[v("li",[_._v("不支持行锁，读取时对需要读到的所有表加锁，写入时则对表加排它锁")]),_._v(" "),v("li",[_._v("不支持事务")]),_._v(" "),v("li",[_._v("不支持外键")]),_._v(" "),v("li",[_._v("不支持崩溃后的安全恢复")]),_._v(" "),v("li",[_._v("在表有读取查询的同时，支持往表中插入新纪录")]),_._v(" "),v("li",[_._v("支持 BLOB 和 TEXT 的前 500 个字符索引，支持全文索引")]),_._v(" "),v("li",[_._v("支持延迟更新索引，极大提升写入性能")]),_._v(" "),v("li",[_._v("对于不会进行修改的表，支持压缩表，极大减少磁盘空间占用")])]),_._v(" "),v("h4",{attrs:{id:"innodb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[_._v("#")]),_._v(" InnoDB")]),_._v(" "),v("p",[_._v("InnoDB 在 MySQL 5.5 后成为默认索引，它的特点是：")]),_._v(" "),v("ul",[v("li",[_._v("支持行锁，采用 MVCC 来支持高并发")]),_._v(" "),v("li",[_._v("支持事务")]),_._v(" "),v("li",[_._v("支持外键")]),_._v(" "),v("li",[_._v("支持崩溃后的安全恢复")]),_._v(" "),v("li",[_._v("不支持全文索引（5.6.4之后版本逐渐开始支持）")])]),_._v(" "),v("p",[_._v("总体来讲，MyISAM 适合 SELECT 密集型的表，而 InnoDB 适合 INSERT 和 UPDATE 密集型的表")])])}],!1,null,null,null);v.default=a.exports}}]);