// Variables que almacenan el valor de los dos elementos y el resultado del mismo
var operando1 = document.getElementById("operando1");
var operando2 = document.getElementById("operando2");
var resultado = document.getElementById("resultado");


// Almacena la accion de el tipo de boton que se elija
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var divide = document.getElementById("divide");
var multiplica = document.getElementById("multiplica");
var igual = document.getElementById("igual");
var limpia = document.getElementById("limpia");

// Permiten realizar las cuatros operaciones basicas en una calculadora
function sumar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 + operando2;
    document.getElementById("resultado").innerHTML = resultado;
}

function restar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 - operando2;
    document.getElementById("resultado").innerHTML = resultado;
}
  
function dividir(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 / operando2;
    document.getElementById("resultado").innerHTML = resultado;

    if (operando2 == 0) {
        resultado.innerHTML = "Error: división entre cero";
      } else {
        resultado.innerHTML = operando1 / operando2;
      }
}

function multiplicar(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 * operando2;
    document.getElementById("resultado").innerHTML = resultado;
}
// El boton igual
function calcular(){
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);

    var operacion = document.querySelector('input[name="operacion"]:checked').value;
    var resultado;

    if(operacion === "suma"){
        resultado = operando1 + operando2;
    }else if(operacion === "resta"){
        resultado = operando1 - operando2;
    }else if(operacion === "multiplica"){
        resultado = operando1 * operando2;
    }else if(operacion === "divide"){
        resultado = operando1 / operando2;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
