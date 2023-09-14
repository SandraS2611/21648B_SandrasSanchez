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

app.use("/places", require("./routes/places.routes"));

app.get("/", (req, res) => {
  res.render("index", { título: "Proyecto Final de Sandra S.", places });
});

app.listen(3000, () => {
  sequelize.sync({ force: false });
  console.log("Servidor Conectado");
});
