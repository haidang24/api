const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const data=[
  {
    name: "Sóng Gió",
    author: "Jack",
    id: 1,
    link: "https://api-0vri.onrender.com/public/sóng gió.mp3"
  },
    {
    name: "Trốn tìm",
    author: "Đen Vâu",
    id: 2,
    link: "https://api-0vri.onrender.com/public/sóng gió.mp3"
  },
  {
    name: "Đi về nhà",
    author: "Đen Vâu",
    id: 3,
    link: "https://api-0vri.onrender.com/public/sóng gió.mp3"
  },
  
  

]

app.get('/api/music',(req,res)=>{
  res.json(data)
})

app.get('/public/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, 'public', fileName);
  res.sendFile(filePath);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});