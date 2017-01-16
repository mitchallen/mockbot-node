/**
    Module: mockbot-element
      Test: appendchild-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('appendChild', () => {

    var _factory = null;

    before( done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        done();
    });

    after( done => {
        // Call after all tests
        done();
    });

    beforeEach( done => {
        // Call before each test
        done();
    });

    afterEach( done => {
        // Call after eeach test
        done();
    });

    it('should append child', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ nodeType: 1 }),
            child = _factory.create({ nodeType: 1 });
        parent.appendChild(child);
        should.exist(parent.childNodes[0]);
        done();
    });

    it('should return child', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ nodeType: 1  }),
            child = _factory.create({ nodeType: 1  }),
            result = parent.appendChild(child);
        result.should.eql(child);
        done();
    });

    
});
