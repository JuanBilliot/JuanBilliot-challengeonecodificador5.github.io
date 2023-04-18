function encriptar (event){
    event.preventDefault();

    const texto = document.getElementById("texto").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    let encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    resultado.innerHTML = encriptado;
}

function desencriptar(event) {
    event.preventDefault();
    
    const texto = document.getElementById("texto").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    let desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    resultado.innerHTML= desencriptado;
}

function copiar(){
    const resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
