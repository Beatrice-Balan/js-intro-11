/* TASK-4
You are given a JS Array below:
•	Calculate the total price of products in the cart     	-> 2444
•	Find the brands of all the products in the cart  	-> [ 'Dell', 'Apple', 'Sony' ]
•	Find all the items in the cart with their quantity 	-> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
*/

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};


// Calculate the total price of products in the cart     	-> 2444

const totalPrice = shoppingCart.items.reduce((total, currProduct) => total + (currProduct.price * currProduct.quantity), 0)

console.log(totalPrice)


// Find the brands of all the products in the cart  	-> [ 'Dell', 'Apple', 'Sony' ]

const allBrandNames = shoppingCart.items.map((product) => product.specifications.brand)

console.log(allBrandNames)



// Find all the items in the cart with their quantity 	-> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]

const allItemsQuant = shoppingCart.items.map((product) => `${product.productName}, ${product.quantity}`)

console.log(allItemsQuant)


// const allItemsQuant = shoppingCart.items.map((product) => [product.productName, product.quantity].join(', '));