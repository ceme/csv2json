const fs = require('fs'),
  path = require('path'),
  csv = require('csvtojson'),
  filePath = path.join(__dirname, 'data', 'customer-data.csv'),
  jsonOutPath = path.join(__dirname, 'customer-data.json')

    fs.readFile(filePath, {encoding: 'utf-8'}, async (error, data) => {

        if (error) console.log(error)

        try {

            const jsonArray = await csv().fromString(data)
            fs.writeFileSync(jsonOutPath, JSON.stringify(jsonArray))

	} catch (error) {

            console.log(error)

        }

        console.log("All done!")

    });
