/**
    Module: mockbot-node
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module mockbot-node
 * @property {Array} childNodes - an array of child nodes
 */

/**
 * 
 * Factory module
 * @module mockbot-node-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} spec Named parameters object
 * @param {number} spec.nodeType required node type
 * @returns {module:mockbot-node}
 * @example <caption>Usage example</caption>
 * var factory = require("mockbot-node");
 * var obj = factory.create({ nodeType: 1 });
 */
module.exports.create = (spec) => {

    spec = spec || {};
    var m_nodeType = spec.nodeType || 0,
        m_child = [];
        
    var obj = {

        /** mock node.hasChildNodes
          * @function
          * @instance
          * @memberof module:mockbot-node
          * @returns {boolean}
          * @example <caption>usage</caption>
          * if(node.hasChildNodes()) { ... }
        */
        hasChildNodes: function() {
            return m_child.length > 0; 
        },

        /** mock node.appenChild 
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-node
          * @returns {module:mockbot-node}
          * @example <caption>usage</caption>
          * node.appendChild(child);
        */
        appendChild: function(n) {
            m_child.push(n);
            return n; 
        },

        /** mock node.cloneNode
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-node
          * @returns {module:mockbot-node}
          * @example <caption>usage</caption>
          * var n = el.cloneNode();
        */
        cloneNode: function(deep) {
            return Object.create(this,{});
        },
    };

    Object.defineProperties( obj, {
      // properties are documented in the module section at the top

      "nodeType": {
        writable: false,
        enumerable: true,
        value: m_nodeType
      },

      "childNodes": {
        writable: false,
        enumerable: true,
        value: m_child
      },

    });

    return obj;
};
