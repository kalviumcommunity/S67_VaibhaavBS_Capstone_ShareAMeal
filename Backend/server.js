const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Share A Meal API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
