const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi it is Amir, i am making changes to the app!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
