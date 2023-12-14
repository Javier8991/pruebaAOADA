<?php

$db = mysqli_connect('localhost', 'prueba', 'vKDROqfvHXVfI[Pp', 'pruebaaoada'); //conexion a la BD

if (!$db) { //Devolver error si no podemos conectranos a la BD
    echo "Error en la conexion";
}else{
    echo "Conexion Exitosa";
}
