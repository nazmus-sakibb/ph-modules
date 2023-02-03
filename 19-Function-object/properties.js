 const cart = {
    pen: 4,
    book: 9,
    mouse: 2,
    keyboard: 7,
    shoe: 4,
    watch: 3
 }

 const penCount = cart.pen;

 const penCount2 = cart['pen'];


 const propertyName = 'mouse';
 const propertyValue = cart[propertyName];

 console.log(propertyValue);


 const properties = Object.keys(cart);

 const propertyValues = Object.values(cart);

//  console.log(properties);

//  console.log(propertyValues);


