console.log("welcome")

//getting started, adding all of my ids into the global so i can access them.
// these are my question id's that are hiddin and will be triggerd 
const questionLily = document.getElementById("lily")
questionLily.style.display = "none"

const questionKinkgo = document.getElementById('Kinkgo')
questionKinkgo.style.display = "none"

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
right: "optionC"  
},
 {
    question2: "is the lilly of the nile poisonous?",
    options: "optionA, optionB, optionC",
    right: "optionB"
},
{

    question3: "what is the Ginkgo Biloba",
    options: "optionA, optionB, optionC",
     right: "optionA, optionC",
}
]
//console.log(questions)

updateButton(questionsAry[0])


//setInterval(() => {
    //questionLily = questionLily + 1
//questionLily.innerHTMl = "lily" 
//if (questionLily === 2) { 
    //questionLily.style.display = "block"
    
//}    
//}
//)





