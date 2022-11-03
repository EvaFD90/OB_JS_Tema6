let compra = ["Leche", "ColaCao", "Cereales", "Pan", "Yogures"];

compra.push("Aceite de Girasol");

compra.pop();

const pelis = [
    {
        título: "Pesadilla antes de Navidad",
        director: "Henry Selick",
        fecha: new Date(1994, 11, 2)
    },
    {
        título: "Fargo",
        director: "Ethan Jesse Coen",
        fecha: new Date(1996, 5, 20)
    },
    {
        título: "La La Land",
        director: "Damien Chazelle",
        fecha: new Date(2017, 0, 13)
    }
]

const pelisNuevas = pelis.filter(estreno => estreno.fecha > new Date(2010, 0, 1));

const directores = pelis.map(pelicula => {
    return pelicula.director;
})

const titulos = pelis.map(pelicula => {
    return pelicula.título;
})

const directores_titulos = directores.concat(titulos);

const dir_tit = [...directores, ...titulos];

