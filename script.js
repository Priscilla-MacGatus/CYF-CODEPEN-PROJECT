var carousel, Cart, Name, Product, carousel1, carousel2, Phone, Total, item, Email, Price, Comment2;

// Describe this function...
function Display_Selected_Products() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_name = document.getElementById('name');
  let new_li = document.createElement('li');
  Product.forEach((item) => {
    new_li.innerText = Product.pop();
  });

  element_name.appendChild(new_li);
  let element_price = document.getElementById('price');
  let new_li2 = document.createElement('li');
  Price.forEach((item) => {
    new_li2.innerText = Price.pop();
  });

  element_price.appendChild(new_li2);
  let element_number = document.getElementById('number');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 1;

  element_number.appendChild(new_li3);
}

// Describe this function...
function total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_sum2 = document.getElementById('sum');
  element_sum2.innerText = Total.reduce((a,b) => a+b, 0);
}

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_new_arrivals = document.getElementById('new_arrivals');
  element_new_arrivals.setAttribute("src", carousel[0]);
}

// Describe this function...
function display1() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_new_arrivals1 = document.getElementById('new_arrivals1');
  element_new_arrivals1.setAttribute("src", carousel1[0]);
}

// Describe this function...
function display2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_new_arrivals2 = document.getElementById('new_arrivals2');
  element_new_arrivals2.setAttribute("src", carousel2[0]);
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function contact_info() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_fullname = document.getElementById('fullname');
  Name.push(document.getElementById('fullname').value);
  let element_phone = document.getElementById('phone');
  Phone.push(convertToNumber(document.getElementById('phone').value));
  let element_email = document.getElementById('email');
  Email.push(document.getElementById('email').value);
  let element_comment = document.getElementById('comment');
  Comment2.push(document.getElementById('comment').value);
}



document.getElementById('clear').addEventListener('click', (event) => {
  let element_name2 = document.getElementById('name');
  element_name2.replaceChildren();
  let element_price2 = document.getElementById('price');
  element_price2.replaceChildren();
  let element_number2 = document.getElementById('number');
  element_number2.replaceChildren();
  let element_sum = document.getElementById('sum');
  Total = [];
  element_sum.innerText = 0;

});
Cart = [];
Product = [];
Total = [];
Price = [];


document.getElementById('product1').addEventListener('click', (event) => {
  Product.push('Celia');
  Cart.push('Celia');
  Price.push(47);
  Total.push(47);
  total();
  Display_Selected_Products();

});

document.getElementById('product2').addEventListener('click', (event) => {
  Product.push('Salma');
  Cart.push('Salma');
  Total.push(100);
  Price.push(100);
  total();
  Display_Selected_Products();

});

document.getElementById('product3').addEventListener('click', (event) => {
  Product.push('Arenys');
  Cart.push('Arenys');
  Total.push(160);
  Price.push(160);
  total();
  Display_Selected_Products();

});

document.getElementById('product4').addEventListener('click', (event) => {
  Cart.push('Gemi');
  Product.push('Gemi');
  Total.push(100);
  Price.push(100);
  total();
  Display_Selected_Products();

});

document.getElementById('product5').addEventListener('click', (event) => {
  Product.push('Sally');
  Cart.push('Sally');
  Price.push(62);
  Total.push(62);
  total();
  Display_Selected_Products();

});

document.getElementById('product6').addEventListener('click', (event) => {
  Cart.push('Azra');
  Total.push(85);
  Price.push(85);
  Product.push('Azra');
  total();
  Display_Selected_Products();

});

document.getElementById('product7').addEventListener('click', (event) => {
  Product.push('Lois');
  Cart.push('Lois');
  Total.push(75);
  Price.push(75);
  total();
  Display_Selected_Products();

});

document.getElementById('product9').addEventListener('click', (event) => {
  Cart.push('Maya');
  Product.push('Maya');
  Total.push(65);
  Price.push(65);
  total();
  Display_Selected_Products();

});

document.getElementById('product8').addEventListener('click', (event) => {
  Product.push('Zoe');
  Cart.push('Zoe');
  Total.push(70);
  Price.push(70);
  total();
  Display_Selected_Products();

});
carousel = ['https://i.pinimg.com/564x/e9/92/8c/e9928c510af72efbbb91d1fdba105df0.jpg', 'https://i.pinimg.com/564x/2a/68/05/2a6805f06c6c0fe2ffd63f2d0dde8c99.jpg', 'https://i.pinimg.com/564x/f4/6f/08/f46f08d46f64e1b5e1207e0eb2fe2354.jpg'];
carousel1 = ['https://i.pinimg.com/736x/60/21/d9/6021d97bb14b5bae0fc455bb1c1ed1f7.jpg', 'https://i.pinimg.com/564x/c4/b8/68/c4b86802e1567703634f0dfbed0a38f2.jpg', 'https://i.pinimg.com/564x/d8/fa/2f/d8fa2f1dfad1342002d6b7bd9a223150.jpg'];
carousel2 = ['https://i.pinimg.com/736x/c3/f9/d7/c3f9d7d11860baf69534fb7571952b5c.jpg', 'https://i.pinimg.com/564x/a3/1e/15/a31e15ed6e01dc3ffcec97c1e7c442dd.jpg', 'https://i.pinimg.com/564x/99/9a/ec/999aec49f8b50b9253c524d796a04260.jpg'];


document.getElementById('new_arrivals').addEventListener('click', (event) => {
  carousel.push(carousel.shift());
  display();

});

document.getElementById('new_arrivals1').addEventListener('click', (event) => {
  carousel1.push(carousel1.shift());
  display1();

});

document.getElementById('new_arrivals2').addEventListener('click', (event) => {
  carousel2.push(carousel2.shift());
  display2();

});
Name = [];
Phone = [];
Email = [];
Comment2 = [];


document.getElementById('send').addEventListener('click', (event) => {
  event.target.style.visibility = (false) ? 'visible' : 'hidden';
  let element_callback = document.getElementById('callback');
  element_callback.innerText = 'We have received your request.An agent will call you in a minute.';
  let element_request = document.getElementById('request');
  element_request.innerText = document.getElementById('comment').value;
  let element_cust_name = document.getElementById('cust_name');
  element_cust_name.innerText = document.getElementById('fullname').value;
  let element_confirm = document.getElementById('confirm');
  element_confirm.innerText = 'Request From';
  contact_info();

});
