
// libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NewsAPI = require('newsapi');

// constants
const constants = require('./constants');
const NEWS_API_KEY = constants.NEWS_API_KEY;
const newsapi = new NewsAPI(NEWS_API_KEY);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log("it is working!!!");
  res.json('it is working!!!')
})

app.post('/news', (req, res) => {
  var { category } = req.body;
  if (category === '') category = 'general';
  newsapi.v2.topHeadlines({
    category: category,
    language: 'en',
    country: 'us'
  }).then(response => {
    //console.log(response);
    res.json(response);
  }).catch(err => res.status(400).json(err));
})


app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username + ': ' + password);
  res.json(username + ":" + password);

})
// process.env.PORT || 
const port = process.env.port || 8000;
app.listen(process.env.PORT || 8000, () => {
  console.log(`app is runnning on port ${port}`);
});