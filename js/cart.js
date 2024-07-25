document.addEventListener('DOMContentLoaded', () => {
	const cartItemsContainer = document.getElementById('cart-items');
	const cartTotalElement = document.getElementById('total');
	const cartSubTotalElement = document.getElementById('subtotal');
	const cart = JSON.parse(localStorage.getItem('cart')) || [];

	if (cart.length === 0) {
		cartItemsContainer.innerHTML = '<p>No items in cart</p>';
		cartTotalElement.innerText = `Total: Ksh. 0`;
		cartSubTotalElement.innerText = `Total: Ksh. 0`;
	} else {
		let totalPrice = 0;

		cart.forEach(item => {
			const price = parseFloat(item.price);
			totalPrice += price;

			const cartItem = document.createElement('div');
			cartItem.classList.add('cart-item');
			cartItem.innerHTML = `
			<div class='flex'>
				<p>${item.product}</p>
				<strong>Ksh. ${price.toFixed(2)}</strong>
			</div>
			`;
			cartItemsContainer.appendChild(cartItem);
		});

		cartTotalElement.innerText = `Total: Ksh. ${totalPrice}`;
		cartSubTotalElement.innerText = `Total: Ksh. ${totalPrice}`;
	}
});
