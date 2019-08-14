'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');

module.exports = exports = {};

const fakeObject = JSON.stringify({
  firstName: 'fake',
  lastName: 'fake',
  hair: { type: 'fake', color: 'fake' },
  favoriteFoods: ['fake', 'fake', 'fake'],
  married: false,
  kids: 0,
});


exports.readFile = (fileName, callback) => {
  fs.readFile(fileName, (error, fileContents) => {
    if (error) {
      callback(error);
    } else {
      callback(undefined, fileContents);
    }
  });
}

exports.writeFile = (filePath, editedObject, callback) => {

  fs.writeFile(filePath, editedObject, (error, ) => {
    if (error) {
      callback(error);
    } else {
      callback(undefined, JSON.parse(editedObject));
    }
  });

}



exports.readFilePromises = (fileName) => {
  return fsExtra.readFile(fileName);
}

exports.writeFilePromises = (filePath, editedObject) => {
  return fsExtra.writeJson(filePath, editedObject)
}

