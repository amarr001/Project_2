
// Goal: To store GET requested (added to cart) products in a variable as objects in an array
// We can use the .slice() method to add new products selected by the user to the array 
// We can loop over the array to get the (sku in reality as unique identifier), (for test get id and model name)
// Then write a new key value pair to local storage at the point a product is added to the cart, i.e. ('product', 1) + ('product', 2)
// At the same time store an array of local storage (key pairs) in a variable
// Bind local storage methods to cart buttons: clear() getItem() key() removeItem() setItem() in order to update the cart
// Every change to local storage needs to be made to variable storing array of key pairs
// Function is needed to loop through the updated local storage array to get values(ids)
// Then these id's can be used to filter() DB object array and present the chosen products in the cart for 'purchase'


// We can use the disguarded items to for an email list for remarketing

// 1. Get the id of each object in the DB response array


// Array of products added to cart
let res = [
    {
        id: 1,
        category: 'phone',
        image_url: 'assets/iphone_11.jpg',
        brand: 'Apple',
        model: 'iPhone 11',
        desription: 'Shiny iPhone',
        price: '$40.00 per month'
    },
    {
        id: 2,
        category: 'phone',
        image_url: 'assets/iphone_11_pro.jpg',
        brand: 'Apple',
        model: 'iPhone 11 Pro',
        desription: 'Shiny iPhone that\'s Pro',
        price: '$65.00 per month'
    }
];


// Array of key up-to-date key value pairs
let local_storage = [
    ('product', id),
    ('product', id)
];


// Get page elements.
$("#btn-save").on('click', function () {
    console.log('save btn pressed')
    localStorage.setItem('Udara is a legend', 'Nathan is a legend');
});

$("#btn-delete").on('click', function () {
    console.log("Hi I'm a button");
});

$("#btn-update").on('click', function () {
    console.log("Hi I'm a button");
});

