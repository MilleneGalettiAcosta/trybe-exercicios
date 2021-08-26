const a = 10;
const b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

const c = 20;
const d = 45;

if(c>d) {
  console.log("O valor c é maior");
} else {
  console.log("O valor d é maior");
}

if(a>b && a>c) {
    console.log("A é maior")
} else if(b>a && b>c) {
    console.log("B é maior")
} else {
    console.log("C é o maior")
}

const valor = 60;

if(valor=== 60) {
    console.log("positive");
} else if(valor === 0) {
    console.log("zero");
} else {
    console.log("negative")
}