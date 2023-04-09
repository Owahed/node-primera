const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathUrl = req.url;

  if (pathUrl === "/") {
    res.end("This is Home");
  } else if (pathUrl === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("server is running");
});
