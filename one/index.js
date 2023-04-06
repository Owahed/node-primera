const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("this is home");
  } else if (pathName === "/about") {
    res.end("this is about");
  } else {
    res.end("no");
  }
});
server.listen(4000, () => {
  console.log("serve is running");
});
