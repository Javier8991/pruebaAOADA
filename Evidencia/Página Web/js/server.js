const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'prueba',
  password: 'vKDROqfvHXVfI[Pp',
  database: 'pruebaaoada',
  port: 3306 
});


connection.connect((err) => {
  if (!connection) {
    console.error('Error en la conexión:', err);
    return;
  } else{
  console.log('Conexión exitosa');
  }
});



