const fs = require("node:fs")
const path = require("node:path")

/* fs.mkdir(path.join(__dirname, "templates"), err => {
    if (err) throw new Error()
    
    console.log("Folder was created successfully");
}) */

/* fs.writeFile(path.join(__dirname, "templates", "august.txt"), "Create course NodeJS", (err) => {
    if (err) throw new Error()

    console.log("File was created successfully");
}) */

/* fs.appendFile(path.join(__dirname, "templates", "august.txt"), " and microservice project", err => {
    if (err) throw new Error()

    console.log("Text was updated successfully");
}) */

fs.readFile(path.join(__dirname, "templates", "august.txt"), (err, data) => {
    if (err) throw new Error()

    console.log(Buffer.from(data).toString());
})