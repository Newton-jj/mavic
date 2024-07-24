// cart.js

document.addEventListener('DOMContentLoaded', () => {
	const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
	const totalPrice = localStorage.getItem('totalPrice') || 0;
  
	const cartItemsContainer = document.getElementById('cart-items');
	const cartTotalElement = document.getElementById('cart-total');
  
	cartItems.forEach(item => {
	  const itemElement = document.createElement('div');
	  itemElement.classList.add('cart-item');
	  itemElement.innerHTML = `
		<h3>${item.product}</h3>
		<strong>Ksh. ${item.price}</strong>
	  `;
	  cartItemsContainer.appendChild(itemElement);
	});
  
	cartTotalElement.innerText = `Total: Ksh. ${totalPrice}`;
  });
  