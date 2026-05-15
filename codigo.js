/*var nombre = "Carlos";
var n1 = parseInt(prompt("indique el numero 1"));
var n2 = parseInt(prompt("indique el numero 2"));
var op = prompt("indique que operacion desea: ");
var resultado;

if (op == "suma") {
    resultado = n1 + n2;
}

if (op == "resta") {
    resultado = n1 - n2;
}

if (op == "mul") {
    resultado = n1 * n2;
}

alert("el resultado de la operacion es: " + resultado);
*/

function calcular() {
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var result;
    var op = document.getElementById("operar").value;

    if (op == "1") {
        result = n1 + n2;
    }

    if (op == "2") {
        result = n1 - n2;
    }

    if (op == "3") {
        result = n1 * n2;
    }


    document.getElementById("resultado2").textContent = " El resultado es " + result;


}


function validar() {

    var usu = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usu == "eduardo" && clave == "1234") {
        window.location.href = "sistema.html";
    } else {
        alert("Are you crazy??");
    }


}

//funcion limpiar
function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

//funcion para afiliar

function afiliar() {
    var ema = document.getElementById("email").value;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";

    if (ema == "eldelima@gmail.com") {
        document.getElementById("resultado3").textContent = "USUARIO YA EXISTE";
    } else {
        document.getElementById("resultado3").textContent = "USUARIO AFILIADO";
    }







}


function cotizar() {

    var mar = document.getElementById("marca").value;
    var ti = document.getElementById("tipo").value;

    if (mar == "1" && ti == "1") {
        document.getElementById("resultado4").textContent = "15.000 dolares";
    }

    if (mar == "1" && ti == "2") {
        document.getElementById("resultado4").textContent = "30.000 dolares";
    }

    if (mar == "1" && ti == "3") {
        document.getElementById("resultado4").textContent = "25.000 dolares";
    }
    if (mar == "1" && ti == "4") {
        document.getElementById("resultado4").textContent = "18.000 dolares";
    }

    if (mar == "2" && ti == "1") {
        document.getElementById("resultado4").textContent = "80.000 dolares";
    }

    if (mar == "2" && ti == "2") {
        document.getElementById("resultado4").textContent = "130.000 dolares";
    }

    if (mar == "2" && ti == "3") {
        document.getElementById("resultado4").textContent = "125.000 dolares";
    }
    if (mar == "2" && ti == "4") {
        document.getElementById("resultado4").textContent = "118.000 dolares";
    }




}






