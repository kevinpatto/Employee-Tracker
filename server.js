const express = require('express');
const api = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api); // route to /api

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
