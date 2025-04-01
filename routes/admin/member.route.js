const express = require('express');
const router = express.Router();

const controller = require("../../controllers/admin/member.controller");

router.get("/", controller.index);
router.post("/create", controller.postMember);
router.get("/detail/:id", controller.detail);
router.patch("/edit/:id", controller.edit);
router.delete("/delete/:id", controller.delete);

module.exports = router;