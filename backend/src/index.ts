import express from 'express';
import cors from 'cors';
import https from 'https'

const allowedOrigins = ['https://localhost:5173'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

const app = express();
app.use(cors(options));

https
  .createServer(app)
  .listen(8081, ()=>{
    console.log(`server running : https://localhost:8081`);
  });


app.get('/test', (req, res) => {
    console.log('hit test');
    res.send("What's up doc ?!");
});
