

const mysql =require('mysql')

console.log("Hello World")

const connection=mysql.createConnection({
    host:"192.168.64.100",
    user:"root",
    password:"123456",
    database:"dwd_data"
})

var sql='select * from dwd_login_count';

connection.connect();

connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();