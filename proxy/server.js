const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/:id', express.static(path.resolve(__dirname, './public')));

app.get('/:id/buying', (req, res) => {
  axios.get(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/buying.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/buyingcss', (req, res) => {
  axios.get(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/styles.css`)
    .then(response => res.set('Content-Type', 'text/css').status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/details', (req, res) => {
  axios.get(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/details`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/jesseReviews', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/main.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/reviewscss', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/styles.css`)
    .then(response => res.set('Content-Type', 'text/css').status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/reviews', (req, res) => {
  axios.get(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.post('/:id/reviews', (req, res) => {
  axios.post(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`, req.body)
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.put('/:id/reviews', (req, res) => {
  axios.put(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`, req.body)
    .then(response => res.status(204).end())
    .catch(error => res.status(500).send(error));
});

app.get('/:id/xueProducts', (req, res) => {
  axios.get(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/bundleShopProducts.js`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/shopcss', (req, res) => {
  axios.get(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/style.css`)
    .then(response => res.set('Content-Type', 'text/css').status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.get('/:id/shopproducts', (req, res) => {
  axios.get(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/shopproducts`)
    .then(response => res.set('Content-Type', 'text/css').status(200).send(response.data))
    .catch(error => res.status(500).send(error));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
