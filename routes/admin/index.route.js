const memberRoutes = require("./member.route");

module.exports = (app) => {
    const version = "/api/v1";

    app.use(version + "/members", memberRoutes);
}