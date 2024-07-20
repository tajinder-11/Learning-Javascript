const os = require('os');

//arch()
console.log(os.arch());

//platform()
if (os.platform() === 'darwin') {
  console.log('You are on a Mac');
} else if (os.platform() === 'win32') {
  console.log('You are on Windows');
} else if (os.platform() === 'linux') {
  console.log('You are on Linux');
}

// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem());
console.log(`free memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(`Total Memory : ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homdir()
console.log(os.homedir());

// uptime()
console.log(os.uptime());
