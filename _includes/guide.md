Marktex is a rich-feature, smarter markdown parser. Extended features with demos are listed below.

> GFM supported, code hilighting, math supporting, task list, smarter list, para alignment. 


## MarkTex Features

### alignment
 
```
center aligned>

right aligned>>
useful in signatures.

para can be indented by 1 tab. >1
```
       
becomes

center aligned>

right aligned>>
useful in signatures.

para can be indented by 1 tab. >1


### list

> We enabled smarter list rendering than origin markdown.

```
1. item one
  additional `\n` is not required
1. leading number can be arbitrary

1. successive `\n` split lists
```

becomes

1. item one
  additional `\n` is not required
1. leading number can be arbitrary

1. successive `\n` split lists


### math

```
This is inline math: $mr\omega^2 = F$, and the following is blocked math.

$$$
f(a) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)  }{z-a}dz
$$$

$$$
J_\alpha(x) = \sum\limits_{m=0}^\infty \frac{(-1)^m}{m! \, \Gamma(m + \alpha + 1)}{\left({\frac{x}{2}}\right)}^{2 m + \alpha}
$$$
```
       
becomes

This is inline math: $mr\omega^2 = F$, and the following is blocked math.

$$$
f(a) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)  }{z-a}dz
$$$

$$$
J_\alpha(x) = \sum\limits_{m=0}^\infty \frac{(-1)^m}{m! \, \Gamma(m + \alpha + 1)}{\left({\frac{x}{2}}\right)}^{2 m + \alpha}
$$$



## GFM Features

> Most GFM features are implemented/integrated in MarkTex, especially the wonderful ones.

### code highlight

    this is `inline code`.
    
    ```javascript
    // hello world
    var a='hello world';
    alert(a);
    ```
    
becomes

this is `inline code`.

```javascript
// hello world
var a='hello world';
alert(a);
```

### table

    |h1|h2|h3|
    |:---|:---:|---:|
    |this is the GFM table|following line is multi-aligned|isn't it cute?|
    |left|center|right|
       
becomes

|h1|h2|h3|
|:---|:---:|---:|
|this is the GFM table|following line is multi-aligned|isn't it cute?|
|left|center|right|

### Task list

    - [ ] a task list item
    - [x] a complex task
    - [ ] incomplete
    - [x] completed
    
becomes

- [ ] a task list item
- [x] a complex task
- [ ] incomplete
- [x] completed

### line break

    first line
    second line
       
becomes

first line
second line

---

> For a complete syntax, please refere to: [GFM](https://help.github.com/articles/github-flavored-markdown) , or [Markdown](http://daringfireball.net/projects/markdown/syntax).
