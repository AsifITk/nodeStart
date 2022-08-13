const fs = require("fs");
const BASE_DIR = __dirname;
const DOC_PATH = BASE_DIR + "/documents";
const IMG_PATH = BASE_DIR + "/images";
const VID_PATH = BASE_DIR + "/videos";
console.log(__dirname);

const DOC_EXTENSIONS = ["doc", "docx", "pdf", "txt", "xls", "xlsx"];
const IMG_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "bmp", "tiff"];
const VID_EXTENSIONS = [
  ".mp4",
  ".avi",
  ".mkv",
  ".mov",
  ".wmv",
  ".flv",
  ".mpg",
  ".mpeg",
];

if (!fs.existsSync(DOC_PATH)) {
  fs.mkdirSync(DOC_PATH);
}
if (!fs.existsSync(IMG_PATH)) {
  fs.mkdirSync(IMG_PATH);
}
if (!fs.existsSync(VID_PATH)) {
  fs.mkdirSync(VID_PATH);
}

fs.readdir(BASE_DIR, (err, data) => {
  for (const file of data) {
    let ext = file.split(".").pop();
    // console.log(ext);
    if (DOC_EXTENSIONS.includes(ext)) {
      //   console.log(
      //     "running docs ",
      //     BASE_DIR + "/" + file,
      //     DOC_PATH + "/" + file
      //   );

      fs.copyFile(BASE_DIR + "/" + file, DOC_PATH + "/" + file, (err) => {
        if (err) {
          //   console.log(err);
        }
      });
    } else if (IMG_EXTENSIONS.includes(ext)) {
      fs.copyFile(BASE_DIR + "/" + file, IMG_PATH + "/" + file, (err) => {
        if (err) {
          //   console.log(err);
        }
      });
    } else if (VID_EXTENSIONS.includes(ext)) {
      fs.copyFile(BASE_DIR + "/" + file, VID_PATH + "/" + file, (err) => {
        if (err) {
          //   console.log(err);
        }
      });
    }
  }

  if (err) throw err;
});
