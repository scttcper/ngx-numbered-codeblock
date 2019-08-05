<div align="center">
  <h1>ngx-numbered-codeblock</h1>
  <br>
  <a href="https://www.npmjs.org/package/@ctrl/ngx-numbered-codeblock">
    <img src="https://badge.fury.io/js/%40ctrl%2Fngx-numbered-codeblock.svg" alt="npm">
  </a> 
  <a href="https://travis-ci.org/TypeCtrl/ngx-numbered-codeblock">
    <img src="https://travis-ci.org/TypeCtrl/ngx-numbered-codeblock.svg?branch=master" alt="travis"></a> 
  <a href="https://codecov.io/github/typectrl/ngx-numbered-codeblock">
    <img src="https://img.shields.io/codecov/c/github/typectrl/ngx-numbered-codeblock.svg" alt="codecov">
  </a>
  <br>
  <br>
</div>

> [Prism.js](https://github.com/PrismJS/prism) wrapper with built-in line numbers

__DEMO__: https://ngx-numbered-codeblock.netlify.com/  

## Installation

```sh
npm install @ctrl/ngx-numbered-codeblock
```

## Use
Import the module

```ts
// Added to NgModule
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock';

// Import your required language in main.ts or at the root of your application
import 'prismjs';
// typescript
import 'prismjs/components/prism-typescript';
// javascript
import 'prismjs/components/prism-javascript';
```

Use The Component
```html
<ngx-numbered-codeblock [code]="code"></ngx-numbered-codeblock>
```

Import a [theme](https://github.com/PrismJS/prism-themes) or create your own

## Inputs
* `code` - a formatted string of the code to display
* `languague` - default: `typescript` the code parser to use with prismjs
* `lineNumbers` - default: `true` if line numbers should be shown

## License
MIT

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
