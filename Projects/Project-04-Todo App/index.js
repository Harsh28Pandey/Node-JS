import fs from 'fs'
import readline from 'readline'

const file = 'task.json'

if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([]))
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const loadTasks = () => {
    const data = fs.readFileSync(file, "utf-8")
    return JSON.parse(data)
}

const saveTasks = (tasks) => {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2))
}

const showMenu = () => {
    console.log("TODO Application")
    console.log("1. Add Task")
    console.log("2. View Task")
    console.log("3. Delete Task")
    console.log("4. Exit\n")
    rl.question("Choose an option: ", handleMenu)
}

const handleMenu = (options) => {
    switch (options) {
        case "1":
            rl.question("Enter task:  ", (task) => {
                const tasks = loadTasks()
                tasks.push({ task, done: false })
                saveTasks(tasks)
                console.log("Task added successfully\n")
                showMenu()
            })
            break;
        case "2":
            const tasks = loadTasks()
            if (tasks.length === 0) {
                console.log("No task found")
            } else {
                tasks.forEach((data, index) => {
                    console.log(`${index + 1}. ${data.task}`)
                })
            }
            showMenu()
            break;
        case "3":
            const allTasks = loadTasks()
            if (allTasks.length === 0) {
                console.log("No tasks to delete")
                showMenu()
                return;
            }
            console.log("All tasks: ")
            allTasks.forEach((data, index) => {
                console.log(`${index + 1}. ${data.task}`)
            })
            rl.question("Enter task number to delete: ", (number) => {
                const index = parseInt(number) - 1
                if (index >= 0 && index < allTasks.length) {
                    allTasks.splice(index, 1)
                    saveTasks(allTasks)
                    console.log("Task deleted successfully")
                } else {
                    console.log("Invalid task number")
                }
                showMenu()
            })
            break;
        case "4":
            console.log("Exiting...")
            rl.close()
            break;
        default:
            console.log("Invalid option. Please try again")
            showMenu()
    }
}

showMenu()