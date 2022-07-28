let a = 100;
let b = 200;
a &&= b;
console.log(a);
a ||= b;
console.log(a);
a ??= b;
console.log(a);