// Install 'nodemon' globally using: npm install -g nodemon
// Nodemon is a utility that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, "public")));
// const shirhaMiddleWare = (req, res, next) => {
//   console.log(req);
//   next();
//   next();
// };

app.use(express.static(path.join(__dirname, "public")));
// app.use(shirhaMiddleWare);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
    // res.send("about page");
    // res.sendFile(path.join(__dirname, "about.html"));
    res.json({'name': 'Shirha', 'age': 22});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
