const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

// Connecting to databade
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'freelancing'
});

// Promisify for Node.js async/await
const promisePool = pool.promise();

// Sample API endpoint
app.post('/login/check', async (req, res) => {
    const { email, password } =req.body;

    try {
      const [rows] = await promisePool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])

      if(rows.length > 0)
      {
        res.json({ success: true, message: 'Login Successfull', user: rows[0] });
      } else {
        res.status(401).json({ success: false, message: 'Invalid Credentials' })
      }
    }
    catch (error) {
      console.log('Error quering the database:', error);
      res.status(500).json({error: 'Internal Server Error'})
    }
  });


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})