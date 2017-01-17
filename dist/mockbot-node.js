(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MockbotNode = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

module.exports.create = function (spec) {

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
        hasChildNodes: function hasChildNodes() {
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
        appendChild: function appendChild(n) {
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
        cloneNode: function cloneNode(deep) {
            // TODO - this may not be ideal 
            return Object.assign({}, this);
        }
    };

    Object.defineProperties(obj, {
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
        }

    });

    return obj;
};

},{}]},{},[1])(1)
});