'use strict';

const fileSystem = require('./edit-file')

fileSystem.readFile(`${__dirname}/data/person.json`, (error, data) => {
  if (error) {
    console.error('ERROR');
  } else {
    console.log(data);
  }
});


fileSystem.editFile(`${__dirname}/data/person.json`, (error, data) => {
  if (error) {
    console.error('ERROR');
  } else {
    console.log(data);
  }
});

fileSystem.readFile(`${__dirname}/data/person.json`, (error, data) => {
  if (error) {
    console.error('ERROR');
  } else {
    console.log(data);
  }
});


