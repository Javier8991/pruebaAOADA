<?php
include 'conexion.php'; //importar la conexion

// Obtener datos del cuerpo de la solicitud POST
$datos = json_decode(file_get_contents('php://input'), true);

// Obtener los datos desde el objeto json
$nombre= $datos['nombre'];
$apellidop = $datos['apellidop'];
$apellidom = $datos['apellidom'];
$instituto = $datos['instituto'];
$matricula = $datos['matricula'];
$contrasena = $datos['contrasena'];

// consulta para guardar los datos en la tabla de la BD
$sql= "INSERT INTO alumno (nombre, apellido_paterno, apellido_materno, contrasena, matricula) VALUES('$nombre', '$apellidop', '$apellidom', '$contrasena', '$matricula')";
$consulta= mysqli_query($db,$sql);


?>