module.exports = {
  renderSellerPage: async (req, res, next) => {
    try {
      res.render("sellers/sellerPage.ejs");
    } catch (error) {
      next(error);
    }
  },
};
