const fs = require("fs");
const readStream = fs.createReadStream("./content.txt", "utf8");

const writeStream = fs.createWriteStream("./test1.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
  writeStream.write("new data arrived \n\n\n");
  writeStream.write(chunk);
  writeStream.write("\n\nnew data ended");
});
