var shoppingCart = {
    books:3,
    sunglass:1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}


var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertiesName = 'books';
var propertiesValue = shoppingCart[propertyName]
// console.log(propertiesName, propertiesValue);

var properties = Object.keys(shoppingCart);

var propertiesValues = Object.values(shoppingCart);



// console.log(properties);

// console.log(propertiesValues);
console.log(shoppingCart);

// set property values
shoppingCart.mouse = 15;

console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 98
console.log(shoppingCart);