/**
 * importar modulos
 * const fs= require('express');
 */

/**
 * importar archivos del proyecto 
 * const fs= require('./file');
 */


/**
 * importar yargs 
 * agregar la configuracion para paramegtros de entrada e informacion. 
 *((String )Comando para ejeuctar la aploicacion, (String)descripcion de la app, (object) Objeto con la configuracion de  los paraemtros. )
 * .help() integrar la ayuda
 * 
 * 
 */
const argv = require('yargs')
    .command('listar',
        'Imprime en comsola la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'

            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
    .command('crear',
        'Genera  un archivo  con la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'

            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
    .help()
    .argv;

const { boolean } = require('yargs');
// const colors = require('colors');
colors = require('colors/safe');
/**
 *utilizar  la destructuracion para importar las fuciones de  un export de otro archivo 
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


// let base = 'e';

// let crearArchivo = (numero) => {
//     let data = '';
//     for (let i = 1; i <= 10; i++) {

//         data += `${numero } * ${i} = ${numero * i} \n`
//             // console.log(`${numero } * ${i} = ${numero * i}`);
//     }

//     fs.writeFile(`tablas/tabla${base}-.txt`, data, (err) => {
//         if (err) throw err;
//         console.log(`el archivo  tabla ${base}-.txt ha sido creado`);
//     });
// }

// console.log(process.argv);


/**
 * Obteber parametros manual mente desde la consola con process.argv 
 * obtener los parametros por posision. 
 */
// let argv = process.argv;
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(base);
let argv2 = process.argv;

/**
 * Obtener parametros con yargs 
 */



// console.log('limite', argv.limite);





// console.log(argv);

// console.log('limite', argv.limite);
// console.log('base', argv.base);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Comando listar');
        listarTabla(argv.base, argv.limite)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    case 'crear':
        let base = argv.base;

        console.log('Comando Crear');
        crearArchivo(base, argv.limite).then((msj) => {
            console.log('se creo al archivo', colors.green(msj));
        }).catch((err) => {
            console.log(err);
        });

        break;

    default:
        console.log('Comando no reconocido');
        break;
}