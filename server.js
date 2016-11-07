'use strict';

const express = require('express');
const cors    = require('cors');
const app     = express();
const port    = 3000;

let calc = (a, b) => {
    let one = a?a:0;
    let two = b?b:0;
    let summ = one + two;
    return summ.toString();
}

app.use(cors());
app.get('/',(req, res) => {
    
    console.log('req.query');
    console.log(req.query);
    //let a = parseInt(req.query.a), b = parseInt(req.query.b);
    let summ = calc(+req.query.a, +req.query.b)
    res.send(summ);

});

var server = app.listen(port);

console.log('Server is listening on port ' + port);