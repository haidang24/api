const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const data=[
  {
    name: "Until I Found You",
    author: "Stephen Sanchez",
    link: "https://api-sp2t.onrender.com/public/Until_I_Found_You.mp3",
    img:"https://i.ytimg.com/vi/4BnLL8KYasU/sddefault.jpg",
    id: 1,
  },
    {
    name: "To The Mon",
    author: "Hooligan",
    link: "https://api-sp2t.onrender.com/public/To_The_Moon.mp3",
    img:"https://avatar-ex-swe.nixcdn.com/song/2020/07/02/5/d/c/9/1593664626011_640.jpg",
    id: 2,
  },
  {
    name: "Perfect",
    author: "Ed Sheeran",
    link: "https://api-sp2t.onrender.com/public/Perfect.mp3",
    img:"https://i1.sndcdn.com/artworks-5QRVzLFOR1CJ6XBi-CRpmiw-t500x500.jpg",
    id: 3,
  },
  {
    name: "Comethru",
    author: "Jeremy Zucker",
    link: "https://api-sp2t.onrender.com/public/Comethru.mp3",
    img:"https://i1.sndcdn.com/artworks-000508079064-onpjgt-t500x500.jpg",
    id: 4,
  },
  {
    name: "Here With Me",
    author: "d4vd",
    link: "https://api-sp2t.onrender.com/public/Here_With_Me.mp3",
    img:"https://i.ytimg.com/vi/6KA4D57jP-g/maxresdefault.jpg",
    id: 5,
  },
  {
    name: "Pano",
    author: "Zack Tabudlo",
    link: "https://api-sp2t.onrender.com/public/Pano.mp3",
    img:"https://avatar-ex-swe.nixcdn.com/song/2022/12/29/e/e/f/b/1672296333770_640.jpg",
    id: 6,
  },
  {
  name: "I_love_You_3000",
    author: "Stephanie Poetri",
    link: "https://api-sp2t.onrender.com/public/I_Love_You_3000.mp3",
    img:"https://i.ytimg.com/vi/a0qC7lG3Vfc/maxresdefault.jpg",
    id: 7,
  },
]

app.get('/Edit_Api',(req,res)=>{
  res.sendFile(path.join(__dirname,'edit.html'))
})

app.get('/api/music',(req,res)=>{
  res.json(data)
})

app.get('/public/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, 'public', fileName);
  res.sendFile(filePath);
});

app.delete('/api/delete/:id',(req,res)=>{
  const index = parseInt(req.params.id) - 1;
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    for (let i = index; i < data.length; i++) {
      data[i].id = i + 1;
    }
    res.json(data);
  } else {
    res.status(400).json({ message: 'Invalid index' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});