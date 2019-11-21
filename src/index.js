let express = require('express');
let app = express();

app.use('/', express.static('public', { index: 'index.html' }));

app.listen(8080);
