var fs = require('fs');
var jsonexport = require('jsonexport');
const outFilename = 'employee.csv';
const util = require('../utils/employee');

function Controllers() {

    this.jsonToCSV = (employeeData, callback) => {
        
        jsonexport(employeeData, (err, csv) => {

            if(err){
                callback(err, null);
            }

            !fs.existsSync('output/') && fs.mkdirSync('output/');
            fs.writeFile('output/' + outFilename, csv, function(err) {
                if (err) {
                    callback(err, null);
                }
            });

            callback(null, true)
        });

    },

    this.saveCSV = async (file, callback) => {
        await util.saveCSVFile(file)
        .then(res => callback(null, true))
        .catch(err => callback(err, null));
    }

}

module.exports = new Controllers();