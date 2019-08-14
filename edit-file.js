'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');

module.exports = exports = {};

exports.readFile = (fileName, callback) => {
  fs.readFile(fileName, (error, fileContents) => {
    if (error) {
      callback(error);
    } else {
      callback(undefined, JSON.parse(fileContents));
    }
  });
}


const fakeObject = JSON.stringify({
  firstName: 'fake',
  lastName: 'fake',
  hair: { type: 'fake', color: 'fake' },
  favoriteFoods: ['fake', 'fake', 'fake'],
  married: false,
  kids: 0
})

const originalObject = JSON.stringify({
  firstName: 'Edward',
  lastName: 'Scissorhands',
  hair: { type: 'wavy', color: 'brown' },
  favoriteFoods: ['pizza', 'cupcakes', 'children'],
  married: false,
  kids: 0
})


exports.editFile = (fileName, callback) => {

  fs.writeFile(fileName, fakeObject, function (err) {
    if (err) {
      return console.log(err);
    } else {
      callback("The file was saved!");
    }
  });

}


class FileSystem {

  readFile(fileName, callback) {
    fs.readFile(fileName, (error, fileContents) => {
      if (error) {
        callback(error);
      } else {
        // console.log(fileContents.toString());
        callback(undefined, fileContents.toString());
      }
    });
  }

  readFilePromises(fileName) {
    // Vinicio - this line sets up two callbacks: rejection  and success
    return fsExtra.readFile(fileName);
  }
}
