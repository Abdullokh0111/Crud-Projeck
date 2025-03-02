const express = require("express");
let router = express.Router();
const pcController = require("../controller/pc.controller");

router.get("/pc", pcController.getAllPc);
router.post("/addPc", pcController.addNewPc);
router.delete("/:id", pcController.deletePc);

module.exports = router;