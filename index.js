const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagory.json');
const news = require('./data/news.json')


app.get('/', (req, res) =>{
    res.send('News API Running');
})

app.get('/news-catagory', (req, res) => {
    res.send(catagories)
})
app.get('/catagory/:id', (req, res) => {
    const id = req.params.id
    if(id === '08'){
        res.send(news)
    }
    else{
        const catagory_news = news.filter(n => n.category_id === id)
        res.send(catagory_news)
    }
})
app.get('/news', (req, res) =>{
    res.send(news)
})
app.get('/news/:id', (req, res) =>{
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
} )



app.listen(port, () =>{
    console.log('Dragon Nes Server running on port', port);
})