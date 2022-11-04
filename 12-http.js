const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our short hystory");
  }
  res.end(
    `<h1>Oops!</h1>
   <p>We cant seem to find the page you are looking for</p>
   <a href = "/">back home</a>
   `
  );
  // res.write("Welcome to our home page");
  // res.end();
});

server.listen(5000);

// write in browser localhost:5000
