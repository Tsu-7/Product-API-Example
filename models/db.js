var mysql = require('mysql');
console.log('connecting...');

var con = mysql.createConnection({
    database:'example',
    host:'localhost',
    user:'root',
    password:''
});

con.connect((error)=>{
    if(error) throw error;
    console.log('success')
});

module.exports = con ;