// // ler arquivo EXCEL xlsx
// // REGIONAL	Texto Engenharia	ItemPN
// // CLARO SP2	Link:SIMAD01-SIFLL01/Item:RSI-4849600/Site:SIMAD01	RSI-4849600
// // escrever arquivo 

// //importar dependencias
const fs = require ("fs");
const XLSX = require("xlsx")

const workbook = fs.readFileSync('/home/zion/ReadFile CSV/content/carga_modelo.xlsx', 'utf-8');

// //convert xlsx to json
let worksheets = {}; 
for (const sheetName of workbook.SheetNames) {

   worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
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

// 

// //show as json
 console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n")


console.log("inicio");
const arquivos = fs.readdirSync('./');
console.log(arquivos);

console.log("fim");

//console.log(XLSX);
