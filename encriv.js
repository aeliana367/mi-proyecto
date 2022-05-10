
function btnencriptar() {
    const inputTexto = document.querySelector('.input-text')
    const mensaje = document.querySelector('.input-text-area')

    const textoEncriptado = encriptar(inputTexto.value, true);
    mensaje.value = textoEncriptado;
}

const btndesencriptar = () => {
    const inputTexto = document.querySelector('.input-text')
    const mensaje = document.querySelector('.input-text-area')

    const textoEncriptado = encriptar(inputTexto.value, false);
    mensaje.value = textoEncriptado;
};

const encriptar = (StrinParaEncriptar, encriptar) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    // vamos a buscar el primer valor que queremos buscar
    const buscar = encriptar ? 0 : 1; // encriptamos: [0, 1]
    // vamos a buscar el primer valor que queremos reemplazar
    const remplazar = encriptar ? 1 : 0;
    StrinParaEncriptar = StrinParaEncriptar.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StrinParaEncriptar.includes(matrizCodigo[i][0])) {
            StrinParaEncriptar = StrinParaEncriptar.replaceAll(matrizCodigo[i][buscar],
                matrizCodigo[i][remplazar]);

        }
    }

    return StrinParaEncriptar
};
