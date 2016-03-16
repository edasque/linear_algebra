'use strict'

let Vector = require("../vector.js")
let assert = require('assert');

describe('Vector', function() {
  describe('#constructor()', function () {
    it('should correctly set coordinates & dimensions', function () {
      assert.deepEqual([1,2,3], new Vector([1,2,3]).coordinates);
      assert.deepEqual(3, new Vector([1,2,3]).dimension);
    })
    it('should correctly error out when coordinates is not an array', function () {
      assert.throws(function() { new Vector(2) },/coordinates are not an array/);
    })
    it('should correctly error out when coordinates is an empty array', function () {
      assert.throws(function() { new Vector([]) },/coordinates array is empty/);
    })

  });

  describe('#toString()', function () {
    it('should return a string to display correctly', function () {
      assert.equal('[1,2,3]', new Vector([1,2,3]).toString());
    });
  });

  describe('#inverse()', function () {
    it('Inversing [0,0,0,0]', function () {
      assert.equal('[0,0,0,0]', new Vector([0,0,0,0]).inverse().toString());
    });
    it('Inversing [1,2,3]', function () {
      assert.equal('[1,2,3]', new Vector([-1,-2,-3]).inverse().toString());
    });
    it('Inversing [1.5]', function () {
      assert.equal('[1.5]', new Vector([-1.5]).inverse().toString());
    });

  });

  describe('#times_scalar()', function () {
    it('Multiplication by scalar [0,0,0,0]*3', function () {
      assert.equal('[0,0,0,0]', new Vector([0,0,0,0]).times_scalar(3).toString());
    });
    it('Multiplication by scalar [1,2,-3]*3', function () {
      assert.equal('[3,6,-9]', new Vector([1,2,-3]).times_scalar(3).toString());
    });
    it('Multiplication by scalar [1,2,3]*-1', function () {
      assert.equal('[-1,-2,-3]', new Vector([1,2,3]).times_scalar(-1).toString());
    });
    it('Multiplication by scalar [1,2]*0', function () {
      assert.equal('[0,0]', new Vector([1,2]).times_scalar(0).toString());
    });

  });

  describe('#normalized()', function () {
    it('Normalization of a vector', function () {
      assert.equal('[0.9339352140866403,-0.35744232526233]', new Vector([5.581,-2.136]).normalized().toString());
      assert.equal('[0.3404012959433014,0.5300437012984873,-0.7766470449528029]', new Vector([1.996,3.108,-4.554]).normalized().toString());
    });
    it('Normalization of [0,0,0,0]', function () {
      assert.throws(function() { new Vector([0,0,0,0]).normalized() },/ZeroVectorNormalizationError/);
    });
  });

  describe('#plus()', function () {
    it('Adding two vectors of equal dimension', function () {
      assert.equal('[2,4,7]', new Vector([1,2,3]).plus(new Vector([1,2,4])).toString());
    });
    it('Adding two vectors of different dimension', function () {
      assert.throws(function() { new Vector([1,2,3]).plus(new Vector([1])) },/their dimensions are different/);
    });
    it('Adding two inverse vectors', function () {
      assert.equal('[0,0,0]', new Vector([1,2,3]).plus(new Vector([-1,-2,-3])).toString());
    });

  });

  describe('#minus()', function () {
    it('Substracting one vector with another vector of equal dimension', function () {
      assert.equal('[-1,-1,-1]', new Vector([1,2,3]).minus(new Vector([2,3,4])).toString());
    });
    it('Substracting one vector with itself', function () {
      assert.equal('[0,0,0]', new Vector([1,2,3]).minus(new Vector([1,2,3])).toString());
    });
    it('Substracting one vector to a vector of a different dimension', function () {
      assert.throws(function() { new Vector([1,2,3]).minus(new Vector([1])) },/their dimensions are different/);
    });

  });


  describe('#magnitude()', function () {
    it('Magnitude of a vector', function () {
      assert.equal('7.440282924728065', new Vector([-0.221,7.437]).magnitude().toString());
      assert.equal('10.884187567292289', new Vector([8.813,-1.331,-6.247]).magnitude().toString());
    });
    it('Magnitude of a 0 vector', function () {
      assert.equal('0', new Vector([0,-0,0]).magnitude().toString());
    });

  });

  describe('#dotProduct()', function () {
    it('dotProduct of two vectors', function () {
      assert.equal('-41.382286', new Vector([7.887,4.138]).dotProduct(new Vector([-8.802,6.776])).toString());
      assert.equal('56.397178000000004', new Vector([-5.955,-4.904,-1.874]).dotProduct(new Vector([-4.496,-8.755,7.103])).toString());
    });

  });


  describe('#angle()', function () {
    it('Angle of two vectors', function () {
      assert.equal('0', new Vector([1,2,3]).angle(new Vector([1,2,3])).toString());
      assert.equal('3.0720263098372476', new Vector([3.183,-7.627]).angle(new Vector([-2.668,5.319])).toString());
      assert.equal('1.0520113648417708', new Vector([7.35,0.221,5.188]).angle(new Vector([2.751,8.259,3.985])).toString());
    });
    it('Angle of one vector with itself', function () {
      assert.equal('0', new Vector([1,2,3]).angle(new Vector([1,2,3])).toString());
    })
  });


  describe('#equal()', function () {
    it('Two vectors created with the same array should be equal', function () {
      var my_vector = new Vector([1,2,3])
      var my_vector2 = new Vector([1,2,3])

      assert.deepEqual(my_vector,my_vector2)

    });
    it('Two vectors created with different arrays should not be equal', function () {
      var my_vector = new Vector([1,2,3])
      var my_vector3 = new Vector([2,2,3])

      assert.notDeepEqual(my_vector,my_vector3)

    });
  });

});