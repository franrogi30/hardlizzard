const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas");
const sucursales = require("./sucursales");
const contacto = require("./contacto");
const preguntasFrecuentes = require("./preguntasFrecuentes");

let index = {
  homePage: function (res) {
    res.write(homePage.titulo);
    res.write(`

cantidad:  ${homePage.cantidad()}

`);
    let pelis = homePage.listarPelis();
    for (peli of pelis) {
      res.write("peliculas: " + peli);
    }
    res.write("\n");
    res.end(`Recordá que podes visitar las secciones:
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes`);
  },

  enCartelera: function (res) {
    res.write(enCartelera.titulo);
    res.write(`Total de películas en cartelera: ${homePage.cantidad()}
    
    Listado de Peliculas en Cartelera
    `);
    let movies = enCartelera.listarPelis();
    movies.forEach(function (movie) {
      res.write(`${movie.title}
      
      ${movie.overview}`);
    });
    res.end();
  },
  masVotadas: function (res) {
    res.write(masVotadas.titulo);
    res.write(`Total de películas en cartelera: " + ${masVotadas.cantidad()}

    Listado de Peliculas de mayor Rating`);

    let movies = masVotadas.listarPelis();
    movies.forEach(function (movie) {
      res.write(`${movie.title}  "rating: " ${movie.vote_average}

      ${movie.overview}`);
    });
    res.end();
  },
  sucursales: function (res) {
    res.write(sucursales.titulo);
    res.write(`Total de películas en cartelera:   ${sucursales.cantidad()}

    Listado de Salas disponibles
    
    `)
    let theathers = sucursales.listarCines();
    theathers.forEach(function (theather) {
      res.write(`${theather.name}

                 ${theather.address}



      ${theather.description}`
    );
    res.end();
  })
},
  contacto: function (res) {
    res.write(`${contacto.titulo}

    
  ${contacto.contenido}`);

    res.end();
  },
  preguntasFrencuentes: function (res) {
    res.write(preguntasFrencuentes.titulo);
    res.write(`Total de preguntas: ${preguntasFrencuentes.cantidad()}


    Listado de Preguntas Frecuentes
    
    `);

    let faqs = preguntasFrencuentes.listarFaqs();
    for (faq of faqs) {
      res.write(`Pregunta:  ${faq.faq_title}

      Respuesta: ${faq.faq_answer}
      `);
    }
    
    res.end();
  },
};
module.exports = index;
