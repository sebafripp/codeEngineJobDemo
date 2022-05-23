const express = require("express")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    let date
    let newDate
    while (true) {
        date = new Date()
        newDate = `La hora actual es: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        console.log(newDate)
    }
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)