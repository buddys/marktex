Marktex is a rich-feature, smarter markdown parser. Features with demos are listed below.

> GFM supported, code hilighting, math supporting, task list, smarter list, para alignment. 


## MarkTex Features

We fixed markdown features and added ours.

### alignment
 
> There is no alignment in markdown, added in marktex.
            
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

> List rendering is another annoying feature in markdown, we fixed it someway.

```
1. item one
  additional `\n` is not required
1. arbitrary number works
  > blockquote bug with list is also fixed

1. successive `\n` split lists
```

becomes

1. item one
  additional `\n` is not required
1. arbitrary number works
  > blockquote bug with list is also fixed

2. successive `\n` split lists


### math

> Sometimes, we need some math.

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

> we enabled code hilight, as pretty code is for geeks' favorite.

    this is `inline code`.
    
    ```javascript
    // hello world
    var a='hello world';
    alert(a);
    ```
    
        indented by 4 spaces also makes code

       
becomes

this is `inline code`.

```javascript
// hello world
var a='hello world';
alert(a);
```

    indented by 4 spaces also makes code


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

> A new feature in GFM, which hasn't be inplemented in most converters.

    - [ ] a task list item
    - [x] a complex task
      * part1
      * part2
    - [ ] incomplete
    - [x] completed
    
becomes

- [ ] a task list item
- [x] a complex task
  * part1
  * part2
- [ ] incomplete
- [x] completed

### line break

> GFM line break is enabled by default.
    
    first line
    second line
       
becomes

first line
second line

---

> For a complete syntax, please refere to: [GFM](https://help.github.com/articles/github-flavored-markdown) , or [Markdown](http://daringfireball.net/projects/markdown/syntax).
