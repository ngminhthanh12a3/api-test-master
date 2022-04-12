var express = require("express");
var router = express.Router();
var { otaCTRL } = require("../controller");
router.get("/update", otaCTRL);
module.exports = router;
