var express = require('express');
var app = express(); 
var port = process.env.POST || 3000;
var mysql = require('mysql');



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2018@2019",
    database: "ecommerce"
});

con.connect(function(err){
    if (err) throw err;
    console.log('connection reussi a la BD');
});

global.db = con;


function index(req, res) {
    return res.json({adonis: 'moi'})
}


app.get('/', index);

app.listen(port)

console.log(`REST APU Server listening on the post ${port}`)