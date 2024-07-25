import inquirer from "inquirer";

const answer =await inquirer.prompt([
    {message:"Please guess a number between 1 to 10" , name:"userGuessedNumber",type:"number"}

])
const randomNumber = Math.floor(Math.random()*10+1)
if(answer.userGuessedNumber===randomNumber){
    console.log("Congtratulations! you guessed right number ")
}else{
    console.log("Sorry! you guessed wrong number ")

}