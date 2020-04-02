const router = require("express").Router();
const roomRoutes = require("./room");

// Book routes
router.use("/room", roomRoutes);

module.exports = router;