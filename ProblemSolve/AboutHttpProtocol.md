# Http Protocol

## content-type

- This key-value pair use to define the type of web files and the encoding of web pages
- The value of content-type decides what format and encoding the browser will read this file
- Know more about content-type, click [here](https://www.runoob.com/http/http-content-type.html)

## content-disposition

- It's the extension of the type of MIME protocol, MIME protocol instruct MIME user proxy how to display attachment
- when browser receive this key-value pair, the download dialog will be activated
- When server sends a file to the browser, if browser support the type of this file, it will be displayed in browser instead of downloading, if you need to remind users to download it, use this key-value pair
- Value Format : "attachment;filename=resource name"
- Know more about content-disposition, click [here](https://www.jianshu.com/p/d4a85d025768)

