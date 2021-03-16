# Blog项目解决方案

## 整个项目的结构

![image-20210314165749128](D:\MyNote\ssm\blog项目\img\image-20210314165749128.png)

## JSON返回值解决方案

* 在springboot中使用RestController注释整个控制层类，返回值如果是hashmap，会自动转换为json数据，根据键值对进行json数据的键值映射
* 我的解决方案是创建一个工具类，进行返回值的一些处理

## mybatis相关配置

* 一般情况下，需要在每个mapper类前加上@Mapper注释才能让mybatis读取到该类；我们可以通过给springboot启动类前加上@MapperScan(MapperPackagePath) 来避免繁杂的工作

* springboot中对mybatis的一些配置

  ```yaml
  mybatis:
  #  配置所有实体类的默认别名
    type-aliases-package: com.blog.blogtest.model
  #  配置mybatis查找mapper文件的路径
    mapper-locations: classpath*:mapper/**/*Mapper.xml
  #  配置查找mybatis的特性配置文件的路径
    config-location: classpath:mybatis/mybatis-config.xml
  ```

这个是在springboot中yaml文件里的配置

关于数据源的配置，如果和springboot集成，我们可以直接使用如下方法配置

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/blog?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: 123456
```

* 关于上面提到的mybatis-config.xml文件配置，这是关于mybatis的一些特性的配置，以下有一些常用的配置

  ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">
  <configuration>
      <settings>
  <!--        自动生成主键-->
          <setting name="useGeneratedKeys" value="true"/>
          <setting name="cacheEnabled" value="true"/>
  <!--        开启驼峰命名转换规则-->
          <setting name="mapUnderscoreToCamelCase" value="true"/>
      </settings>
  
      <typeAliases>
          <!--        自动为所有model包中的类配置别名-->
          <package name="com.blog.blogtest.model"/>
      </typeAliases>
  </configuration>
  ```

## 关于mysql在workbench中设置当前时间为默认添加时间

* 在default/expression选项栏内填上now()函数