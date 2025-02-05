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
