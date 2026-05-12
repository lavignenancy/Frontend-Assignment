const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];

 console.log(`The list of products:`);
for(let i=0; i< products.length; i++){
    const productList = products[i].name;
    console.log(`${productList}`);
}
 console.log(`--------------------`);
console.log(`List products under 1000 (cheap items):`);
for(let i=0; i< products.length; i++){
    const productList = products[i].name;
    let productPrice = products[i].price;
    if(productPrice < 1000){
         console.log(`${productList}`);

    }  
}

 console.log(`--------------------`);
console.log(`List products in category Clothing:`);

for(let i=0; i< products.length; i++){
    if(products[i].category=== "clothing"){
         console.log(`${products[i].name}`);

    }  
}

 console.log(`--------------------`);
console.log(`Stock value:`);

let stockValue = 0;
for(let i=0; i< products.length; i++){
  stockValue =  stockValue +(products[i].price * products[i].stock);
    }  
console.log(stockValue);

console.log(`--------------------`);
console.log(`Combination of products:`);
for(let i=0; i< products.length; i++){
    if( products[i].category === "clothing" && products[i].stock> 0){
 console.log(products[i].name);
    }
}










