
//getting started, adding all of my ids into the global so i can access them.

// my buttons
let aButton = document.getElementById("optionA");
aButton.addEventListener("click", selectAnswer)

let bButton = document.getElementById("optionB");
bButton.addEventListener("click", selectAnswer)

 let cButton = document.getElementById("optionC");
cButton.addEventListener("click", selectAnswer)

let correct = 0;
let incorrect = 0;
let question = 1; 
let correctAnswer = 'Option C';
let userAnswer = ''; 
let correctAnswer2 = "Option B";
let correctAnswer3 = "Option A";


function selectAnswer (evt) {
    userAnswer = evt.target.innerText
    if (question === 1) {
        if (userAnswer === correctAnswer) {
            correct = correct + 1; 
            document.getElementById("winningscore").innerHTML = correct
            let questionSnail = document.getElementById("snail")
            questionSnail.style.display = "none";
            let questionLily = document.getElementById("lily")
            questionLily.style.display = "block";
        } else {         
            incorrect = incorrect + 1; 
            document.getElementById("loosingscore").innerHTML = incorrect
            let questionLily = document.getElementById("lily")
            questionLily.style.display = "block";
            let questionSnail = document.getElementById("snail")
            questionSnail.style.display = "none";
            
        }
        question = question + 1;
        
    }
    
    else if (question === 2) {
        if (userAnswer === correctAnswer2) {
            correct = correct + 1; 
            document.getElementById("winningscore").innerHTML = correct;
            let questionLily = document.getElementById("lily")
            questionLily.style.display = "none";
            const questionKinkgo = document.getElementById('Kinkgo')
            questionKinkgo.style.display = "block";
        } else {         
            incorrect = incorrect + 1;
            document.getElementById("loosingscore").innerHTML  = incorrect;
            let questionLily = document.getElementById("lily")
            questionLily.style.display = "none";
            let questionSnail = document.getElementById("Kinkgo")
            questionSnail.style.display = "block";
     
        }  
        question = question + 1;
        
        
        
    }
    else if (question === 3) {
        if (userAnswer === correctAnswer3) {
            correct = correct + 1; 
            document.getElementById("winningscore").innerHTML = correct;
            const questionKinkgo = document.getElementById('Kinkgo')
            questionKinkgo.style.display = "none";
        } else {         
            incorrect = incorrect + 1;
            document.getElementById("loosingscore").innerHTML  = incorrect;
            let questionSnail = document.getElementById("Kinkgo")
            questionSnail.style.display = "none";
     
        }      
        return endGame()
        
    }
        
}

function endGame() {
    if (correct === 2 || correct === 3 ) {
    let winMessage = document.getElementById("win")
    winMessage.style.display = "block";
    }else{ 
        incorrect === 2
        let looseMessage = document.getElementById("loose")
        looseMessage.style.display = "block";
       
    }
}


// my P tag id's and their displays
let questionSnail = document.getElementById("snail")
questionSnail.style.display = "block";

let questionLily = document.getElementById("lily")
questionLily.style.display = "none";

let questionKinkgo = document.getElementById('Kinkgo')
questionKinkgo.style.display = "none";

let winMessage = document.getElementById("win")
winMessage.style.display = "none";

let looseMessage = document.getElementById("loose")
looseMessage.style.display = "none";

//display end game screen 
//if score >= 2 
    // display win message
// else 
    // display lose message 
    
 





