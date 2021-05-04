const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const postRoutes = require("./singleblogpost-routes");
const dashboardRoutes = require("./dashboard-routes");
const checkAuthorization = require('../utils/authorization');

router.use("/", homeRoutes);
router.use("/api", checkAuthorization, apiRoutes);
router.use("/post", checkAuthorization, postRoutes);
router.use("/dashboard", checkAuthorization, dashboardRoutes);

module.exports = router;
