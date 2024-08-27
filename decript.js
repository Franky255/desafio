





function encriptarTexto(){
    var textoIngresado = document.querySelector("#textoIntroducido").value;
    var textoEncriptado = textoIngresado.replace(/e/gi, "enter").replace (/i/gi, "imes").replace (/a/gi, "ai").replace (/o/gi, "ober").replace (/u/gi, "ufat");
    document.querySelector(".encriptador__resultado__input").value = textoEncriptado;
    document.querySelector("#textoIntroducido").value
}

function desencriptarTexto(){
    var textoIngresado = document.querySelector("#textoIntroducido").value;
    var textoEncriptado = textoIngresado.replace(/enter/gi, "e").replace (/imes/gi, "i").replace (/ai/gi, "a").replace (/ober/gi, "o").replace (/ufat/gi, "u");
    document.querySelector(".encriptador__resultado__input").value = textoEncriptado;
    document.querySelector("#textoIntroducido").value
}



