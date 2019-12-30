/* jshint browser: true */

// add to cart
function onAddtoCart() {
    // let itemCount = ...
    /* DEVNOTE: JSHint Option (jshint esversion: 6) is required to pass JSHint task when using ES6 let.
                  HOWEVER: Uglify fails when using ES6 let */
    var itemCount = Number(document.querySelector('.shopping-cart-item-count').textContent);
    itemCount++;
    document.querySelector('.shopping-cart-item-count').textContent = itemCount.toString();

    togglePopup();
}

// toggle popup
function togglePopup() {
    document.querySelector('.popup-overlay').classList.toggle('active'); 
    document.querySelector('.popup-content').classList.toggle('active'); 
}