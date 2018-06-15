const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static(path.join(__dirname, '/public')));

app.get('/:id/buying', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/dist/buying.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/buyingcss', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/dist/styles.css`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/details', (req, res) => {
  axios.get(`http://localhost:8000/${req.params.id}/details`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/jesseReviews', (req, res) => {
  axios.get(`http://localhost:3001/${req.params.id}/dist/main.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/reviewscss', (req, res) => {
  axios.get(`http://localhost:3001/${req.params.id}/dist/styles.css`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/reviews', (req, res) => {
  axios.get(`http://localhost:3001/${req.params.id}/reviews`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.post('/:id/reviews', (req, res) => {
  axios.post(`http://localhost:3001/${req.params.id}/reviews`, req.body)
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.put('/:id/reviews', (req, res) => {
  axios.put(`http://localhost:3001/${req.params.id}/reviews`, req.body)
    .then(response => res.status(204).end())
    .catch(error => res.status(500).send(error));
});

app.get('/:id/xueProducts', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/dist/bundleShopProducts.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/shopcss', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/style.css`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/shopproducts', (req, res) => {
  axios.get(`http://localhost:5000/${req.params.id}/shopproducts`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
