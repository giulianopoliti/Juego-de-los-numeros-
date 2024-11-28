export const numeroDeIntentos = 10;

export function obtenerDatos () {
    const array: number[] = [];
    for (let i = 0; i < 4; i++){
        array.push(generarNumeroAleatorio(1, 9));
    }
    console.log(array);
    return array;
}

function generarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function obtenerResultado (resultado: number[], array: number[]) {
    let numerosOrdenCorrecto: number = 0;
    let numerosOrdenIncorrecto: number = 0;

    for (let i = 0; i < resultado.length; i++){
    
        if (array.includes(resultado[i])){
            if (array[i] === resultado[i]){
                numerosOrdenCorrecto++;
            } else {
                numerosOrdenIncorrecto++;
            }
        }
    }
    return {numerosOrdenCorrecto, numerosOrdenIncorrecto};
}

export function retornarResultados (resultado: number[], array: number[]): string {
    const { numerosOrdenCorrecto, numerosOrdenIncorrecto } = obtenerResultado(resultado, array);
    if (numerosOrdenCorrecto === 4) {
        return 'WIN'
    }
    return `Correctos en orden: ${numerosOrdenCorrecto}, Correctos fuera de orden: ${numerosOrdenIncorrecto}`;
}