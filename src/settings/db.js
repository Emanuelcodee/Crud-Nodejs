const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, conn) => {
    if (err) {
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.err('LA CONEXION DE LA BASE DE DATOS FUE CERRADA');
        }
        if (err.code == 'ECONNREFUSED') {
            console.err('LA CONEXION DE LA BASE DE DATOS FUE RECHAZADA');
        }
    }
    if (conn) conn.release();
    console.log('DB IS Connect on Clever-Cloud');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;