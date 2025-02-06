// function checkTravelEligibility(age, hasPassport, requiresVisa, hasVisa, isHealthy) {
//     if (age < 18) {
//         console.log("You are under 18. Travel requires parental permission.");
//     } else if (hasPassport) {
//         if (requiresVisa) {
//             if (hasVisa) {
//                 console.log(isHealthy ? "You are eligible to travel." : "You need to be medically fit to travel.");
//             } else {
//                 console.log("Visa is required but not obtained. Travel not allowed.");
//             }
//         } else {
//             console.log(isHealthy ? "You are eligible to travel." : "You need to be medically fit to travel.");
//         }
//     } else {
//         console.log("You need a passport to travel.");
//     }
// }

// checkTravelEligibility(20, true, true, true, true);  // Output: "Visa is required but not obtained. Travel not allowed."
// checkTravelEligibility(17, true, false, false, true); // Output: "You are under 18. Travel requires parental permission."
// checkTravelEligibility(30, true, false, false, false); // Output: "You need to be medically fit to travel."

// Using Switch-Case:
// function checkDestination(country) {
//     switch (country) {
//         case "USA":
//         case "Canada":
//         case "INDIA":
//             console.log("Visa is required for this country.");
//             break;
//         case "France":
//         case "Germany":
//             console.log("Visa is not required for this country.");
//             break;
//         default:
//             console.log("Check the travel advisory for your destination.");
//     }
// }
// checkDestination("INDIA"); 
// checkDestination("USA");   // Output: "Visa is required for this country."
// checkDestination("France"); // Output: "Visa is not required for this country."
// checkDestination("Japan");  // Output: "Check the travel advisory for your destination."
// checkDestination("india");  //Check the travel advisory for your destination.

// Ternary Operator:
// let age=20;
// let hasPassport=true;
// let travelReady = (age  >=18 && hasPassport) ? "you are ready to travel" : "you are not eligible";  //you are ready to travel
// console.log(travelReady);


// Define an array of users with various attributes
// const users = [
//     { id: 1, name: 'Alice', age: 25, role: 'admin', active: true },
//     { id: 2, name: 'Bob', age: 30, role: 'user', active: false },
//     { id: 3, name: 'Charlie', age: 22, role: 'user', active: true },
//     { id: 4, name: 'Dave', age: 35, role: 'moderator', active: true },
//     { id: 5, name: 'Eve', age: 28, role: 'admin', active: false }
//   ];
  
//   // Function to check and log user details based on their role and active status
//   function logUserDetails(users) {
//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
      
//       // Using a ternary operator for active status check
//       const status = user.active ? 'active' : 'inactive';
  
//       // Conditional logic for different roles
//       switch (user.role) {
//         case 'admin':
//           console.log(`Admin: ${user.name}, Age: ${user.age}, Status: ${status}`);
//           break;
//         case 'moderator':
//           console.log(`Moderator: ${user.name}, Age: ${user.age}, Status: ${status}`);
//           break;
//         case 'user':
//           console.log(`User: ${user.name}, Age: ${user.age}, Status: ${status}`);
//           break;
//         default:
//           console.log(`Unknown role for: ${user.name}`);
//       }
      
//       // Nested loop example: for each user, we loop through their friends (if any)
//       const friends = user.friends || []; // Let's assume we may have a friends array
//       if (friends.length > 0) {
//         console.log(`${user.name}'s Friends:`);
//         for (let j = 0; j < friends.length; j++) {
//           console.log(`- ${friends[j]}`);
//         }
//       } else {
//         console.log(`${user.name} has no friends listed.`);
//       }
      
//       // Break condition when an admin user is encountered
//       if (user.role === 'admin') {
//         console.log('Breaking loop since an admin was found.');
//         break; // Exit the loop early
//       }
//     }
//   }
  
//   // Function to find the highest age in the users array
//   function findHighestAge(users) {
//     let highestAge = -1;
//     let oldestUser = null;
  
//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//       if (user.age > highestAge) {
//         highestAge = user.age;
//         oldestUser = user;
//       }
//     }
  
//     if (oldestUser) {
//       console.log(`Oldest User: ${oldestUser.name}, Age: ${oldestUser.age}`);
//     } else {
//       console.log('No users found.');
//     }
//   }
  
//   // Function to check all users' activity
//   function checkUsersActivity(users) {
//     let activeCount = 0;
//     let inactiveCount = 0;
  
//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//       if (user.active) {
//         activeCount++;
//       } else {
//         inactiveCount++;
//       }
//     }
  
//     console.log(`Active Users: ${activeCount}, Inactive Users: ${inactiveCount}`);
//   }
  
//   // Running the functions to see results
//   logUserDetails(users);
//   findHighestAge(users);
//   checkUsersActivity(users);


// let a =10;
// let b=10;
// const isEqual=a==b ? true : false;
// console.log(isEqual)


// const users = [
//     { id: 1, name: 'Alice', age: 25, role: 'admin', active: true },
//     { id: 2, name: 'Bob', age: 30, role: 'user', active: false },
//     { id: 3, name: 'Charlie', age: 22, role: 'user', active: true },
//     { id: 4, name: 'Dave', age: 35, role: 'moderator', active: true },
//     { id: 5, name: 'Eve', age: 28, role: 'admin', active: false }
//   ];
  
//   // Loop through the users array and log each user object
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user.name); // Log each user object to the console
//   }


// WAP to check whether the max and min numbers in the Array:
  
// const numbers = [10,20,30,40,50];

// let max = numbers[0];
// let min = numbers[0];

// for (i=0; i < numbers.length; i++){
//     if (numbers[i] > max){
//         max = numbers[i]
//     }

//     if (numbers[i] < min){
//         min = numbers[i]
//     }
// }

// console.log(`max number is : ${max}`)
// console.log("min number is :",`${min}`)


// WAP to print hello for only 3 times:
 
// let a ="hello";
// for(i=0;i<a.length;i++){
//     console.log(a[i])
// }


// To print whether the age is 30 and above:

// const users = [
//     { id: 1, name: 'Alice', age: 25, role: 'admin', active: true },
//     { id: 2, name: 'Bob', age: 30, role: 'user', active: false },
//     { id: 3, name: 'Charlie', age: 22, role: 'user', active: true },
//     { id: 4, name: 'Dave', age: 35, role: 'moderator', active: true },
//     { id: 5, name: 'Eve', age: 28, role: 'admin', active: false }
//   ];
  
//   // Loop through the users array and log each user object
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if(user.age >=30){
//         console.log(user)
//     }
//   }


//   console.log(user.age >= 30 ? users.age :  ); // Log each user object to the console



// const obj=[
//     { id: 1, name: 'Alice', age: 25, role: 'admin', active: true },
//     { id: 2, name: 'Bob', age: 30, role: 'user', active: false },
//     { id: 3, name: 'Charlie', age: 22, role: 'user', active: true },
//     { id: 4, name: 'Dave', age: 35, role: 'moderator', active: true },
//     { id: 5, name: 'Eve', age: 28, role: 'admin', active: false }
//     ];
     
     
//     for( let i= 0;i<obj.length;i++) {
//         const a=obj[i];
//         if(a.age>=30){
//             console.log(a)
//         }
//     }



