const classNameShortener = require("postcss-class-name-shortener");
const fs = require("fs");

module.exports = {
  plugins: [
    require("autoprefixer"),
    classNameShortener({
      // Setting the callback option is mandatory
      callback: (map) => {
        // You can return a promise
        return new Promise((resolve, reject) => {
          fs.writeFile("map.json", JSON.stringify(map), (err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      },
    }),
  ],
};
