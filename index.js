import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req,res)=>{
// const response = await axios.get("https://secrets-api.appbrewery.com/random");
// const data = response.data
// console.log(data);
res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });