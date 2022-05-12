var express = require('express')
var shrinkRay = require('shrink-ray-current');

var app = express();


app.use(shrinkRay({
    cache: (req, res) => false,
    threshold: 0,
    brotli: {
        quality: 11
    }
}));

app.use(express.static('dist', {etag: false}))
app.listen(8080);