'use strict'

var _ = require("underscore")

  class Vector {
    constructor(coordinates) {
      if (!Array.isArray(coordinates)) throw new Error("Error in creating Vector:coordinates are not an array")
      if (coordinates.length===0) throw new Error("Error in creating Vector: coordinates array is empty");

      this.coordinates = coordinates
      this.dimension = coordinates.length
    }
    times_scalar(scalar)
    {
      if (!isNaN(scalar))

      { var new_coordinates = this.coordinates.map(
        (current_value) =>
          {
            return (scalar*current_value)
          }
        )
      return(new Vector(new_coordinates))
      }
      else return NaN
    }

    inverse()
    {
      return this.times_scalar(-1)
    }
    plus(v)
    {
      if (v.dimension != this.dimension) throw new Error("Error in adding two vector: their dimensions are different");
      else { var zipped = _.zip(this.coordinates,v.coordinates) 

      var new_coordinates = zipped.map( 
        (current_value) =>
          {
            return current_value[0]+current_value[1]
          }
        )

      return new Vector(new_coordinates) }
    }
    minus(v)
    {
      return this.plus(v.inverse())
    }
    magnitude()
    {
      var magnitude = Math.sqrt(this.coordinates.map(
        (current_value) => 
          {
            return Math.pow(current_value, 2);
          }

        ).reduce( (previousValue, currentValue) => { return previousValue + currentValue }))

      return magnitude
        
    }
    normalized()
    {
      var magnitude = this.magnitude()
      if (magnitude===0) throw new Error("ZeroVectorNormalizationError")
        else return this.times_scalar(1.0/magnitude)
    }
    isOrthogonalTo(v)
    {
      return (this.dotProduct(v)===0)
    }
    isParallelTo(v)
    {
      var this_magnitude = this.magnitude()
      var v_magnitude = v.magnitude()
      if(this.times_scalar(v_magnitude/this_magnitude).equal(v)) return true; else return false
    }

    dotProduct(v)
    {
      if (v.dimension != this.dimension) throw new Error("Error in attempting to dot product two vector of different dimensions");
      else { var zipped = _.zip(this.coordinates,v.coordinates) 

      var product = zipped.map( 
        (current_value) =>
          {
            return current_value[0]*current_value[1]
          }
        )
      var dotProduct = product.reduce( (previousValue, currentValue) => { return previousValue + currentValue })

      return dotProduct }

    }

    angle(v)
    {
      var dotProduct = this.dotProduct(v)
      var angle = Math.acos(dotProduct / (this.magnitude() * v.magnitude()))
      return angle
    }

    toString()
    {
      return "["+this.coordinates.toString()+"]"
    }

    equal(second)
    {

      return _.isEqual(this,second)

    }
  }

module.exports = Vector
