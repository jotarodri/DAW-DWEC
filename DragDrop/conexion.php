<?php
  
  $servidor = "localhost";
  $username = "root";
  $password = "";
  $basedatos = "equipo";

  # Crear conexión
  $conn = mysqli_connect($servidor, $username, $password, $basedatos);

  # Realizamos consulta
  $consulta = "SELECT * FROM equipo";
  $sql = mysqli_query($conn,$consulta);

  # Guardamos el resultado 
  $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

  # Devolvemos el resultado parseado a JSON
  exit (json_encode($result));

  mysqli_close($conn);
                          
?>