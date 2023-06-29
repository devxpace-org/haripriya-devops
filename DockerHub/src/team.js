const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Haripriya Team App! <br/> <br/>Available pages are: <br/> /haripriya <br/> /harshitha <br/> /supriya <br/> /tejaswini <br/> /karthik <br/> /praneeth <br/> /raja <br/> /sumanth <br/> /maazin <br/> /chethna")
})

app.listen(port, () => {
  console.log(`team app listening on port ${port}`)
})
