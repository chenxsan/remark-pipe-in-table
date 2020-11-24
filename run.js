const unified = require("unified");
const markdown = require("remark-parse");
const html = require("remark-html");
const fs = require("fs");
const path = require("path");

unified()
  .use(markdown)
  .use(html)
  .process(
    fs.readFileSync(path.join(__dirname, "test.md")),
    function (err, file) {
      if (err) throw err;
      console.log(String(file));
    }
  );
