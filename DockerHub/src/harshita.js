const express = require('express')
const app = express()
const port = 3000

app.get('/harshita*', (req, res) => {
  res.send('Hello, This is Harshita!')
})

app.listen(port, () => {
  console.log(`harshita app listening on port ${port}`)
})
