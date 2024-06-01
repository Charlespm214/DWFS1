const Libros=`[
    {
        "Título": "Las mil y una noches",
        "Autor": "Anónimo",
        "Año": 2017,
        "Categoría": "Novela Literaria"
    },
    {
        "Título": "Don Quijote de la Mancha",
        "Autor": "Miguel de Cervantes",
        "Año": 2015,
        "Categoría": "Novela Literaria"
    },
    {
        "Título": "Los tres mosqueteros",
        "Autor": "Alejandro Dumas",
        "Año": 2023,
        "Categoría": "Novela Literaria Clasica"
    },
    {
        "Título": "Cien años de soledad",
        "Autor": "Gabriel García Márquez",
        "Año": 1988,
        "Categoría": "Literatura"
    },
    {
        "Título": "La Matriarca",
        "Autor": "Pablo Rivero",
        "Año": 2024,
        "Categoría": "Novela Negra"
    },
    {
        "Título": "Memorias de Adriano",
        "Autor": "Marguerite Yourcenar",
        "Año": 1999,
        "Categoría": "Novela Histórica"
    },
    {
        "Título": "La enfermera de Hitler",
        "Autor": "Mandy Robotham",
        "Año": 2023,
        "Categoría": "Novela Histórica"
    }
]`

function agregar()
    {
        const fs=require('fs')
        const nuevoLibro = 
        {
            "Título": "Un fantasma en el sistema",
            "Autor": "Kevin Mitnick & William Simon",
            "Año": 2017,
            "Categoría": "Informática"
        }
        console.log("Nuevo libro: ",nuevoLibro);

const newBook=JSON.stringify(nuevoLibro)
fs.writeFile("Biblioteca.json", newBook, (error)=>
    {
        if(error) throw error;
        console.log("Libro registrado");
    })
        console.log("Lista de libros: ",Libros);
    }
    agregar();

function filtrar()
    {
        console.log(typeof Libros);
        const objLibros=JSON.parse(Libros);
        console.log(typeof objLibros);
        const filtrarLibros = objLibros.filter((Libros)=> Libros.Categoría==="Novela Histórica");
        console.log("Filtro de libros por categoría:", filtrarLibros);
    }
    filtrar();                       

function convertir()
    {
        const stringBooks=JSON.stringify(Libros);
        console.log(typeof Libros);
    }
    convertir();

function leerColeccion()
    {
        const fs=require('fs')
        fs.readFile('Biblioteca.json','utf8',(errorlc, data)=>
            {
                if(errorlc)
                    {
                        console.log("Ha ocurrido un error al leer el archivo", errorlc);
                    }
                    else
                        {
                            const bibliotecaDJson=JSON.parse(data);
                            console.log("La colección de libros ha sido leída desde, 'Biblioteca.json':",bibliotecaDJson);
                        }            
        });
    }
    leerColeccion();