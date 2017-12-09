const fs = require('fs'),
  path = require('path'),
  csv = require('csvtojson'),
  filePath = path.join(__dirname, 'data', 'customer-data.csv'),
  jsonOutPath = path.join(__dirname, 'customer-data.json')

fs.readFile(filePath, {encoding: 'utf-8'}, function(error,data){
    if (error) console.log(error);

    let buffer = []

    csv().fromString(data).on('json', (jsonObj) => {
      buffer.push(jsonObj)
    }).on('done', ()=> {
      fs.writeFileSync(jsonOutPath, JSON.stringify(buffer))
      console.log("All done!")
    }).on('error', (error)=> {
      console.log(`doh! there was an error: ${error}`)
    })

});
