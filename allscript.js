const fs = require("fs")
const strip = require("strip-comments")
const prettier = require("prettier")
var glob = require("glob")

try {
    //glob to search files ignoring node_modules directory 
  glob("**/*.js", { ignore: "**/node_modules/**" }, function (error, files) {
      //forEach loop to iterate array of files
    files.forEach((element) => {
        //Opening each file inside loop using fs openSync method
      var file = fs.openSync(element, "r+")
      //Reading each file inside loop using fs readFileSync method
      var data = fs.readFileSync(file, "utf8")

      //Stripping comments from each file using strip-comments module
      const strings = strip(data)
      //Formating our files using prettier
      const pretty = prettier.format(strings, { semi: false, parser: "babel" })
      //Writing stripped data back to their original files
      fs.writeFileSync(element, pretty)

      
      console.log('Comments has been Removed from ' + element)
    })
  })
} catch (error) {
  console.log(error)
}
