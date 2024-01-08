const fs = require("fs");
const Item = require("../models/item");

module.exports = {
  feedDatabase: async (req, res, next) => {
    try {
      const data = fs.readFileSync(__dirname + "/../products.json");
      const items = JSON.parse(data);
      let insertionNumber = 0;
      for (const item of items) {
        const newItem = new Item(item);
        console.log(newItem);
        await newItem.save();
        insertionNumber++;
      }
      res.end(
        `Insertion terminée : ${insertionNumber} items have been iserted`
      );
    } catch (error) {
      next(error);
    }
  },
};
