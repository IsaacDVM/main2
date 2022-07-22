let num1;
let num2;
let typeOpera;
let imagenElegida = document.getElementById("win-lose");
let numIntentos = 0;
let numAciertos = 0;
let fecha = new Date;
let mes;
switch (fecha.getMonth()){
    case 0:
        mes = "Enero";
        break;
    case 1:
        mes = "Febrero";
        break;
    case 2:
        mes = "Marzo";
        break;
    case 3:
        mes = "Abril";
        break;
    case 4:
        mes = "Mayo";
        break;
    case 5:
        mes = "Junio";
        break;
    case 6:
        mes = "Julio";
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Septiembre";
        break;
    case 9:
        mes = "Octubre";
        break;
    case 10:
        mes = "Noviembre";
        break;
    case 11:
        mes = "Diciembre";
        break;
}
function createSuma(){
    imagenElegida.src = "img/clean.png";
    document.getElementById('resumen').innerHTML=`Has hecho ${numIntentos} y has acertado ${numAciertos} hoy es ${fecha.getDate()} de ${mes} del ${fecha.getFullYear()}`;
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
    document.getElementById('resumen').innerHTML=`Has hecho ${numIntentos} y has acertado ${numAciertos} hoy es ${fecha.getDate()} de ${mes} del ${fecha.getFullYear()}`;
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
    numIntentos += 1;
    if (typeOpera == '+'){
        res = num1 + num2;
    }
    else{
        res = num1 - num2;
    }
    let userRes = parseInt(document.getElementById("res").value);
    if(res === userRes){
        numAciertos += 1;
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
document.getElementById('res').addEventListener('keydown', event => {if(event.code === 'Enter') {check();}});
window.onload = createSuma();