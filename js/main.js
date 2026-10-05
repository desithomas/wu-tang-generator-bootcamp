// document.querySelector('button').addEventListener('click', createWutangName)

const createWutangName = () => {
//     const questionsForUser = [
//         'question1', 'question2', 'question3', 'question4', 'question5'
//     ]

//     const answersForUsers = questionsForUser.map(function(questionForUser){
//         //callback function in a map
//          const chosen = document.querySelector('input[name = "' + questionForUser + '"]:checked')
//          return chosen ? chosen.value: ' '
//     })

//     if(answersForUsers.includes(' ')){
//         document.querySelector('#message').innerText = "Potential WuTang quote goes here"; 
//             return
//     }

//         const query = questionsForUser.map(function(questionForUser, index){
//             return questionForUser + '=' + answersForUsers[index]
//         })
//         .join('&')

//         .fetch('/api?' + query)
//         .then(function(res){
//             return res.json()
//         })

//         .then(function(data){
        
//             document.querySelector('#message').innerText = 'Your Name is' + data.name;
//         })
// }

// //still need mr listener
// document.querySelector('#userButton').addEventListener('click', createWutangName)


//this gets what the user typed into the input boxes; the value 
let question1 = document.querySelector("#question1").value
let question2 = document.querySelector("#question2").value
let question3 = document.querySelector("#question3").value
let question4 = document.querySelector("#question4").value
let question5 = document.querySelector("#question5").value

//add them all together
let allUserInputs = question1 + question2 + question3 + question4 + question5

//remove the spaces from their answers; not using regex for this 
let stringWithNoSpaces = allUserInputs.replaceAll(' ', '') 

//check if the user did not answer a question and instead left it blank
if(stringWithNoSpaces === ''){
    document.querySelector('#message').innerText = 'If you want a WuTang name, you cannot leave anything blank.'
    return
}

///remember to send it to the server
fetch(`/api?word=${stringWithNoSpaces}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('#message').innerText = `Your WuTang Name is: ${data.name}`})
    }

    //listener with the smurf after the function 

    document.querySelector('#userButton').addEventListener('click', createWutangName)