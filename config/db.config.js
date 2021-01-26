//'use strict';

const mysql = require('mysql');

// DB connection
const dbConn = mysql.createConnection({
    host: 'instance-trademybots.colrl01q4u3g.ap-south-1.rds.amazonaws.com',
    user: 'tmbadmin',
    password: 'I8Rqgd5VknuP',
    database: 'db_trademybots'
});

dbConn.connect(function(err) {
    if (err) throw err;

    console.log("Database connected!");
});

export default dbConn;