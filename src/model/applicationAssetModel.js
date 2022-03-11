XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Application.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
data.forEach(function(_, index, dataArray) {
    dataArray[index]["Asset Type"] = "Application";
});

let applicationAssetModel = {
    
    findById: (id) => {
        var asset = data.filter(item => parseInt(item["Application ID"]) == id)[0];
        return asset;
    },
    findAll: () => {
        return data;
    }
}

module.exports = applicationAssetModel;