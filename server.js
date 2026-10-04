const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

//how to even think of tghis 

//write a function 

//define the function 

//loop through the stgring and tghen check if the 