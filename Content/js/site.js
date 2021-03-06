﻿/* jshint browser: true */

/* DEVNOTE: JSHint Option (jshint esversion: 6) is required to pass JSHint task when using ES6 let.
              HOWEVER: Uglify fails when using ES6 let
   TODO: find suitable replacement package for Uglify */

function addEvent(element, evnt, funct) {

    // kudos: https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
    if (element.attachEvent)  // IE < 9
        return element.attachEvent('on' + evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
}

function displayAddToCartPopup() {

    // create element
    var element = createElement();
    // add to parent
    var parentNode = document.querySelector('.item-sidebar-right');
    parentNode.appendChild(element);
    // add click event listener
    var closeButton = document.getElementById('removeAddtoCartPopup');
    addEvent(closeButton, 'click', removeAddtoCartPopup);
}

function createElement() {
    var html =
        //'<aside id = "addToCartPopup" class="popup-overlay">' +
        '    <div class="popup-content">' +
        '        <div class="popup-header">Added to Cart</div>' +
        '        <div class="font-weight-600 p-3">Thank you</div>' +
        '        <div class="popup-close-button-container">' +
        '            <button id="removeAddtoCartPopup" onclick="removeAddtoCartPopup()" class="btn btn-dark-orange-gradient" data-toggle="button" aria-pressed="false">Close</button>' +
        '        </div>' +
        '    </div>';
    // create popup
    var element = document.createElement('aside');
    element.setAttribute('id', 'addToCartPopup');
    element.classList.add('popup-overlay');
    element.innerHTML = html;
    return element;
}

// add to cart
function onAddtoCart() {

    // increment total items counter
    var totalItemsCount = Number(document.querySelector('.shopping-cart-item-count').textContent);
    totalItemsCount++;
    document.querySelector('.shopping-cart-item-count').textContent = totalItemsCount.toString();
    // display confirmation popup
    displayAddToCartPopup();
}

function removeAddtoCartPopup() {

    var element = document.getElementById('addToCartPopup');
    if (element.hasOwnProperty('remove')) {
        element.remove();
    } else {
        // polyfill
        Object.defineProperty(element, 'remove', {
            configurable: true,
            Enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode === null) {
                    return;
                }
                this.parentNode.removeChild(this);
            }
        });
    }
}
