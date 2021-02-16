const fs = require('fs');
const colors = require('colors');

let crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido "${base}" no es un numero`);
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {

        data += `${base } * ${i} = ${base * i} \n`
            // console.log(`${base } * ${i} = ${base * i}`);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        // console.log(`el archivo  tabla ${base}-.txt ha sido creado`);
    });
    return `tabla-${base}.txt`;
}

let listarTabla = async(base, limite) => {

    console.log('================='.green);
    console.log(`=== tabla de ${base} al ${limite}===`.green);
    console.log('================='.green);

    if (!Number(base)) {
        throw new Error(`El valor introducido "${base}" no es un numero`);
    }
    if (!Number(limite)) {
        throw new Error(`El valor introducido "${base}" no es un numero`);
    }

    let salida = '';
    for (let i = 1; i <= limite; i++) {
        salida += `${base } * ${i} = ${base * i} \n`;
        // console.log(`${base } * ${i} = ${base * i}`);
    }

    return salida


}

module.exports = {
    crearArchivo,
    listarTabla
}