var XlsxTemplate = require('../lib/index')
var fs = require('fs')

var templatePath = 'template.xlsx'
var sheetsData = {
  users: [{
    id: 1,
    name: 'first'
  }, {
    id: 2,
    name: 'second'
  }]
}
fs.readFile(templatePath, function (err, templateData) {
  if (err) return next(err)
  var template = new XlsxTemplate(templateData)

  template.substitute(1, sheetsData)

  var outputFileStream = fs.createWriteStream('template-filled.xlsx')

  template.pipe(outputFileStream)
})
