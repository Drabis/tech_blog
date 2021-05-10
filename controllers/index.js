const router = require("express").Router();
const checkAuth = require("../utils/auth");

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./blogRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/post", postRoutes);
router.use("/dashboard", checkAuth, dashboardRoutes);

module.exports = router;
