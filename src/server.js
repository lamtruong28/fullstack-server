import express from 'express';
import 'dotenv/config';
import route from './routes/index.js';
const app = express();
//Init route:
route(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running ${PORT}`));