const express = require('express')
const app = express()

// const port = 3000
const port = process.env.port || 3030

app.get('/', (req, res) => {
  res.send('Hello World44444!')
})

app.get('/123', (req, res) => {
  res.send('123!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
