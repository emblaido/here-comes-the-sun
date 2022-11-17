console.log("welcome")
//getting started, adding all of my ids into the global so i can access them.
//these are my buttons.
let aButton = document.getElementById("optionA");
console.log(aButton);


let bButton = document.getElementById("optionB");
console.log(bButton);

 let cButton = document.getElementById("optionC");
 console.log(cButton)
 
//these are my score trackers 
let winningElement = document.getElementById("winningscore")
console.log(winningElement)

let loosingElemt = document.getElementById("loosingscore")
console.log(loosingElemt)


const myQuestions = [ "ginkgo", "snail", "lily"];
for (let i = 0; i<myQuestions.length; i++) {
    console.log([i])
}
