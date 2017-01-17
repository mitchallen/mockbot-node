mockbot-node
==
mock html dom node
--

<p align="left">
  <a href="https://travis-ci.org/mitchallen/mockbot-node">
    <img src="https://img.shields.io/travis/mitchallen/mockbot-node.svg?style=flat-square" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/mockbot-node">
    <img src="https://codecov.io/gh/mitchallen/mockbot-node/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/mockbot-node">
    <img src="http://img.shields.io/npm/dt/mockbot-node.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/mockbot-node">
    <img src="http://img.shields.io/npm/v/mockbot-node.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/mockbot-node">
    <img src="https://img.shields.io/github/license/mitchallen/mockbot-node.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install mockbot-node --save
  
* * *

## Modules

<dl>
<dt><a href="#module_mockbot-node">mockbot-node</a></dt>
<dd><p>Module</p>
</dd>
<dt><a href="#module_mockbot-node-factory">mockbot-node-factory</a></dt>
<dd><p>Factory module</p>
</dd>
</dl>

<a name="module_mockbot-node"></a>

## mockbot-node
Module

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| childNodes | <code>Array</code> | an array of child nodes |


* [mockbot-node](#module_mockbot-node)
    * [.hasChildNodes()](#module_mockbot-node+hasChildNodes) ⇒ <code>boolean</code>
    * [.appendChild(deep)](#module_mockbot-node+appendChild) ⇒ <code>[mockbot-node](#module_mockbot-node)</code>
    * [.cloneNode(deep)](#module_mockbot-node+cloneNode) ⇒ <code>[mockbot-node](#module_mockbot-node)</code>

<a name="module_mockbot-node+hasChildNodes"></a>

### mockbot-node.hasChildNodes() ⇒ <code>boolean</code>
mock node.hasChildNodes

**Kind**: instance method of <code>[mockbot-node](#module_mockbot-node)</code>  
**Example** *(usage)*  
```js
if(node.hasChildNodes()) { ... }
```
<a name="module_mockbot-node+appendChild"></a>

### mockbot-node.appendChild(deep) ⇒ <code>[mockbot-node](#module_mockbot-node)</code>
mock node.appenChild

**Kind**: instance method of <code>[mockbot-node](#module_mockbot-node)</code>  

| Param | Type | Description |
| --- | --- | --- |
| deep | <code>boolean</code> | If true, clone children as well |

**Example** *(usage)*  
```js
node.appendChild(child);
```
<a name="module_mockbot-node+cloneNode"></a>

### mockbot-node.cloneNode(deep) ⇒ <code>[mockbot-node](#module_mockbot-node)</code>
mock node.cloneNode

**Kind**: instance method of <code>[mockbot-node](#module_mockbot-node)</code>  

| Param | Type | Description |
| --- | --- | --- |
| deep | <code>boolean</code> | If true, clone children as well |

**Example** *(usage)*  
```js
var n = el.cloneNode();
```
<a name="module_mockbot-node-factory"></a>

## mockbot-node-factory
Factory module

<a name="module_mockbot-node-factory.create"></a>

### mockbot-node-factory.create(spec) ⇒ <code>[mockbot-node](#module_mockbot-node)</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[mockbot-node-factory](#module_mockbot-node-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |
| spec.nodeType | <code>number</code> | required node type |

**Example** *(Usage example)*  
```js
var factory = require("mockbot-node");
var obj = factory.create({ nodeType: 1 });
```

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/mockbot-node.git](https://bitbucket.org/mitchallen/mockbot-node.git)
* [github.com/mitchallen/mockbot-node.git](https://github.com/mitchallen/mockbot-node.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.2

* fixed download badge url in readme

#### Version 0.1.1

* added test coverage for cloneNode

#### Version 0.1.0 

* initial release

* * *
