import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`); 
});