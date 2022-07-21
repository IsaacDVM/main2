function populateRandom(){
    return parseInt(Math.random()*1000);
}
function randomArray(mylength){
    let vec = new Array(mylength);
    for (let i = 0; i<mylength;i++){
        vec[i]=populateRandom();
    }
    return vec;
}
console.log(randomArray(25));
