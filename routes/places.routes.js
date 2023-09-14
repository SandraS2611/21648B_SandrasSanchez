const { Router } = require("express");

const {
  placesList,
  createPlace,
  findPlace,
  updatePlace,
  deletePlace,
} = require("../src/controllers/places.controllers");

const router = Router();

//creé un enrutador
router.get("/", placesList);
router.post("/", createPlace);




router.get("/:id", findPlace);

router.put("/:id", updatePlace);

router.delete("/:id", deletePlace);

module.exports = router;
