const express = require('express')
const app = express()
const port = 3000

app.get('/praneeth*', (req, res) => {
  res.send('Hello, This is Praneeth!')
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})
