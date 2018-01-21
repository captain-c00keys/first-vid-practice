'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//need this to serve ANY stati files in a /public directory
app.use(express.static('./public'));

app.get('/api/codefellows', (req, res) => {
    res.json({company: 'codefellows', courses: [201, 301, 401]});
});

app.listen(PORT, () => {
    console.log('currently listening on PORT:', PORT);
});