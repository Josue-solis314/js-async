function suma(num1,num2){
  return num1 + num2;
}
function cal(num1,num2,cb){
  return cb(num1,num2);
}
console.log(cal(2,2,suma));

setTimeout(() => {
  console.log("Hola Javascript");
}, 2000);

function gretting(name) {
  console.log(`Hola ${name} !!!`);
}
setTimeout(gretting,2000,"Josue Solis");