import express from 'express';
import axios from 'axios';
import { name } from 'ejs';

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get('/', async (req,res)=>{
  const name = req.query.name;
  try{
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${name}?format=json`);
const info = response.data
console.log(info.Results);
res.render("index.ejs", {data: info.Results});
  }catch(error){

    console.error("API call failed:", error.message);
    res.status(500).send("Something went wrong.");

    }
  
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });