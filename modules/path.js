const path = require('node:path')
/* console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename)); */

// console.log(path.parse(__filename).name);

// console.log(path.join(__dirname, "templates", "index.html"));

console.log(path.resolve(__dirname, "templates", "/index.html"));    