// Copiamos lo datos de nuestro archivo JSON.
const Estudiantes= `[
    {
        "Nombre": "Juan",
        "Edad": 30,
        "Es_Estudiante": true
    },
    {
        "Nombre": "Ana",
        "Edad": 20,
        "Es_Estudiante":true
    },
    {
        "Nombre": "Luis",
        "Edad": 25,
        "Es_Estudiante":false
    },
    {
        "Nombre": "Carlos",
        "Edad": 22,
        "Es_Estudiante":true
    },
    {
        "Nombre": "Jose",
        "Edad": 28,
        "Es_Estudiante":false
    }
                    ]`
console.log(Estudiantes);
const Students=JSON.parse(Estudiantes);
console.log(typeof Estudiantes);

// Convertimos los objetos a una cadena JSON.
const studentsStrJson=JSON.stringify(Estudiantes);
console.log("Objeto convertido a cadena JSON: ", studentsStrJson);

// Convertimos la cadena JSON a objetos.
const studentsObjJson=JSON.parse(studentsStrJson);
console.log("Cadena JSON convertida a objeto: ", studentsObjJson);

// Filtramos los estudiantes que tienen más de 21 años.
const studentsFilter = Students.filter(Students => Students.Edad>21);
console.log("Filtro de estudiantes con edad mayor a 21 años: ", studentsFilter);

// Agregamos un nuevo estudiante.
const fs = require('fs')
const newStudent=
    {
        "Nombre": "María",
        "Edad": 23,
        "Es_Estudiante":true
    }

    const nwStd=JSON.stringify(newStudent)
    fs.writeFile("Estudiantes.json", nwStd, (error)=>
        {
            if(error) throw error;
            console.log("Nuevo listado de estudiantes: ", Estudiantes)
        })

