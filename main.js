console.log("welcome")

//getting started, adding all of my ids into the global so i can access them.
// these are my question id's that are hiddin and will be triggerd 

// answer choices
let aButton = document.getElementById("optionA");
console.log(aButton);
aButton.addEventListener("click", selectAnswer)

let bButton = document.getElementById("optionB");
console.log(bButton);
bButton.addEventListener("click", selectAnswer)

 let cButton = document.getElementById("optionC");
 console.log(cButton)
cButton.addEventListener("click", selectAnswer)

let correct = 0;
let incorrect = 0;
let question = 1; 
let correctAnswer= '';
let userAnswer = ''; 
// let correctAnswer2 = "Option B"
// let correctAnswer3 = A or C 


function selectAnswer (evt) {
    console.log(evt.target.innerText)
    console.log(aButton.innerText);
    userAnswer = evt.target.innerText
    if (question === 1) {
        document.getElementById("winningscore").innerHTML = 1
        let questionSnail = document.getElementById("snail")
questionSnail.style.display = "none";
let questionLily = document.getElementById("lily")
questionLily.style.display = "block";

        // assign correct asnswer (aButton.innerText)
        // compare them (if statement)
        // if they are the same 
            //correct + 1 
            // question + 1 
            // change dispaly none question 1 
            // change display block question 2 
        // else 
            // incorrect + 1 
            // question + 1 
            // change dispaly none question 1 
            // change display block question 2 
    } else if (question === 2) { 

    }else {
    
    }



}

    // if answer is the same as the correct answer 
        // display choson button color as green
        // display current question to none 
        // display block next question
        // increase score by one 
    // else 
        //display chosen button color as red
        //display the correct button color as green 
        // display current question to none 
        // display block next question 




// questions
let questionSnail = document.getElementById("snail")
questionSnail.style.display = "block";


// if correct button is selected then 
    // display correct answer blurb
    // increase score by one 
// else 
    // display wrong answer blurb 



let questionLily = document.getElementById("lily")
questionLily.style.display = "none";

const questionKinkgo = document.getElementById('Kinkgo')
questionKinkgo.style.display = "none";



//these are my questions, i am attempting to to make it orderly 


// answer choices

//here im trying to make my code take in the options and the 
//answer givin, and return true or false.




//function updateButton (query){
    //aButton.textContent = query.options[0]
   // bButton.textContent = query.options[1]
    //cButton.textContent = query.options[2]
//}

//const questionsAry =  [ 
    //{

   const question1 = {question: "what are snails classified as?",
    options: ["option A", "option B", "option C"],
     right: "optionC"  
}



//display question 1 and answer choices with associated buttons
// listen to the buttons 
// if correct button is selected then 
    // display correct answer blurb
    // increase score by one 
// else 
    // display wrong answer blurb 

// display question 2 
// if correct button is selected then 
    // display correct answer blurb
    // increase score by one 
// else 
    // display wrong answer blurb 
// display question 3 
// if correct button is selected then 
    // display correct answer blurb
    // increase score by one 
// else 
    // display wrong answer blurb 

//display end game screen 
//if score >= 2 
    // display win message
// else 
    // display lose message 
    
 
//      const question2 = [{ "is the lilly of the nile poisonous?",
//     options: ["optionA", "optionB", "optionC"],
//     right: "optionB"
// }]

//    const question3 = [{ "what is the Ginkgo Biloba",
//     options: ["optionA, optionB, optionC"],
//      right: "optionA, optionC",
//     }]

//console.log(questions)

//updateButton(questionsAry[0])



// function makeSelection (text) {
//     console.log(text)
//     checkAnswer(question1, text)
// }



