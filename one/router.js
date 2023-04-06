const http = require("http");

const serve = http.createServer((req, res) => {
  const pathUrl = req.url;
  if (pathUrl === "/") {
    res.end("Home page");
  } else if (pathUrl === "/about") {
    res.end("about page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "header-me": "ami khaichi",
    });
    res.end("<h3>error page</h3>");
  }
});

serve.listen(3000, () => {
  console.log("serve running");
});
