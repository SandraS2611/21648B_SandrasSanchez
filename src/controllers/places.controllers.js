const { PlaceModel } = require("../models/Places");


async function placesList (req, res) {
  const places = await PlaceModel.findAll()
  res.json(places);
}

async function createPlace(req, res) {
  const { titulo, contenido, link } = req.body;
  await PlaceModel.create({ titulo, contenido, link });
  res.send("new place created");
}

async function findPlace(req, res) {
  const id = req.params.id;
  const place = await PlaceModel.findByPk(id);
  if (!place) {
    return res.send("Place not Found");
  }
  res.json(place);
}

async function updatePlace(req, res) {
  const id = req.params.id;
  const { titulo, contenido, link } = req.body;
  await PlaceModel.update(
    { titulo, contenido, link }, {
      where: {
        id,
      },
    });
  res.send("Updated Place");
}

async function deletePlace(req, res) {
  const id = req.params.id;
  await PlaceModel.destroy({
    where: {
      id,
    },
  });
  res.send("Deleted Place");
}

module.exports = {
  placesList,
  createPlace,
  findPlace,
  updatePlace,
  deletePlace,
};
