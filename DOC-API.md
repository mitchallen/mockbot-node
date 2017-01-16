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
