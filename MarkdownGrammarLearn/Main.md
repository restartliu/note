# Markdown Grammar

---
### About Subject
* Start with **# with space**
* Change the title level by adding '#'

```markdown
# First Subject

## Second Subject

### Third Subject

#### fourth Subject

##### fifth Subject

###### sixth Subject
```



### About Ordered List
* Start with grammar like **"1.+space"** to construct an ordered list
* Select the text you want to **downgrade(upgrade)** and press the **tab(shift and tab key)** key to make it
* **For Typora** Select the text you want to construct an ordered list and press **" ctrl+shift+[ "** to make it

```markdown
1. Open refrigerator
2. Put the elephant into refrigerator
3. Close the door
```



### About Unordered List

* Start with **"symbol \* or  \-  or \+ with space"** to construct an unordered list
* Downgrade&Upgrade the same method as above

```markdown
- test
  - test
  - test
    * test
- test
- test

+ test
```



### About Task List
* Start with **"symbol * ro - with [ ] "** to construct a task list
* Downgrade&Upgrade the same method as above
* Every list can be marked by click button
* **Obsidian** Press **ctrl+enter** to make this line be a task list

```markdown
* [ ] test
  * [ ] test
  * [ ] test

- [ ] test
- [ ] test
```



### About Font
* One pair **" \** or \__  "** make the font border
* One pair **" *  or _"** make the font slanted
* One pair **" \*\**  or___ "** make the font slanted and border
* One pair **" ~~ "** add delete line to font

```markdown
test
**test**
__test__
*test*
_test_
***test***
___test___
~~test~~
```



### About Split Line
* Start with **" \* \* \* "**
* Start with **" \*\*\* "**
* Start with **" - - - "**
* Start with **" ___ "**

```markdown
___
- - -
***
* * *
***************
```



### About New Lines
* Start with double space and press enter to warp text

```markdown
text1


text2
    

text3
text4
你好
 &emsp;text5
 &ensp;text5
 &nbsp;test5
text6
```



### About Quote
* Start with **" > "**
* It can be nested
* You can just add one **" > "** at the head of a paragraph to make it
* You can use some other markdown grammar in this block

```markdown
>statment

>paragraph
>paragraph
>paragraph

>statment
>
>>statment2
>>
>>>statment3

># test1
>
>* test2
>
>```c
>printf("hello world");
>```
```



### About Form 
* **For Typora** 
	
	* Using grammar like **" |name|age|phone| "** to construct a form
* This form can designed by click button in typora
	
* **For Obsidian** 
	
	* Construct a form by using grammar like
	```markdown
			|name|age|phone|
			|:-:|:-:|:-:|
			|test1|test2|test3|
	```
	* alignment of the table is decided by the position of **:** 

```markdown
| name | age  |    phone    |
| :--: | :--: | :---------: |
| luo  |  19  | 13177860225 |
```



### About Code Block

* Start with one pair of ** \`\`\` ** to construct a code block
* Start with one pair of **'** to construct a code block line
* Adding code type after code block symbol to make syntax highlight(for the first way to construct)

```markdown
`printf("hello world");`

​```c
#include<stdio.h>

int main()
{
	printf("hello world");
	return 0;
}
​```
```



### About Insert Media

* You can just drag the local files into this text box to construct a Hyperlink, It can be automatically recognized as a picture or music or video and display on screen
* Using grammar like **\![alt pic]\(filepath discribe)**
* Using grammar like **!\[alt pic][id]**, id can be filepath+discribe
* **For Obsidian** Using grammar like **!\filepath**

```markdown
![[background.origin.jpg]]

![[bensound-sunny.mp3]]

![[demo.mp4]]

![background.jpg](./background.origin.jpg "opitional title")

![background.jpg][1]

[1]: https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg
```



### About Hyperlink
* Inline HyperlinkUsing grammar like **\[LinkedWord](Link)** to construct a word link
* Reference HyperlinkUsing grammar like **\[LinkedWord][id]** to construct a word link, \[id] can be defined in this text box

```markdown
you can use [baidu](https://www.baidu.com "In a way, it's not a good browser") to cope with your problem

[coding][coding] is my favorite thing

[coding]: https://www.zhihu.com "a boring thing for most people"
```



### More things
* HTML grammar can be used in Markdown

```markdown
<a href="https://www.baidu.com">baidu</a>

<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg">

<font face="微软雅黑">font style</font>

<font size=5>font style</font>

<center>sentence</center>
<p align="left">sentence</p>
<p align="right">sentence</p>
```

