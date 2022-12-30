const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 1) => {


  let salida = '';

  for (let i = 0; i <= hasta; i++) {
    //console.log (`${base} x ${i} = ${base*i}\n`);
    salida += `${base} x ${i} = ${base*i}\n`;
    
  }
  if (listar) {
    console.log('====================='.yellow);
    console.log(`Tabla del `, base);
    console.log('====================='.yellow);
    console.log(salida.blue);  
  }

   fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
  return `Tabla ${base}.txt creada`;

}

module.exports = {
  crearArchivo
}