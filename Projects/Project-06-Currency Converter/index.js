import axios from 'axios'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const API_URL = 'https://open.er-api.com/v6/latest'

const currentConverter = async (fromCurrency, toCurrency, amount) => {
    try {
        const response = await axios.get(`${API_URL}/${fromCurrency}`)
        const rates = response.data.rates
        if (!rates[toCurrency.toUpperCase()]) {
            console.log(`Currency Code ${toCurrency} not found`)
        }
        const convertedAmount = (amount * rates[toCurrency.toUpperCase()])
        console.log(`${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`)
    } catch (error) {
        console.error('Error fetching exchange rates:', error)
    }
}

rl.question("Enter the currency code you want to convert from (e.g., USD): ", (fromCurrency) => {
    rl.question("Enter the currency code you want to convert to (e.g., INR): ", (toCurrency) => {
        rl.question("Enter the amount you want to convert: ", (amount) => {
            currentConverter(fromCurrency, toCurrency, parseFloat(amount))
        })
    })
})