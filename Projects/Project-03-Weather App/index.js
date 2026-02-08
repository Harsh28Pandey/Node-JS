import axios from 'axios'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a city name: ', async (city) => {
    const apiKey = 'YOUR_API_KEY' // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        const response = await axios.get(url)
        console.log(`City name: ${response.data.name}`)
        console.log(`Current temperature is ${response.data.main.temp}°C`)
        console.log(`Weather description: ${response.data.weather[0].description}`)
    } catch (error) {
        console.error('Error fetching weather data:', error.message)
    } finally {
        rl.close()
    }
})