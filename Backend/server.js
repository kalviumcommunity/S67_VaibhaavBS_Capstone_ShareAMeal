const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Share A Meal API is running!');
});

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

const donationRoutes = require('./src/Controllers/donations');
app.use('/donations',donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
