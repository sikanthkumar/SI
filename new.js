// save this file as encodeBase64.js
import fs from "fs";
import path from "path";

// folder where your images are stored
const folder = "./public"; // change this if needed

// list of files you want to encode
const files = [
  "backround.png",
  "Card.png",
  "Documents.png",
  "mail.png",
  "password.png",
  "user.png"
];

const output = {};

files.forEach(file => {
  const filePath = path.join(folder, file);
  const data = fs.readFileSync(filePath);
  const base64 = `data:public/${path.extname(file).slice(1)};base64,${data.toString("base64")}`;

  // remove extension from filename for cleaner keys
  const key = path.basename(file, path.extname(file));
  output[key] = base64;
});

// write result to images.json
fs.writeFileSync("public.json", JSON.stringify(output, null, 2));

console.log("✅ Base64 strings saved to public.json");
