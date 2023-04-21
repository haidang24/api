const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const data = [
  {
    name: "Until I Found You",
    author: "Stephen Sanchez",
    link: "https://api-sp2t.onrender.com/public/Until_I_Found_You.mp3",
    id: 1,
  },
  {
    name: "To The Mon",
    author: "Hooligan",
    link: "https://api-sp2t.onrender.com/public/To_The_Mon.mp3",
    id: 2,
  },
  {
    name: "Perfect",
    author: "Ed Sheeran",
    link: "https://api-sp2t.onrender.com/public/Perfect.mp3",
    id: 3,
  },
  {
    name: "Comethru",
    author: "Jeremy Zucker",
    link: "https://api-sp2t.onrender.com/public/Comethru.mp3",
    id: 4,
  },
  {
    name: "Here With Me",
    author: "d4vd",
    link: "https://api-sp2t.onrender.com/public/Here_With_Me.mp3",
    id: 5,
  },
  {
    name: "Pano",
    author: "Zack Tabudlo",
    link: "https://api-sp2t.onrender.com/public/Pano.mp3",
    id: 6,
  },
  {
    name: "I_love_You_3000",
    author: "Stephanie Poetri",
    link: "https://api-sp2t.onrender.com/public/I_Love_You_3000.mp3",
    id: 7,
  },
]

app.get('/api/music', (req, res) => {
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