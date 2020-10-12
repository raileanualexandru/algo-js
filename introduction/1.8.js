const readlineSync = require("readline-sync");
let questions = ["color","animal","action","country","describingWord","pluralAnimal"];
console.log("you have to answer "+ questions.length + " questions: \n");

for(let i = 0; i < questions.length; i++){
    questions[i] = readlineSync.question("enter a/an "+ questions[i] +" || " + (i+1) + " / "+ questions.length + " questions \n");

}

console.log("Today we went to the zoo! The first thing we saw was a "+ questions[0]+" "+
questions[1]+" "+ questions[2]+"ing."+ "The zookeeper told us that was normal, except in "+ questions[3]+ ". I had a "+
questions[4]+ " time! Next time, I will remember that if I ever see "+
questions[0]+ " "+ questions[5]+ ". I should "+ 
questions[2]+ " the other way.");