const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const data=[
  {
    name: "Lối nhỏ",
    author: "Đen Vâu"
  },
    {
    name: "Trốn tìm",
    author: "Đen Vâu"
  },
  {
    name: "Đi về nhà",
    author: "Đen Vâu"
  },
  
  

]

app.get('/api/music',(req,res)=>{
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});