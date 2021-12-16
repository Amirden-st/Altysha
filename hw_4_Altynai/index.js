var products = [
    {
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clohtes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    }
]

var list = document.querySelector('.list')

//           Задание 3
var total = document.getElementById('total')
var categories = products.reduce((tally, product) => {
    tally[product] = (tally,[product] || 0 ) + 1;
    return tally
}, {})

console.log(categories);

//              Задание 4
function render(){
    products.map(function(product){
        list.innerHTML += `
            <div class="product">
                <div class="avatar"></div>
                 <div class="desc">
                    <h3>${product.productName}</h3>
                    <p>${product.cost} сом </p>
                     <p>${product.category} </p>
                </div>
            </div>`
    })
}


render()

//     Задание 1

// var eat = products.filter(function(categ) {
//         if(categ.category == 'food'){
//             return true;
//         } else {
//             return false;
//         }
//     });
// console.log(eat);




//              Задание 2
// function render(){
//     products.map(function(product){
//         list.innerHTML += `
//             <div class="product">
//                 <div class="avatar"></div>
//                  <div class="desc">
//                     <h3>${product.productName}</h3>
//                 </div>
//             </div>`
//     })
// }



// render()








