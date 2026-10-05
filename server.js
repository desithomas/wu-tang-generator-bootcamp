const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

//create an object here for the names we will be creating and working through


const generatedNamesForUser = {
    a: { 
        //these are going to be the names that are going to generate for the user
        first: [
            'Crimson', 'Alois', 'Butterfly', 'Lylla', 'Sunset', 'Runaway', 'Hot', 'Mojo', 'Choose Your', 'Fun Like', 'Elora', 'Bee', 'Kimdael', 'Leola', 'Sneezle', 'Jellybug', 'Team Friendship', 'Dressed to Impress', 'Nigel', 'Coastal', 'Fern', 'Superstar', 'Party', 'Feather', 'Terho', 'So this is Love', 'Pika', 'Aphelion', 'Itty Bitty', 'Extra Extra', 'Sunrise', 'Bright Paw', 'Chairman', 'Tuesday'
        ], 
        last: [
            'Orchids', 'Flitmouse', 'Tsunami', 'Violets', 'Designer', 'Pink', 'Jojo', 'Champion', 'Friday Night', 'Butterfly', 'Puppycat', 'Miyana', 'Finnegrin', 'Hat', 'Light Saber', 'Fairy-tale', 'Soft Paws', 'Thornberry', 'Showstopper', 'Chartreuse', 'Alien', 'Lighthouse', 'Rainbow', 'Throne', 'Nightingale', 'Sean Pawl', 'Rozen', 'Maiden', "Pizazz", 'Rootsnoot', 'Multiverse', 'Papaya', 'Ekko'
        ]
    },

    b: {
        first: [
            'Adagium', 'Jinkies', 'Yellowstone', 'Tekhenu', 'Finvarra'
        ], 
        last: [
            'Nascent', 'Zoinks', 'Codename', 'Sweet', 'Verdandi'
        ]
    }, 

    c: {
        first: [
            'Azari', 'Shuri', 'Viren', 'Zym', 'Sol Regem'
        ], 
        last: [
            'Olio', 'Sparklepuff', 'Khessa', 'Zubeia', 'Mariposa'
        ]
    }

}


//the parameter list is the array that we are moving through
    // const iteratingThroughList = (list) => {
    //     return list[Math.floor(Math.random() * list.length)] //this will randomize a number
    // }

    // //we are going to count how many times a, b & c show up and then return the letter with the highest count;m the highest count wins. 

    //     //this only ever gives us one letter
    // mostPickedGeneratedName = (selectedName) => {
    //     const counts = {
    //         a: 0, 
    //         b: 0, 
    //         c: 0, 
    //     }; 
    //     //take in selectedName and use a ForEach on them

    //     //count how many times each a, b, or c, comes in. Whatever comes in is going to be selectName and whatever comes in is a, b or c. 
    //     selectedName.forEach(function(selectName){
    //         if(counts[selectName] !== undefined){
    //             counts[selectName] +=1 
    //         }
    //     }); 
    //     let chosenAlias = 'a'; 
    //     if(counts.b > counts[chosenAlias]) chosenAlias = 'b';
    //     if(counts.c > counts[chosenAlias]) chosenAlias = 'c'; 
    //     return chosenAlias
         
        
    // }
     





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

  }else if(page == '/api'){
    //logic goes directly after the else if

    // const selectedName = [params.question1, params.question2, params.question3, params.question4, params.question5] 

    //this is going to trigger the function that selects the most picked 
    // const letter = mostPickedGeneratedName(selectedName)
    // const group = generatedNamesForUser[letter] 
    // const finalWutangName = iteratingThroughList(group.first) + ' ' + iteratingThroughList(group.last)

    
    // // fs.readFile('index.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'application/json'});
    //   res.end(JSON.stringify({name: finalWutangName}));


    let userInputWord = params.word || 'default'

    let lengthOfUsersInput = userInputWord.length
    let groupLetter = 'a'; 

    //go through if they are getting a, b or c
    if (lengthOfUsersInput % 3 === 0) {groupLetter = 'a'}
if (lengthOfUsersInput % 3 === 1) {groupLetter = 'b'}
    if (lengthOfUsersInput % 3 === 2) {groupLetter = 'c'}

    let selectedGroup = generatedNamesForUser[groupLetter]

    let firstIndex = lengthOfUsersInput % selectedGroup.first.length
    let lastIndex = (lengthOfUsersInput + 2) % selectedGroup.last.length
    let finalWutangName = selectedGroup.first[firstIndex] + ' ' + selectedGroup.last[lastIndex]

    res.writeHead(200, {'Content-Type':  'application/json'})
    res.end(JSON.stringify({name: finalWutangName}))
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