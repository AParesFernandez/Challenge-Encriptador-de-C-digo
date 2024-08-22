// Función para ocultar el párrafo de instrucciones
function ocultarInstrucciones() {
    let instrucciones = document.getElementById("instrucciones");
    instrucciones.style.display = "none";
}

// Función para encriptar el texto
function encriptar(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

// Función para mostrar el resultado
function mostrarResultado(accion) {
    let inputTexto = document.getElementById("inputTexto").value;
    let outputTexto = "";
    let mensajeEstado = document.getElementById("mensajeEstado");
    
    ocultarInstrucciones(); // Oculta las instrucciones cuando se realiza una acción

    if (accion === "encriptar") {
        outputTexto = encriptar(inputTexto);
        mensajeEstado.textContent = "Mensaje encriptado correctamente";
    } else if (accion === "desencriptar") {
        outputTexto = desencriptar(inputTexto);
        mensajeEstado.textContent = "Mensaje desencriptado correctamente";
    }

    document.getElementById("outputTexto").value = outputTexto;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.getElementById("outputTexto");
    texto.select();
    document.execCommand("copy");

    let mensajeEstado = document.getElementById("mensajeEstado");
    mensajeEstado.textContent = "Mensaje copiado correctamente";
}

// Asignar eventos a los botones
document.getElementById("btnEncriptar").addEventListener("click", function() {
    mostrarResultado("encriptar");
});

document.getElementById("btnDesencriptar").addEventListener("click", function() {
    mostrarResultado("desencriptar");
});

document.getElementById("btnCopiar").addEventListener("click", function() {
    copiarTexto();
});
