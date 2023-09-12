// const is used to define the constants
// let is used to define variables and over come the block and functional scope issue of the var
// if we use the var the block scope and dunctional scope dosen't work on the variable.
// we can decalre a variable without giving anything but not recomended
// if we define any variable and dosen't assign any value then the default value will be undefined

const accountId=122342
let accountEmail="rakesh.kuratti@gmail.com"
var accpassword="123"
accountCity="gadag"
let accountscpace



console.log(accountId);
console.log(accountEmail);
console.log(accpassword);
console.log(accountCity);

accountEmail="atc@gmail.com";
accpassword="321";
accountCity="mulgund";
console.log(accountId);
console.log(accountEmail);
console.log(accpassword);
console.log(accountCity);

console.table([accountEmail,accountEmail,accountId,accountCity,accountscpace])