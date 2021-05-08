fs = require('fs');

let sidebarJS = require('./sidebars.js')

sidebarJSON = JSON.stringify(sidebarJS)

fs.writeFile('sidebars.json', sidebarJSON, function (err) {
    if (err) return console.log(err);
  });