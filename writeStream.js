const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");
//process.stdout.write("hello");
//process.stdout.write(" world\n");

/* readStream.on("data", data => {
    writeStream.write(data);
}); */

//process.stdin.pipe(writeStream)

readStream.pipe(writeStream)