const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');
const colors = require('colors')



console.clear();

//console.log(argv);

  crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log('Nombre de archivo creado'.rainbow))
   .catch( msj => console.log(msj) );



