const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const cors = require('cors');

const result = dotenv.config();
if (result.error) {
  console.error("Failed to load .env file", result.error);
}
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;

console.log('MongoDB URI:', process.env.MONGO_URI); // Log the MongoDB URI
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
