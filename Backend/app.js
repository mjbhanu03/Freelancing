const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

// Sample API endpoint
app.get('/getData', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})