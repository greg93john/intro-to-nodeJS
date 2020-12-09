// jshint esversion:6

var superheroes = require("superheroes");
var supervillains = require("supervillains")

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log(mySuperheroName);
console.log(mySupervillainName);

function GetSuperheroName() {
  return superheroes.random();
}

function GetSupervilliainName() {
  return supervillains.random();
}
