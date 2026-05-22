var totalCompra = 0;

function validar(){
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if(usuario == "milig" && clave == "milig"){
        window.location.href = "sistema.html";
    }else{
        alert("Usuario inexistente o clave incorrectos");
    }
}

function limpiar(){
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

function registrar(){
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var ema = document.getElementById("email").value;

    if(nom == "" || ape == "" || edad == "" || ema == ""){ 
        
        document.getElementById("resultado3").textContent = "Complete todos los datos";
    }else{
        document.getElementById("resultado3").textContent = "Cliente registrado: " + nom + " " + ape;

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("email").value = "";
    }
}

function cotizar(){
    var pre = document.getElementById("prenda").value;
    var tal = document.getElementById("talle").value;
    var col = document.getElementById("color").value;
    var can = parseInt(document.getElementById("cantidad").value);

    var precio = 0;
    var nombrePrenda = "";

    if(pre == "1"){
        precio = 12000;
        nombrePrenda = "Remera";
    }

    if(pre == "2"){
        precio = 35000;
        nombrePrenda = "Jean";
    }

    if(pre == "3"){
        precio = 60000;
        nombrePrenda = "Campera";
    }

    if(pre == "4"){
        precio = 42000;
        nombrePrenda = "Vestido";
    }

    if(pre == "5"){
        precio = 75000;
        nombrePrenda = "Zapatillas";
    }

    totalCompra = precio * can;

    document.getElementById("resultado4").textContent = 
    nombrePrenda + " talle " + tal + " color " + col + " x " + can + " = $" + totalCompra;
}

function aplicarDescuento(){
    var pago = document.getElementById("pago").value;
    var cup = document.getElementById("cupon").value;

    var descuento = 0;
    var recargo = 0;
    var totalFinal = totalCompra;

    if(totalCompra == 0){
        document.getElementById("resultado5").textContent = "Primero debe cotizar una prenda";
        return;
    }

    if(cup == "MODA10"){
        descuento = totalCompra * 0.10;
    }

    if(pago == "2"){
        recargo = totalCompra * 0.05;
    }

    if(pago == "3"){
        descuento = descuento + totalCompra * 0.05;
    }

    totalFinal = totalCompra - descuento + recargo;

    document.getElementById("resultado5").textContent = 
    "Total final de la compra: $" + totalFinal;
}

function volver(){
    window.location.href = "index.html";
}
