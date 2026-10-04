const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

//create an object here for the names we will be creating and working through





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

    //This is where all of the new pages and stuff goes. after the const server
  }

  else if(page == '/css/style.css'){
    fs.readFile('css/style.css', function (err, data) { 
        res.write(data);
        res.end(); 
  }); 
}else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'}); 
            res.write(data); 
            res.end(); 
    });
}

});


//this is the port number that the server is listening to 
server.listen(8000);

//how to even think of tghis 

//write a function 

//define the function 

//loop through the stgring and tghen check if the 