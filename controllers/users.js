module.exports = {
  renderProfile: ({ user }, res, next) => {
    res.render("users/profile", { user });
  },
  renderHome: (req, res, next) => {
    res.render("users/home");
  },
};
