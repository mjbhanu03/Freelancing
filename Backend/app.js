const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})