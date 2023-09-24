
function showToast(message) {
    const toasterContainer = document.getElementById('toaster-container');
    const toaster = document.createElement('div');
    toaster.className = 'toaster';
    toaster.innerText = message;
    toasterContainer.appendChild(toaster);
    toaster.offsetHeight;

    toaster.style.opacity = 1;
    setTimeout(() => {
        toaster.style.opacity = 0; 
        setTimeout(() => {
            toaster.remove(); 
        }, 500);
    }, 5000); 
}





function addToLocalStorage(product) {
    let existingData =JSON.parse(localStorage.getItem("productDatas")) || [];
 
    existingData.push(product);

    localStorage.setItem("productDatas", JSON.stringify(existingData));

     // Update the cart count
updateCartCount(existingData.length);
  }

  // Function to update the cart count element
  function updateCartCount(count) {
const desktopCartItemCountElement = document.querySelector("#cart-item-count"); // Desktop cart count
const mobileCartItemCountElement = document.querySelector("#mobile-cart-icon #cart-item-count"); // Mobile cart count

if (desktopCartItemCountElement) {
  desktopCartItemCountElement.textContent = count;
}

if (mobileCartItemCountElement) {
  mobileCartItemCountElement.textContent = count;
}
}

  // Function to handle when a product card is clicked
  function onButtonClick(product) {
    if (product && product.title) {
     
      addToLocalStorage(product);
     showToast("Item Added to Cart")
    } else {
      console.error("Invalid product data:", product);
    }
  }

  const addToCartButton = document.querySelector("#add-to-cart-button-id");
  addToCartButton.addEventListener("click", () => {
    onButtonClick(productData);
  });

  // Initialize the cart count when the page loads
document.addEventListener("DOMContentLoaded", () => {
const existingData = JSON.parse(localStorage.getItem("productDatas")) || [];
updateCartCount(existingData.length);
});

  function getCartData() {
    const productData = JSON.parse(localStorage.getItem("productData"));
    return productData;
  }




  // Function to display product data on the page
  function displayProductData(productData) {
    if (productData) {
      document.querySelector(".product-description h1").innerHTML =
        productData.title;
      document.querySelector(".product-description p").innerHTML =
        productData.description;
      document.querySelector(".product-price span").innerHTML =
        productData.price;

      const productImage = document.querySelector("#product-image");
      if (productImage) {
        productImage.src = productData.image;
      }
    }
  }

  const productData = getCartData();
  displayProductData(productData);