'use strict'

let Vector = require("./vector.js")

let vector_a = new Vector([1,-2,3.3])
let vector_b = new Vector([2,3,4])

let vector_c = new Vector([2,3])

// console.dir(vector_a)

// console.dir(vector_a.inverse())

// console.log(new Vector([-0.221,7.437]).magnitude())

// let soustraction = vector_a.minus(vector_b)
// let soustraction_2 = vector_a.minus(vector_c)

// console.log(soustraction)

console.log(new Vector([-7.579,-7.88]).dotProduct(new Vector([22.737,23.64])))
console.log(new Vector([-7.579,-7.88]).isOrthogonalTo(new Vector([22.737,23.64])))
console.log(new Vector([-7.579,-7.88]).isParallelTo(new Vector([22.737,23.64])))
console.log(new Vector([-7.579,-7.88]).angle(new Vector([22.737,23.64])))

console.log("---")
console.log(new Vector([-2.029,9.97,4.172]).dotProduct(new Vector([-9.231,-6.639,-7.245])))
console.log(new Vector([-2.029,9.97,4.172]).isOrthogonalTo(new Vector([-9.231,-6.639,-7.245])))
console.log(new Vector([-2.029,9.97,4.172]).isParallelTo(new Vector([-9.231,-6.639,-7.245])))
console.log(new Vector([-2.029,9.97,4.172]).angle(new Vector([-9.231,-6.639,-7.245])))
console.log("---")

console.log(new Vector([-2.328,-7.284,-1.214]).dotProduct(new Vector([-1.821,1.072,-2.94])))
console.log(new Vector([-2.328,-7.284,-1.214]).isOrthogonalTo(new Vector([-1.821,1.072,-2.94])))
console.log(new Vector([-2.328,-7.284,-1.214]).isParallelTo(new Vector([-1.821,1.072,-2.94])))
console.log(new Vector([-2.328,-7.284,-1.214]).angle(new Vector([-1.821,1.072,-2.94])))
console.log("---")

console.log(new Vector([2.118,4.827]).dotProduct(new Vector([0,0])))
console.log(new Vector([2.118,4.827]).isOrthogonalTo(new Vector([0,0])))
console.log(new Vector([2.118,4.827]).isParallelTo(new Vector([0,0])))


console.log("END")