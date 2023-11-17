**Fecha**: _____________________________     **Hora de inicio**: _____________
**Nombre**:  ____________________________   **Hora de término**: ____________
**INSTRUCCIONES**: Lea y desarrolle las actividades abajo descritas. Marque las actividades desarrolladas.

Información general
1. Herramientas a utilizar:
Puedes utilizar base de datos relacional SQL Server.
La página puede ser diseñada utilizando cualquier tipo de codificación (HTML, CSS, JS... entre otros), ***no aplica framework***.

2. Recursos:
Imágenes y manual de identidad institucional: https://www.uaeh.edu.mx/imagen/recursos.html

3. Información para evidencia:
    - Carpeta de almacenamiento: Archivo rar con documentación.
    - Página web.
    - Backup de base de datos.
    - Lista de querys de consulta.
    - Mapa relacional de la base de datos.

4. Elabore una base de datos con las siguientes tablas:
    - Director: ID, nombre, instituto, numero de empleado, contraseña
    - Docente: ID, nombre, instituto, contraseña, matricula, contraseña
    - Alumno: ID, nombre, apellido paterno, apellido materno, matricula, contraseña
    - Asignatura: ID, nombre, instituto, abreviación.
    - Instituto: ID, nombre, domicilio.

5. Elaborar las siguientes relaciones:
    - Instituto – Director
    - Instituto – Docente
    - Instituto – Alumno
    - Docente – Asignatura
    - Alumno - Asignatura

6. Elaborar un sistema web con las siguientes características:
    **Primera sección.**
    - Elaborar un encabezado de página con el logo institucional.
    - Elaborar una autentificación de usuario que validara a que sección entrar dependiendo del tipo de usuario que se asigne. 
    - Seleccionar el rol del usuario con el cual accederá.
    - Elaborar un pie de página con la información de contacto y derechos de autor de la institución.
    - Diseño responsive para dispositivos móviles.

    **Segunda sección.**
    Esta sección es para el *rol de director* el cual podrá hacer apartado administrativo:
    - Mostrar información de la relación de los docentes con la asignatura que imparten.
    - Seleccionar la información de los docentes y actualizarla.
    - Agregar un nuevo docente con la asignatura que impartirá.
    - Agregar un nuevo alumno a la asignatura que impartirá el docente.
    - Eliminar a los docentes que imparten las asignaturas.
    - Elaborar un encabezado de página con el logo institucional e información del rol.
    - Diseño responsive para dispositivos móviles.
    - Generación de csv de la información consultada.
    - Generación de pdf de la información consultada.

    **Tercera sección.**
    Esta sección es para el *rol del docente*:
    - Mostrar información de las asignaturas que imparte.
    - Consultar la información de los alumnos inscritos a esas asignaturas.
    - Seleccionar la información de los alumnos y actualizarla.
    - Elaborar un encabezado de página con el logo institucional e información del rol.
    - Diseño responsive para dispositivos móviles.
    - Generación de csv de la información consultada.
    - Generación de pdf de la información consultada.

    **Cuarta sección.**
    Esta sección es para el *rol del alumno*:
    - Mostrar la información de las asignaturas a las que está inscrito.
    - Elaborar un encabezado de página con el logo institucional e información del rol.
    - Diseño responsive para dispositivos móviles.
    - Generación de csv de la información consultada.
    - Generación de pdf de la información consultada.

    Puntos opcionales:
    - Encriptación de datos para las contraseñas de los roles.