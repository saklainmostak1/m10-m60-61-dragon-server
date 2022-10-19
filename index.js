const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const catagories = require('./data/catagory.json');


app.get('/', (req, res) =>{
    res.send('News API Running');
})

app.get('/news-catagory', (req, res) => {
    res.send(catagories)
})



app.listen(port, () =>{
    console.log('Dragon Nes Server running on port', port);
})