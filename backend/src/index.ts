import express from 'express';
import cors from 'cors';

const port = 8081;
const allowedOrigins = ['http://localhost:5173'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}

const app = express();
app.use(cors(options));

app.get('/test', (req, res) => {
    res.send('Testing');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});