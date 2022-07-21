let vec = new Array(10);
/*
vec.forEach(x=>x=parseInt(Math.random())*1000)
console.log(vec)
*/
for (let j = 0; j < vec.length;j++){
    vec[j]=parseInt(Math.random()*1000)
}
let aCadena = vec.toString();
let deUnir = vec.join();
if (aCadena === deUnir){
    console.log(deUnir);
}


