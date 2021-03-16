# MyBatis

## XML映射文件

### 元素总览：

> cache : 该命名空间的缓存配置
>
> cache-ref : 引用其他命名空间的缓存配置
>
> resultMap : 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素
>
> ~~parameterMap : 老式风格的参数映射。此元素已被废弃，并可能在将来被移除！请使用行内参数映射。文档中不会介绍此元素~~
>
> sql : 可被其它语句引用的可重用语句块
>
> insert : 映射插入语句
>
> update : 映射更新语句
>
> delete : 映射删除语句
>
> select : 映射查询语句

### select

#### 语法描述

```xml
<select id="selectPerson" parameterType="int" resultType="hashmap">
    SELECT * FROM person WHERE id=#{id}
</select>
```

这个语句名为selectPerson，接受一个int（或Integer）类型的参数，并返回一个Hashmap的对象，其中的键是列名，值便是结果行中的对应值。

```xml
#{id} //告诉MyBatis创建一个预处理语句（PreparedStatement）参数，在JDBC中，这样的一个参数在 SQL 中会由一个“?”来标识，并被传递到一个新的预处理语句中
```

==>

Java 代码：

```java
String selectPerson = "SELECT * FROM person WHERE id=?";
PreparedStatement ps = conn.prepareStatement(selectPerson);
ps.setInt(1, id);
```

#### 属性配置

```xml
<select
        id="selectPerson"
        parameterType="int"
        parameterMap="deprecated"
        resultType="hashmap"
        resultMap="personResultMap"
        flushCache="false"
        useCache="true"
        timeout="10"
        fetchSize="256"
        statementType="PREPARED"
        resultSetType="FORWARD_ONLY">
</select>
```

属性描述：

* **id**：在命名空间中唯一的标识符，可以被用来引用这条语句
* **parameterType**：将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）
* ~~**parameterMap**：用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性~~
* **resultType**：期望从这条语句中返回结果的类全限定名或别名。 注意，如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型。 resultType 和 resultMap 之间只能同时使用一个
* **resultMap**：对外部 resultMap 的命名引用。结果映射是 MyBatis 最强大的特性，如果你对其理解透彻，许多复杂的映射问题都能迎刃而解。 resultType 和 resultMap 之间只能同时使用一个
* **flushCache**：将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：false
* **useCache**：将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来，默认值：对 select 元素为 true
* **timeout**：这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）
* **fetchSize**：这是一个给驱动的建议值，尝试让驱动程序每次批量返回的结果行数等于这个设置值。 默认值为未设置（unset）（依赖驱动）
* **statementType**：可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED
* **resultSetType**：FORWARD_ONLY，SCROLL_SENSITIVE, SCROLL_INSENSITIVE 或 DEFAULT（等价于 unset） 中的一个，默认值为 unset （依赖数据库驱动）
* **databaseId**：如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有不带 databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略
* **resultOrdered**：这个设置仅针对嵌套结果 select 语句：如果为 true，将会假设包含了嵌套结果集或是分组，当返回一个主结果行时，就不会产生对前面结果集的引用。 这就使得在获取嵌套结果集的时候不至于内存不够用。默认值：`false`
* **resultSets**：这个设置仅适用于多结果集的情况。它将列出语句执行后返回的结果集并赋予每个结果集一个名称，多个名称之间以逗号分隔

### insert &update &delete

#### 属性配置

```xml
<insert
        id="insertAuthor"
        parameterType="domain.blog.Author"
        flushCache="true"
        statementType="PREPARED"
        keyProperty=""
        keyColumn=""
        useGeneratedKeys=""
        timeout="20">
</insert>

<update
        id="updateAuthor"
        parameterType="domain.blog.Author"
        flushCache="true"
        statementType="PREPARED"
        timeout="20">
</update>

<delete
        id="deleteAuthor"
        parameterType="domain.blog.Author"
        flushCache="true"
        statementType="PREPARED"
        timeout="20">
</delete>
```

属性描述：

* **id**：在命名空间中唯一的标识符，可以被用来引用这条语句
* **parameterType**：将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）
* ~~**parameterMap**：用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性~~
* **flushCache**：将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：（对 insert、update 和 delete 语句）true
* **timeout**：这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）
* **statementType**：可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement，默认值：PREPARED
* **useGeneratedKeys**：（仅适用于 insert 和 update）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系型数据库管理系统的自动递增字段），默认值：false
* **keyProperty**：（仅适用于 insert 和 update）指定能够唯一识别对象的属性，MyBatis 会使用 getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值，默认值：未设置（`unset`）。如果生成列不止一个，可以用逗号分隔多个属性名称
* **keyColumn**：（仅适用于 insert 和 update）设置生成键值在表中的列名，在某些数据库（像 PostgreSQL）中，当主键列不是表中的第一列的时候，是必须设置的。如果生成列不止一个，可以用逗号分隔多个属性名称
* **databaseId**：如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有不带 databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略

example：

```xml
<insert id="insertAuthor">
  insert into Author (id,username,password,email,bio)
  values (#{id},#{username},#{password},#{email},#{bio})
</insert>

<update id="updateAuthor">
  update Author set
    username = #{username},
    password = #{password},
    email = #{email},
    bio = #{bio}
  where id = #{id}
</update>

<delete id="deleteAuthor">
  delete from Author where id = #{id}
</delete>
```

## 动态SQL

### 元素总览

> if
>
> choose(when, otherwise)
>
> trim(where, set)
>
> foreach

### if

示例：

```xml
<select id="findActiveBlogWithTitleLike" resultType="Blog">
    SELECT * FROM blog
    WHERE state = 'ACTIVE'
    <if test="title != null">
        AND title like #{title}
    </if>
</select>
```

在此例中，如果不传入"title"，那么所有处于"ACTIVE"状态的BLOG 都会返回；如果传入了"title"参数，那么就会对"title"一列进行模糊查找并返回对应的BLOG结果



通过"title"和"author"两个参数进行可选搜索

```xml
<select id="findActiveBlogLike" resultType="Blog">
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <if test="title != null">
    AND title like #{title}
  </if>
  <if test="author != null and author.name != null">
    AND author_name like #{author.name}
  </if>
</select>
```



### choose(when, otherwise)

* 不想使用所有条件，只想从多个条件中选择一个使用，功能类似于Java中的switch语句

还是上面的例子，但是策略变为：传入了 “title” 就按 “title” 查找，传入了 “author” 就按 “author” 查找的情形。若两者都没有传入，就返回标记为 featured 的 BLOG（这可能是管理员认为，与其返回大量的无意义随机 Blog，还不如返回一些由管理员精选的 Blog）

```xml
<select id="findActiveBlogLike" resultType="Blog">
	SELECT * FROM blog WHERE state = 'ACTIVE'
    <choose>
        <when test="title != null">
            AND title like #{title}
        </when>
        <when test="author != null and author.name != null">
            AND author_name like #{author.name}
        </when>
        <otherwise>
            AND featured = 1
        </otherwise>
    </choose>
</select>
```



### trim(where, set)

```xml
<select id="findActiveBlogLike" resultType="Blog">
    SELECT * FROM BLOG
    WHERE
    <if test="state != null">
        state = #{state}
    </if>
    <if test="title != null">
        AND title like #{title}
    </if>
    <if test="author != null and author.name != null">
        AND author_name like #{author.name}
    </if>
</select>
```



在上面这个例子中，当使用 if 元素判断并执行的时候，如果其中所有的判断都未生效或者第一个未生效时，结果就会变成

```mysql
SELECT * FROM BLOG
WHERE
--
SELECT * FROM BLOG
WHERE
AND title LIKE 'someTitle'
```

为了解决这个问题，MyBatis引入了 where 元素

#### where 元素

```xml
<select id="findActiveBlogLike" resultType="Blog">
    SELECT * FROM BLOG
    <where>
        <if test="state != null">
            state = #{state}
        </if>
        <if test="title != null">
            AND title like #{title}
        </if>
        <if test="author != null and author.name != null">
            AND author_name like #{author.name}
        </if>
    </where>
</select>
```

where 元素只会在子元素返回任何内容的情况下才插入 WHERE 子句。而且若开头为"AND"或"OR"，where元素也会将它们去除。

#### trim 元素

我们也可以使用 trim 来自己定制 where 元素的功能，将之前的 where 元素的含义用 trim 实现：

```xml
<trim prefix="WHERE" prefixOverrides="AND |OR ">
    ...
</trim>
```

该语句等价于使用 where 元素

属性：

* **prefix**：该属性中写入的内容会被插入进SQL语句中
* **prefixOverrides**：该属性中的通过管道符分隔的文本序列会被忽略（上例中空格是必要的）
* 上例会移除所有prefixOverrides属性中指定的内容，并插入prefix属性中指定的内容

#### set 元素

```xml
<update id="updateAuthorIfNecessary">
    UPDATE Author
    <set>
        <if test="username != null">username=#{username},</if>
        <if test="password != null">password=#{password},</if>
        <if test="email != null">email=#{email},</if>
        <if test="bio != null">bi0=#{bio}</if>
    </set>
    where id=#{id}
</update>
```

此例中，set 元素会动态的在行首插入 SET 关键字，并删掉额外的逗号（这些逗号实在使用条件语句给列赋值时引入的）

将 set 元素使用 trim 进行自定义

```xml
<trim prefix="SET" suffixOverrides=",">
    ...
</trim>
```

### foreach

动态 SQL 的另一个常见使用场景是对集合进行遍历（尤其在构建 IN 条件语句的时候）

```xml
<select id="selectPostIn" resultType="domain.blog.Post">
    SELECT *
    FROM POST P
    WHERE ID IN
    <foreach item="item" index="index" collection="list" open="(" separator="," close=")">
    	#{item}
    </foreach>
</select>
```

foreach 允许你指定一个集合，声明可以在元素体内使用的集合项（item）和索引（index）变量。它也允许你指定开头与结尾的字符串以及集合项迭代之间的分隔符。这个元素也不会错误的添加多余的分隔符

**tips**：你可以将任何可迭代的对象（如List、Set等）、Map对象或数组对象作为集合参数传递给foreach。当使用可迭代对象或数组时，index是当前迭代的序号，item的值是本次迭代获取到的元素。当使用Map对象（或Map.Entry对象的集合）时，index是键，item是值。

### script

要在带注解的映射器接口类中使用动态SQL，可以使用script元素

```mysql
@update({"<script>",
        "update Author",
        "	<set>",
        "		<if test='username != null'>username=#{username},</if>",
        "		<if test='password != null'>password=#{password},</if>",
        "		<if test='email != null'>email=#{email},</if>",
        "		<if test='bio != null'>bio=#{bio}</if>",
        "	</set>",
        "where id=#{id}",
        "</script>"})
void updateAuthorValues(Author author);
```

### bind

bind 元素允许你在OGNL表达式以外创建一个变量，并将其绑定到当前上下文

```xml
<select id="selectBlogsLike" resultType="Blog">
	<bind name="pattern" value="'%' + _parameter.getTitle() + '%'"/>
    SELECT * FROM BLOG
    WHERE title LIKE #{pattern}
</select>
```

### 多数据库支持

如果配置了databaseIdProvider，就可以在动态代码中使用名为 "_databaseId" 的变量来为不同的数据库构建特定的语句

```xml
<insert id="insert">
    <selectKey keyProperty="id" resultType="int" order="BEFORE">
        <if test="_databaseId == 'oracle'">
            SELECT seq_users.nextval FROM dual
        </if>
        <if test="_databaseId == 'db2'">
            SELECT nextval FOR seq_users FROM sysibm.sysdummy1
        </if>
    </selectKey>
    INSERT INTO users VALUES (#{id}, #{name})
</insert>
```

