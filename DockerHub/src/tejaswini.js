const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld*', (req, res) => {
  res.send('Hello, This is Tejaswini!')
})

app.listen(port, () => {
  console.log(`tejaswini app listening on port ${port}`)
})
