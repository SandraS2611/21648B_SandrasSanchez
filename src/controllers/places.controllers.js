const { PlaceModel } = require("../models/Places");

const placesList = async (req, res) => {
  const places = await PlaceModel.findAll();
  res.render("index", { places });
};

const createPlace = async (req, res) => {
  res.render("create");
};

const findPlace = async (req, res) => {
  const placeId = req.params.id;
  const place = await PlaceModel.findByPk(placeId);
  if (!place) {
    return res.redirect("/places");
  }
  res.render("updates", { place });
};

const updatePlace = async (req, res) => {
  const { id, titulo, contenido, link } = req.body;
  const place = await PlaceModel.findByPk(id);
  await place.update({ titulo, contenido, link });
  res.redirect("/places");
};

const newPlace = async (req, res) => {
  const { titulo, contenido, link } = req.body;
  await PlaceModel.create({ titulo, contenido, link });
  res.redirect("/places");
};

const deletePlace = async (req, res) => {
  const placeId = req.params.id;
  const place = await PlaceModel.findByPk(placeId);
  await place.destroy();
  res.redirect("/places");
};

module.exports = {
  placesList,
  createPlace,
  newPlace,
  findPlace,
  updatePlace,
  deletePlace,
};
