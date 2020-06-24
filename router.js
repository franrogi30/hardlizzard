let index = require("./scr/index");
let router = function (url, res) {
  switch (url) {
    case "/":
      index.homePage(res);
      break;
    case "/enCartelera":
      index.enCartelera(res);
      break;
    case "/contacto":
      index.contacto(res);
      break;
    case "/masVotadas":
      index.masVotadas(res);
      break;
    case "/sucursales":
      index.sucursales(res);
      break;
    case "/preguntasfrecuentes":
      index.preguntasFrecuentes(res);
      break;

    default:
      res.end("404 pagina no encontrada");
      break;
  }
};
module.exports = router;
