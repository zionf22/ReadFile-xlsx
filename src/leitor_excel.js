// // ler arquivo EXCEL xlsx
// // REGIONAL	Texto Engenharia	ItemPN
// // CLARO SP2	Link:SIMAD01-SIFLL01/Item:RSI-4849600/Site:SIMAD01	RSI-4849600
// // escrever arquivo 

// //importar dependencias
const fs = require ("fs");
const XLSX = require("xlsx");

console.log("inicio");

   const workbook =  XLSX.readFile('/home/zion/ReadFile CSV/content/carga_modelo.xlsx');

   //convert xlsx to json
return Object.keys(workbook.Sheets).map((name) => ({
   name,
   data: XLSX.utils.sheet_to_json(workbook.Sheets[name], {header: 1}),
}))

   for (let index = 2; index < 7; index++) {
      const regional = worksheet['A${index}'].v;
      const link = worksheet ['B${index}'].v;

      console.log({
         regional: regional, link: link
      })
   }

// /*
// [
//   {
//     regional: 'CLARO SP2',
//       textoEngenharia: 'Link:SIMAD01-SIFLL01/Item:RSI-4849600/Site:SIMAD01'
//     itemPN: "RSI-4849600"
//     //...											
//   }
// ]
// */

console.log("fim");

//console.log(XLSX);
