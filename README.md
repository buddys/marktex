# marked

A rich-feature markdown parser, especially for geeks. [Live demo](http://buddys.github.io/marktex/) is available.

> GFM supported, code hilighting, math supporting, task list, smarter list, para alignment.


## Usage

Minimal usage:

```js
console.log(marktex('**markdown** is wonderful'));
//output: <p><strong>markdown</strong> is wonderful</p>
```

Options and callback:

```js
var options = {
  gfm: true,
  marktex: true
});

marktex('**markdown** is wonderful', options, function (err, content) {
  if (err) throw err;
  console.log(content);
});
```

## marktex(mdStr, [options], [callback])

### markdownString

Markdown string to be parsed.

### options

Type: `Object`

Option object for marktex.

### callback

Type: `Function`

Callback function with error-string as first arg, parsed-content as second arg.

## Options

### gfm

Type: `Boolean`
Default: `true`

Enable [GitHub flavored markdown](https://help.github.com/articles/github-flavored-markdown).

### tables

Type: `Boolean`
Default: `true`

Enable GFM tables. Requires the `gfm` option to be true.

### breaks

Type: `Boolean`
Default: `true`

Enable GFM line breaks. Requires the `gfm` option to be true.

### marktex

Type: `Boolean`
Default: `true`

Enable [MarkTex](http://buddys.github.io/marktex/), features include task-list, math interface, para-alignment, smarter list ,etc.

### pedantic

Type: `Boolean`
Default: `false`

Conform to original markdown, do not fix any of bugs or poor behavior.

### sanitize

Type: `Boolean`
Default: `false`

Ignore any HTML that has been input.

### smartLists

Type: `Boolean`
Default: `true`

Unsorted list will be splited when leading symbol changes.

### smartypants

Type: `Boolean`
Default: `false`

Use "smart" typograhic punctuation for things like quotes and dashes.

### highlight

Type: `Function`
Return: `string` 

Highlight interface, used for highlight code blocks. Takes language specification and code string, returns html. For example:

```js
function(codeString, language){
    return highlight(lang, code).value;
}
```

### math

Type: `Function`
Return: `string` 

Matg interface, used for rendering math code. Takes math code, isInline and language, returns html. For example:

```js
math: function(mathString, isInline, language){
    return isInline ? '<span class="mathjax">\\('+mathString+'\\)</span>'
        :'<div class="mathjax">\\['+mathString+'\\]</div>';
}
```

### renderer

Type: `Renderer`
Default: `new Renderer()`

A renderer instance for rendering ast to html. Learn more on the Renderer
section.

## Parser API

### Renderer

Renderer renders tokens to html.

```javascript
var r = new marked.Renderer()
r.blockcode = function(code, lang) {
  return highlight(lang, code).value;
}

console.log(marked(text, {renderer: r}))
```

#### Block Level Renderer

- code(code, language)
- math(math, language)
- blockquote(quote)
- html(html)
- heading(text, level)
- hr()
- list(body, ordered)
- listitem(text)
- todo(body)
- todoitem(text, checked)
- paragraph(text)
- aligned_paragraph(text, alignment)
- table(header, body)
- tablerow(content)
- tablecell(content, flags)

`alignment` could be:

```
{
	align: 'center',
	indent: '2em'
}
```

`flags` could be:

```
{
    header: true,
    align: 'center'
}
```

#### Span Level Renderer

- strong(text)
- em(text)
- codespan(code)
- mathspan(math)
- br()
- del(text)
- link(href, title, text)
- image(href, title, text)

### Lexer

Lexer produces tokens from markdown text input.

``` js
var lexer = new marked.Lexer(options);
var tokens = lexer.lex(text);
console.log(tokens);
console.log(lexer.rules);
```

### Parser

Parser reads markdown text, outputs html. Renders and lexers can be customed within a parser.

``` js
var renderer = new marked.Renderer();

renderer.header = function(text, level) {
  return '<div class="h-' + level + '">' + text + '</div>'
}

var parse = function(src, options) {
  options = options || {};
  return marked.parser(marked.lexer(src, options), options, renderer);
}

console.log(parse('# h1'))
```

## Thanks

A lot thanks to [marked](https://github.com/chjj/marked) implemented by Jeffrey. Marktex is developed based on marked.
