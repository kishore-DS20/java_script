// const data = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const ans ="hi";
//         if(ans) {
//             resolve(ans);
//         }else{
//             reject("no data found")
//         }
//     },1000);
// });

// data
// .then((name) => {
//     console.log(name);
    
// })
// .catch((error) => {
//     console.log(error);
    
// })

// .finally(() => {
//     console.log("pinished")
// })


// Eg
// const data = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//     },5000)
// })


// Exercise

// Create a function orderFood(foodItem) that:
// Returns a promise that resolves after 3 seconds with "Your [foodItem] is ready!".
// Rejects if the foodItem is "burned pizza" with "Sorry, the [foodItem] got burned!"

const orderFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        const foodItem = "burned pizza";
        if(foodItem == "burned pizza"){
            console.log(`sorry ,the ${foodItem} got burned`)
            
        }else{
            console.log(`your ${foodItem} is ready`);
        }
            console.log()
        
    },500);
})

orderFood
.then((foodItem)=>{
    console.log(foodItem)
})
.catch((error) =>{
    console.log(error.type);
})
.finally(()=>{
    console.log("finished")
})
