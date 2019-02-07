var multiparty = require('multiparty');
var fs = require('fs');

function EmployeeUtil() {

    this.saveCSVFile = async (file) => {
        return await new Promise((resolve, reject) => {
            const form = new multiparty.Form();
            form.parse(file, function(err, fields, files) {
                if (err) {
                    reject(err);
                }
                else {
                    fs.readFile(files.employee_csv[0].path, function(err, data) {
                        if (err) {
                            reject(err);
                        } else {
                            !fs.existsSync('input/') && fs.mkdirSync('input/');
                            var newpath = 'input/' + files.employee_csv[0].originalFilename;
                            fs.writeFile(newpath, data, function(err) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(true);
                                }
                            });
                        }
                    });
                }
            });
        });

    }
}

module.exports = new EmployeeUtil();