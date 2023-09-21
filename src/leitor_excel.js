// // ler arquivo EXCEL xlsx
// // REGIONAL	Texto Engenharia	ItemPN
// // CLARO SP2	Link:SIMAD01-SIFLL01/Item:RSI-4849600/Site:SIMAD01	RSI-4849600
// // escrever arquivo 

// //importar dependencias
var fs = require ("fs");
var XLSX = require("xlsx")

const workbook = XLSX.readfile("carga_modelo.xlsx")

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

// readFileSync('/home/zion/ReadFile CSV/server/carga_modelo.xlsx', 'utf-8');

// //show as json
 console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n")


console.log("inicio");
const arquivos = fs.readdirSync('./');
console.log(arquivos);

console.log("fim");

//console.log(XLSX);
