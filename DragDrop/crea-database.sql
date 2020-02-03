DROP DATABASE IF EXISTS equipo;
-;
FLUSH PRIVILEGES;
CREATE DATABASE equipo;

CREATE USER IF NOT EXISTS user@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON equipo.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE equipo ;

CREATE TABLE equipo (
 _idjugador INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 nombreEquipo VARCHAR(255) NOT NULL,
 posicion VARCHAR(255) NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 estado VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idjugador));

INSERT INTO equipo VALUES (NULL, "Jaume","Valencia","Portero","jaume.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Florenzi","Valencia","Defensa","florenzi.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Paulista","Valencia","Defensa","paulista.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Garay","Valencia","Defensa","garay.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Gaya","Valencia","Defensa","gaya.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Guedes","Valencia","Centrocampista","guedes.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Parejo","Valencia","Centrocampista","parejo.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Kondogbia","Valencia","Centrocampista","kondogbia.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Ferran","Valencia","Centrocampista","ferran.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Maxi","Valencia","Delantero","maxi.jpg","titular");
INSERT INTO equipo VALUES (NULL, "Rodrigo","Valencia","Delantero","rodrigo.jpg","titular");

