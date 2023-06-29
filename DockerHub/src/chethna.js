const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld*', (req, res) => {
  res.send('Hello, This is Chethna!')
})

app.listen(port, () => {
  console.log(`chethna app listening on port ${port}`)
})
