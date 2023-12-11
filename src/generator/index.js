function* gen(){
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

function* iterate(array){
  for(let value of array){
    yield value
  }
}
const names = ['Juan','Carlos','Eduardo','Carla','Mariana'];
const it  = iterate(names);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);