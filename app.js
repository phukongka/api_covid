const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors')
dotenv.config();
const covidRoutes = require('./routes/covid');



app.use(cors())
app.use(express.json());

// ใช้ route เริ่มต้น
app.use('/api/covid', covidRoutes);

// เริ่มต้นเซิร์ฟเวอร์
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
