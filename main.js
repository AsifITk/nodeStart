// print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// })
const os = require("os");
// console.log(os.platform());
console.log(os.homedir());
// console.log(os.cpus());
// console.log(os.release());
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.type());

const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");
let allData = "";

fs.readFile("./content.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  allData = data;
  console.log(data);
  const content = allData.toLocaleUpperCase();
  console.log(content + "printing");

  fs.writeFile("./test.txt", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
});

// !write

// const content = allData.toLocaleUpperCase();
// console.log(content + "printing");

// fs.writeFile("./test.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   //file written successfully
// });
