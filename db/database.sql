CREATE DATABASE IF NOT EXISTS compania;

USE compania;

CREATE TABLE cliente (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    cuit INT(15) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE viaje (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombreChofer VARCHAR(45) DEFAULT NULL,
    apellidoChofer VARCHAR(45) DEFAULT NULL,
    dniChofer INT(8) DEFAULT NULL,
    patente VARCHAR(8) DEFAULT NULL,
    cuitCliente INT(15) DEFAULT NULL,
    origen VARCHAR(45) DEFAULT NULL,
    destino VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);


INSERT INTO cliente VALUES
(1,juan,20365746542),
(2,laura,2742655423),
(3,jose,20395445422);

INSERT INTO cliente VALUES
(1,alberto,perez,32564564,aa543gf,2742655423,zarate,campana),
(2,ana,gomez,38887654,ldf154,2742655423,campana,zarate),
(3,jose,moreira,30456443,liz432,20395445422,lima,escobar),
(4,juan,juanes,34344425,ab312ab,20365746542,campana,escobar);

/*
SELECT * FROM VIAJE;

SELECT V.id AS 'id',
    V.nombreChofer AS 'nombreChofer',
    V.apellidoChofer AS 'apellidoChofer',
    V.dniChofer AS 'dniChofer',
    V.patente AS 'petente',
    V.cuitCliente AS 'cuitCliente',
    C.nombre AS 'nombreCliente',
    V.origen AS 'origen',
    V.destino AS 'Ddestino',
FROM viaje AS V 
INNER JOIN cliente AS C
ON V.cuitCliente = C.cuit;

*/