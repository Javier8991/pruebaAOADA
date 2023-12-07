CREATE TABLE instituto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(100) NOT NULL,
    domicilio VARCHAR(255) NOT NULL
);

CREATE TABLE rol (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR NOT NULL
);

create table director(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL, 
    numero_empleado INT NOT NULL, 
    contrasena VARCHAR(64) NOT NULL,
    instituto_ID INT NOT NULL,
    rol_ID INT NOT NULL, 
    KEY instituto_ID (instituto_ID),
    CONSTRAINT instituto_FK
    FOREIGN KEY (instituto_ID)
    REFERENCES instituto (id),
    KEY rol_ID (rol_ID),
    CONSTRAINT rol_FK
    FOREIGN KEY (rol_ID)
    REFERENCES rol (id)
    );

    create table docente(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(64) NOT NULL,
    matricula INT NOT NULL,
    instituto_ID INT NOT NULL,
    rol_ID INT NOT NULL,
    KEY instituto_ID (instituto_ID),
    CONSTRAINT instituto_docente_FK
    FOREIGN KEY (instituto_ID)
    REFERENCES instituto (id),
    KEY rol_ID (rol_ID),
    CONSTRAINT rol_docente_FK
    FOREIGN KEY (rol_ID)
    REFERENCES rol (id)
    );

    CREATE TABLE asignatura(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    instituto varchar(255), 
    abreviacion  VARCHAR(30) NOT NULL
    );

    CREATE TABLE docente_asignatura(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    docente_ID INT NOT NULL,
    asignatura_ID INT NOT NULL,
    KEY docente_ID (docente_ID),
    CONSTRAINT docente_FK
    FOREIGN KEY (docente_ID)
    REFERENCES docente (id),
    KEY asignatura_ID (asignatura_ID),
    CONSTRAINT asignatura_docente_FK
    FOREIGN KEY (asignatura_ID) 
    REFERENCES asignatura (id)
    );

CREATE TABLE alumno(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100) NOT NULL,
    contrasena VARCHAR(64) NOT NULL,
    matricula INT NOT NULL,
    instituto_ID INT NOT NULL,
    rol_ID INT NOT NULL,
    KEY instituto_ID (instituto_ID),
    CONSTRAINT instituto_alumno_FK
    FOREIGN KEY (instituto_ID)
    REFERENCES instituto (id),
    KEY rol_ID (rol_ID),
    CONSTRAINT rol_alumno_FK
    FOREIGN KEY (rol_ID)
    REFERENCES rol (id)
    );


    CREATE TABLE alumno_asignatura(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    alumno_ID INT NOT NULL,
    asignatura_ID INT NOT NULL,
    KEY alumno_ID (alumno_ID),
    CONSTRAINT alumno_FK
    FOREIGN KEY (alumno_ID)
    REFERENCES alumno (id),
    KEY asignatura_ID (asignatura_ID),
    CONSTRAINT asignatura_alumno_FK
    FOREIGN KEY (asignatura_ID) 
    REFERENCES asignatura (id)
    );