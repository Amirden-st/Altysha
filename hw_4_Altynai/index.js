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

// Вы были близко)
// var categories = products.reduce((tally, product) => {
//     мы считаем количество продуктов в каждой категории. Поэтому:
//     tally[product.category] = (tally[product.category] || 0 ) + 1;
//                                      Вы придумали отличное условие!
//     return tally
// }, {})

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
//          переменные/параметры лучше называть так, чтобы было понятно что она в себе хранит.  
//          Лучше было вместо categ назвать параметр product, т.к. то, что туда приходит представляет собой продукт
// var eat = products.filter(function(categ) {
//         Нужно было получить категории food и tool. 
//         if(categ.category == 'food') {  // Поэтому здесь лучше написать if (categ.category === 'food' || categ.category === 'tool')
//             return true;
//         } else {
//             return false;
//         }
//     });
// console.log(eat);



//              Задание 2
// Нужно было получить массив имён
// var productNames = products.map(product => {
//     return product.name
// }) 
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








