document.addEventListener("DOMContentLoaded", () => {
  const cart = {
    items: [],
    totalPrice: 0,
  };

  

  const cartDisplay = document.querySelector(".ratting-l p");
  const addButtons = document.querySelectorAll(".add");
  const sub_l = document.querySelector(".sub-l");
  const sub_r = document.querySelector(".sub-r");
  const reqCustom = document.querySelector(".req-custom");

  //for subscription togle
  sub_l.onclick =()=>{
    sub_l.style.backgroundColor ="var(--yellow-color)"
    sub_r.style.backgroundColor ="white"
  }
  sub_r.onclick =()=>{
    sub_r.style.backgroundColor ="var(--yellow-color)"
    sub_l.style.backgroundColor ="white"
  }
  //alert added
  reqCustom.onclick =()=>{
    alert("Custmization request sent")
  }

  // Update Cart Display
  const updateCartDisplay = () => {
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartDisplay.innerHTML = `${totalItems} items added <span>&#8377;${cart.totalPrice.toFixed(2)}</span>`;
  };

  // Add to Cart Functionality
  addButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const menuCard = btn.closest(".menu-card");
      const itemName = menuCard.querySelector("h3").innerText;
      const itemPrice = parseFloat(menuCard.querySelector(".rate span").innerText);

      const existingItem = cart.items.find(item => item.name === itemName);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.items.push({ name: itemName, price: itemPrice, quantity: 1 });
      }

      updateCartDisplay();
    });
  });
});
