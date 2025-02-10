// Array:

// Array=[1,2,3,4,5];
// console.log(Array);

// let arr=[3,4,5,'a',"abc",[3,4]]
// console.log(arr[4][1]);

// 2D arrays:
// let matrix = [[1,2,3],[4,5,6],[6,7,8]];
// console.log(matrix[1][2])

// // Array Methods:
// let array = ['b','c','d','e','f']

// array.push('f')
// console.log(array)

// console.log(array.pop())

// console.log(array.shift())
// console.log(array.unshift('aa','bb'))
// console.log(array)

// delete array[2]
// console.log(array)


// let array = ['a','b','c','d','e','f']
// array.splice(3,3,'a','b','c')
// console.log(array)

// array.splice(1,0,'a')
// console.log(array)

// console.log(array.reverse( ))

// let str = array.join()
// console.log(str)

// let str3 ="a,s,d,f,g,h,j,k,l";
// console.log(str3.split(-));  

// let firstarr = [1,2,3];
// let secondarr = [4,5,6];
// let joinedarr = [firstarr+secondarr]
// console.log(joinedarr);

// let firstarr = [1,2,3];
// let secondarr = [4,5,6];

// let joinedarr = firstarr.concat(secondarr)
// console.log(joinedarr)

// Exercises of Array:

// let arr = [5,8,10,7,9,11];
// arr.splice(3,3,17,19,111);
// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// arr.push(200);
// console.log(arr);
// arr.push(1000);
// console.log(arr);
// console.log(arr.length/2);

// console.log(arr.splice(5,0,0));
// // console.log(array)
// // console.log(arr);
// let result=arr.splice(5,0,0)

// console.log(result);



// let arr = [5,8,10,7,9,11];
//  let value=Math.floor(arr.length/2);
//  console.log(arr.splice(value,0,0));

// insert zero in the middle:

// let arr = [5,8,10,7,9,11];
// arr.splice(5,0,0)
// console.log(arr);

// arr.splice(3,3,17,19,111);
// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// arr.push(200);
// console.log(arr);
// arr.push(1000);
// console.log(arr);
// arr.splice(5,0,0)
// console.log(arr);

// let arr = [5,8,10,7,9,11];
// delete arr[2];
// console.log(arr);

// console.log(arr.reverse());

// let bikes = ["yamaha","suzuki","honda","bajaj"];
// console.log(bikes.toString());
// console.log(bikes.join("-"));
// delete bikes[1];
// console.log(bikes);
// let anime = ['apple','banana','zebra','acid']
// bikes.sort();
// console.log(bikes);
// anime.sort();
// console.log(anime);

// let bikes = ["yamaha","suzuki","honda","bajaj"];
// let anime = "'apple','banana','zebra','acid'";
// console.log(Array.isArray(bikes));
// console.log(Array.isArray(anime));

// console.log(bikes.lastIndexOf("honda",4));

// console.log(bikes.find("honda"));


// let arr = [2,3,4,5,6];
// console.log(arr.includes(1));


// let days=["sun","mon","tue","wed","thu","fri","sat"];
// let day = days.entries();
// console.log(day)


// let ages = [33,54,12,,33,22,11,44];
// let result = ages.filter(age => age>=18);
// console.log(result);


// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 18 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 16 }
//   ];

//   const adult = people.filter(people => people.age >18);
//   console.log(adult);
  
// let ages = [33,54,12,,33,22,11,44];

// function checkAdult(ages){
//     if(ages >=18){
//         console.log(ages);
//     }else{
//             console.log("you r not eligible")
//         }
//     }

// let result = ages.filter(checkAdult);
// console.log(result);


// Filter string by length:
// const words = ["apple", "bat", "ball", "pineapple", "cat"];
// const result = words.filter(words => words.length >4);
// console.log(result);

// const words = ["apple", "bat", "ball", "pineapple", "cat"];
// const result = words.filter(checkLonger);
// function checkLonger(words){
//     return words.length >4;
// }
// console.log(result);


// let ages = [33,54,12,33,22,11,44];
// let result = ages.find((e)=>e >5)
// console.log(result);


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.findIndex((element) => element > 100);

// console.log(found);


// Day 6

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// // fullName();
// console.log(person.fullName);






