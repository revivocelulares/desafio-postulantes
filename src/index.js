let csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const requestPromise = require('request-promise');

const url = 'https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.csv';

requestPromise(url)
.then(html => {
  fs.writeFile('data.csv', html, 'utf8', function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("The data has been saved successfully!");
		});
})
.catch(error => {
  console.log(error);
});

var fileInputName = './data.csv';
var fileOutputName = 'result.json';
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
