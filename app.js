// let campoDeTexto = document.querySelector('#encriptador_entrada_texto');
// let botonEncriptar = do
let llavesEncriptado = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]);

let llavesDesencriptado = new Map();

llavesEncriptado.forEach((valor, llave) => {
    llavesDesencriptado.set(valor, llave);
});

console.log(llavesEncriptado);
console.log(llavesDesencriptado);

function obtenerTexto(){
    let texto = document.getElementById('encriptador_entrada_texto').value.toLowerCase();
    // Normalize: 'NFD' es una forma de normalización que descompone los caracteres acentuados en sus componentes base y diacríticos (acentos).
    // Replace: "\u0300-\u036f" Elimina cualquier acento, "\d" Elimina los numeros
    return texto.normalize('NFD').replace(/[\u0300-\u036f\d]+/g, '');
}

function encriptar() {
    let textoEncriptado = '';
    let textoDesencriptado = obtenerTexto();

    for (var letra of textoDesencriptado){
        if (llavesEncriptado.has(letra)) {
            textoEncriptado += llavesEncriptado.get(letra);
        }
        else{
            textoEncriptado += letra;
        };
    };

    modificarDocumento(textoEncriptado);
}

function desencriptar(){
    let textoEncriptado = obtenerTexto();
    let textoDesencriptado = textoEncriptado;
    for (let llave of llavesDesencriptado.keys()){
        valor = llavesDesencriptado.get(llave);
        textoDesencriptado = textoDesencriptado.replaceAll(llave,valor);
    };
    modificarDocumento(textoDesencriptado);
}

function copiar(){
    textoCopiado = document.getElementById('encriptador_salida_texto').textContent
    navigator.clipboard.writeText(textoCopiado);
    document.getElementById('encriptador_salida_boton').innerHTML = 'Copiado';
}

function modificarDocumento(texto){
    document.querySelector('h2').innerHTML = '' ;
    document.getElementById('encriptador_salida_imagen').setAttribute("hidden","true");
    document.getElementById('encriptador_salida_boton').removeAttribute('hidden');
    salida = document.getElementById('encriptador_salida_texto');
    salida.innerHTML = texto;
    console.log(texto);
}

