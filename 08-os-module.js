// os Module
const os = require(`os`);

// info about current user
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds
console.log(`Computer uptime is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
