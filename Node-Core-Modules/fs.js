// const fs = require('fs');
const fs = require('fs/promises');
// Callback Version
// fs.writeFile('File1.txt', 'Hello world', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('File1.txt created');
// });

// Promise Version
// fs.writeFile('File2.txt', 'Hello World 2')
//   .then(() => console.log('File2.txt Created'))
//   .catch((err) => console.log(err));

// Async Await

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('file Created');
  } catch (error) {
    console.log(error);
  }
}

// Read from file
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Delete a file
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
  } catch (error) {
    console.log(error);
  }
}

// Rename a file
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} Renamed to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

// Create a folder

async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}
createFile('File3.txt', 'I am a programmer ');
readFile('file3.txt');
deleteFile('file3.txt');
renameFile('File1.txt', 'John.txt');
createFolder('Folder 1');
