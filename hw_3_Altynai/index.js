//     // Задание №1
// let string = ("aabbccdddd")
// let count = {}

// for (let i = 0; i < string.length; i++)
//     if(count[string[i]]) {
//         count[string[i]]++;
//     }else{
//     count[string[i]] = 1
//     }
// console.log(count);

// for (let x in count) {
//     if (count[x] == 4)
//     console.log(x.repeat(4));
// }

    // Задание №2 
function getMin (arr) {
    return Math.min(...arr) 
}
console.log(getMin([1,2,3,4,5]));

function getMin (arr) {
    return Math.min(...arr) 
}
console.log(getMin([75,32,1221,43,]));
// getMin [1,2,3,4,5] //1
// getMin [75,32,1221,43] //32
 
//     // Задание №3
// var products = [
//     {
//         productName: 'milk',
//         cost: 48,
//         category: 'food'
//     },
//     {
//         productName: 'bread',
//         cost: 20,
//         category: 'food'
//     },
//     {
//         productName: 'egg',
//         cost: 11,
//         category: 'food'
//     },
//     {
//         productName: 'axe',
//         cost: 180,
//         category: 'tool'
//     },
//     {
//         productName: 'hammer',
//         cost: 170,
//         category: 'tool'
//     },
//     {
//         productName: 'bag',
//         cost: 1100,
//         category: 'clothes'
//     },
//     {
//         productName: 'socks',
//         cost: 90,
//         category: 'clothes'
//     },
// ]
// function getCategory(category) {
//     var arr = [];
//     for(var i = 0; i < products.length; i++){
//         if (products[i].category === category){ 
//             arr.push(products[i])
//         };
//     };
//     return arr;
// }

// console.log(getCategory('tool'));
function callbakc(product){
    if (product.productName === productName) return true
}
var foundProduct = products.find(callbakc)
return foundProduct



