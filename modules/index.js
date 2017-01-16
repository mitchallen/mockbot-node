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
 */

/**
 * 
 * Factory module
 * @module mockbot-node-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} options Named parameters object
 * @returns {module:mockbot-node}
 * @example <caption>Usage example</caption>
 * var factory = require("mockbot-node");
 * var obj = factory.create({});
 */
module.exports.create = (spec) => {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "mockbot-node";
    return {
        // public
        /** Returns the package name
          * @function
          * @instance
          * @memberof module:mockbot-node
        */
        package: () => _package,
        /** Health check
          * @function
          * @instance
          * @memberof module:mockbot-node
          * @example <caption>Health check</caption>
          * obj.health.should.eql("OK");
        */
        health: () => "OK"
    };
};
