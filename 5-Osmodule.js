//to import the os Module
const os = require('os');

//it is the os Module we can get user info the os
const user = os.userInfo();
console.log(user);

console.log(`the system uptime is ${os.uptime()} seconds`);

// these all are the method of the OS module
//name is os type and release total memory all
const SystemInfo = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log(SystemInfo);

//UID AND GID
//
// Unix-like operating systems identify a user by a value called a user identifier, often abbreviated to user ID or UID. The UID, along with the group identifier (GID) and other access control criteria, is used to determine which system resources a user can access. The password file maps textual user names to UIDs.
