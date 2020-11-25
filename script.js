const fs = require("fs") //import fs from node inbuilt methods
const strip = require("strip-comments") // import strip from strip-comments module
const prettier = require("prettier")

try {
    let filepath = 'filewithcomments.js'; // declaring file path from which comments should be stripped

    let file = fs.openSync(filepath, "r+") // Using fs openSync method to open the file

    let data = fs.readFileSync(file, "utf8")// Using fs readFileSync method to read the file

    let strings = strip(data)// Using strip from strip-comments module and passing data

    let pretty = prettier.format(strings, { semi: false, parser: "babel" }) //prettier format method to format our stripped comments.

    fs.writeFileSync(filepath, pretty)// Writing the stripped data back to the filepath with pretty option

    console.log('Comments from '+filepath+' has been Removed')

} catch (error) {
    console.log(error)
}
