import fs from 'fs'
import readline from 'readline'
import chalk from 'chalk'

// load questions from JSON file
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'))

// create CLI (Command Line Interface) interface
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

// function to ask questions and get user input (Quix logic)
let score = 0;
let index = 0;

console.log(chalk.yellow.bold("Welcome to Quiz App"))

const askQuestions = () => {
    if (index < questions.length) {
        const q = questions[index]
        console.log(chalk.blue(`\nQ${index + 1}: ${q.question}`))
        q.options.forEach((option, index) => {
            console.log(chalk.green(`${index + 1}. ${option}`))
        })

        rl.question(chalk.cyan("Your answer (enter the option number): "), (answer) => {
            const userAnswer = q.options[parseInt(answer) - 1]
            if (userAnswer === q.answer) {
                console.log(chalk.green("Correct"))
                score++
            } else {
                console.log(chalk.red(`Wrong! The correct answer is: ${q.answer}`))
            }
            index++
            askQuestions()
        })
    } else {
        console.log(chalk.yellow.bold(`\nQuiz Over! Your final score is ${score}/${questions.length}`))
        rl.close()
    }
}

askQuestions()