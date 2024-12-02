// String methods = allow you to manipulate and work with text (strings)

// let userName = "brocode";

// console.log(userName.charAt(0)); // 0 is b, 1 is r and so one

// console.log(userName.indexOf("o")); // o is 2 as its the position of the letter

// console.log(userName.lastIndexOf("o")); // o is 4 as its the position of the letter from last

// To remove the space behind and front
// let userrName = " Br  uh Cpode      ";
// userrName = userrName.trim(); 
// console.log(userrName);

// To turn to upper case 
// let userName = "Chount";
// userName = userName.toUpperCase();
// console.log(userName);

// To turn all characters to lower case
// let userName = "Chount";
// userName = userName.toLowerCase();
// console.log(userName);


// To repeat the string
// let userName = " Chota Bheeme";
// userName = userName.repeat(3);
// console.log(userName);


// Empty space [startwith, same can be done with endswith]
// let userName = "broasdlfh ";
// let result = userName.startsWith("b");
// if(result){
//     console.log("your username cant begin with b ");
// }
// else{
//     console.log(userName);
// }

// Include 
// let userName = "Bro $ Code";
// let result = userName.includes("$");
// if(result){
//     console.log("your user name cant include special characters");
// }
// else{
//     console.log(userName);
// }



// Practical application [replace things]

// let phoneNumber = "123-234-245-23443";
// phoneNumber = phoneNumber.replaceAll("-", " ");
// console.log(phoneNumber);

// To limit numers Padstart and Padend (same)
// let phoneNumber = "123-234-245-23443";
// phoneNumber = phoneNumber.padStart(25, "0"); // the thing in "" will fill the rest space automatically
// console.log(phoneNumber);