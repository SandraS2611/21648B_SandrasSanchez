const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const PlaceModel = sequelize.define("places", {
  titulo: DataTypes.STRING,
  contenido: DataTypes.TEXT,
  link: DataTypes.STRING,
});

module.exports = { PlaceModel };
