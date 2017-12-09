const fs = require('fs'),
  path = require('path'),
  csv = require('csvtojson'),
  filePath = path.join(__dirname, 'data', 'customer-data.csv')

fs.readFile(filePath, {encoding: 'utf-8'}, function(error,data){
    if (error) console.log(error);

    csv({
      colParser:{
        "id":"string",
        "first_name":"string",
        "last_name":"string",
        "email":"string",
        "gender":"string",
        "ip_address":"string",
        "ssn":"string",
        "credit_card":"string",
        "bitcoin":"string",
        "street_address":"string"
      },
      checkType:true
    })
    .fromString(data)
    .on('json', (jsonObj) => {
      console.log(jsonObj);
    })
    .on('done', ()=> {
      console.log("All done!")
    })
    .on('error', (error)=> {
      console.log(`doh! there was an error: ${error}`)
    })
});
