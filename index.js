/** @format */

const id = (el) => document.getElementById(el);
const qs = (qs) => document.querySelector(qs);
const qsa = (qsa) => document.querySelectorAll(qsa);

const myElements = {
  addToCart: qsa(".btn"),
  plus:qs(".js-plus"),
  minus: qs(".js-minus"),
  counter: qs(".counter"),
};


// console.log(myElements.counter);
const addding = () => {
  const btn = myElements.addToCart;
  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityContainer = qs(".quantity-container");
      const jsPlus = qs('.js-plus');
      const jsminus = qs('.js-minus');
      (btn.classList.add("js-add-to-cart", "quantity-container"));
      // btn.classList.appendChild("quantityContainer");
      btn.classList.add();
      
      // btn.innerText = jsPlus;
    

      
      
      // el.classList.add("quantity-container");
      // console.log("btn is clicked");
    });
  } )
  
}

addding();






// addEventListener.elements(onclick, () => {
//     console.log('btn is clicked')

// } )

// elements[0].onclick = function () {
//     alert('click');
//  }

// function handleClickEvent() {
//     alert('btn clicked');
// }
