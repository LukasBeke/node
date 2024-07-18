const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const mechanicRoutes = require('./routes/mechanicRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/services', authMiddleware, serviceRoutes);
app.use('/api/mechanics', authMiddleware, mechanicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
