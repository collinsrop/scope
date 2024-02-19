"use strict";
const f4=[
      {stream:"East", population:45},
	  {stream:"West", population:56},
	  {stream:"North", population:42},
	  {stream:"South", population: 47},
]
//push
f4.push({stream:"Central", population: 33});
//map an reduce
let population = f4.map((p) => p.population);
let summations = population.reduce(add);
function add(a, b) {
  return a + b;
}
console.log(summations);
//filter
let lessClass = population.filter(less);
function less(x) {
  return x <= 45;
}
console.log(lessClass);