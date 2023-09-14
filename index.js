const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
require("./src/models/Places");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.set("views", __dirname + "/src/views");

app.use(express.static("public"));

app.set("view engine", "ejs"); //motor de plantillas ejs

// const places = [
//   {
//     location: "Santiago del Estero",
//     description: "kjdhjhdjfhg",
//     date: "26/11/1980",
//   },
//   {
//     location: "La Banda",
//     description: "fjdfljhjgihdfgjl",
//     date: "07/03/2016",
//   },
//   {
//     location: "Termas del Río Hondo",
//     description: "jsdhfjhsdjhdf",
//     date: "14/08/2020",
//   },
//   {
//     location: "Tucumán",
//     description: "ejashfsdhjfhd",
//     date: "22/09/1983",
//   },
//   {
//     location: "Santa Fe",
//     description: "ejashfsdhjfhd",
//     date: "22/09/1910",
//   },
// ];

app.use("/places", require("./routes/places.routes"));

app.get("/", (req, res) => {
  res.render("index", { título: "Proyecto Final de Sandra S.", places });
});

// app.get("/imagenes", (req, res) => {
//   res.render("imagenes", { título: "Lugares", places });
// });

app.listen(3000, () => {
  sequelize.sync({ force: false });
  console.log("Servidor Conectado");
});
