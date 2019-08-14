'use strict';

const myFileSystem = require('./edit-file');


// ---------- WITH CALLBACKS ----------



// myFileSystem.readFile(`${__dirname}/data/person.json`, (error, fileString) => {
//   if (error) {
//     console.error('readFile ERROR');
//   } else {
//     let originalObject = JSON.parse(fileString);
//     console.log('Original file', originalObject);

//     // edit file 
//     let editedFile = editFile(originalObject);

//     // write file
//     myFileSystem.writeFile(`${__dirname}/data/person.json`, JSON.stringify(editedFile), (error, data) => {
//       if (error) {
//         console.error('myFileSystem.editFile ERROR', error);
//       } else {
//         console.log('edited file with callbacks', data);
//       }
//     });

//   }
// });


// ---------- WITH PROMISES ----------

function editFile(file) {
  file.firstName = 'fake';
  file.lastName = 'fake';
  return file;
}


myFileSystem.readFilePromises(`${__dirname}/data/person.json`)
  .then(fileString => {
    console.log('Read file with Promises', JSON.parse(fileString));
    return JSON.parse(fileString);
  })
  // edit file
  .then(file => {
    return editFile(file);
  })
  // write file
  .then(editedFile => {
    myFileSystem.writeFilePromises(`${__dirname}/data/person.json`, editedFile);
  })
  // read file again
  .then(result => {
    console.error('result', result);
    return myFileSystem.readFilePromises(`${__dirname}/data/person.json`);
  })
  .then(fileString => {
    console.log('Write file with Promises', JSON.parse(fileString));
  })
  .catch(error => console.error('ERROR-d3kg', error));