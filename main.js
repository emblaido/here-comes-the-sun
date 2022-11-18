console.log("welcome")

//getting started, adding all of my ids into the global so i can access them.
//these are my questions, i am attempting to to make it orderly 

let aButton = document.getElementById("optionA");
console.log(aButton);
aButton.addEventListener("click", selectAnswer )

let bButton = document.getElementById("optionB");
console.log(bButton);
bButton.addEventListener("click", selectAnswer)

 let cButton = document.getElementById("optionC");
 console.log(cButton)
cButton.addEventListener("click", selectAnswer)

//here im trying to make my code take in the options and the 
//answer givin, and return true or false.

function selectAnswer  (evt) {
console.log(evt.target.innerText)


}

function updateButton (query){
    aButton.textContent = query.options[0]
    bButton.textContent = query.options[1]
    cButton.textContent = query.options[2]
}

const questionsAry =  [ 
    {
question1: "what are snails classified as?",
    options: ["option A", "option B", "option C"],
right: "optionB"  
},
 {
    question2: "is the lilly of the nile poisonous?",
    options: "optionA, optionB, optionC",
    right: "optionC"
},
{

    question3: "what is the Ginkgo Biloba",
    options: "optionA, optionB, optionC",
     right: "optionA, optionB, optionC",
}
]
//console.log(questions)

updateButton(questionsAry[0])






