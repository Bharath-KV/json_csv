# json_csv
Frameworks/tools used: Node.js + Hapi.js + multiparty + json2csv

It's a simple project which accepts array of objects and saves it into a csv file and stores the same into file system.
Also it accepts a csv file and saves it into the file system.

API usage:
baseurl = 'http:localhost:3000' // config your own host details
1) route=> 'baseurl/' --> To check if the server is running or not.
2) route=> 'baseurl/jsonToCSV' --> Accepts array of objects and saves it into a csv file and stores the same into file system.
3) route=> 'baseurl/saveCSV' --> Accepts a csv file and saves it into the file system.
