let num1;
let num2;
let typeOpera;
let imagenElegida = document.getElementById("win-lose");

function createSuma(){
    imagenElegida.src = "img/clean.png";
    document.getElementById("res").value = "";
    num1 = Math.floor(Math.random() * 9 + 1);
    num2 =  Math.floor(Math.random() * 9 + 1);
    typeOpera = '+';
    let boxNum1 = document.getElementById("operador1");
    let boxNum2 = document.getElementById("operador2");
    let operaBox = document.getElementById("operacion");
    boxNum1.innerHTML = `${num1}`;
    boxNum2.innerHTML = `${num2}`;
    operaBox.innerHTML = `${typeOpera}`;
}
function createResta(){
    imagenElegida.src = "img/clean.png";
    document.getElementById("res").value = "";
    num1 = Math.floor(Math.random() * 16 + 2);
    let cosita = Math.floor(Math.random() * 9 + 1);
    num2 =  num1 - cosita;
    if (num2 < 0){
        num2 = (-1)*num2   
    }
    if (num2 > num1){
        let num3 = num1;
        num1 = num2;
        num2 = num3;
    }
    if (num2 > 10){
        let minus = num2 - 10;
        num1 -= minus;
        num2 -= minus;
    }    
    typeOpera = '-';
    let boxNum1 = document.getElementById("operador1");
    let boxNum2 = document.getElementById("operador2");
    let operaBox = document.getElementById("operacion");
    boxNum1.innerHTML = `${num1}`;
    boxNum2.innerHTML = `${num2}`;
    operaBox.innerHTML = `${typeOpera}`;
}
function check(){
    let res;
    if (typeOpera == '+'){
        res = num1 + num2;
    }
    else{
        res = num1 - num2;
    }
    let userRes = parseInt(document.getElementById("res").value);
    if(res === userRes){
        imagenElegida.src = "img/leonypokes.png";
        if (typeOpera === '-'){
            setTimeout(createSuma,1000);
        }
        else{
            setTimeout(createResta,1000);
        }
        
    }
    else{
        imagenElegida.src = "img/epicfail.png";
        alert("¡¡¡has fallado!!!");
    }
}
window.onload = createSuma();