
// Navbar

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active')
  })
}

if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
}


  // Function to check if the user is authenticated
  function isAuthenticated() {
    return !!localStorage.getItem("token"); // Check if a token is present in localStorage
  }

 // Function to update the navigation menu based on authentication status
function updateNavigationMenu() {
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  if (loginLink && logoutLink) {
      if (isAuthenticated()) {
          // User is authenticated
          loginLink.style.display = "none";
          logoutLink.style.display = "block";
      } else {
          loginLink.style.display = "block";
          logoutLink.style.display = "none";
      }
  }
}

// Wrap the code inside a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Call the updateNavigationMenu function when the DOM is ready
  updateNavigationMenu();

  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
      logoutButton.addEventListener("click", function () {
          // Clear the token from localStorage when the user logs out
          localStorage.removeItem("token");
          // Update the navigation menu
          updateNavigationMenu();
      });
  }
});




     async function fetchAndDisplayProducts() {
        try {
            const response = await fetch("products.json");
            if (!response.ok) {
                throw new Error('Fetch request failed');
            }
            const products = await response.json();

            const productContainer = document.getElementById('product-list');

            // Limit to 8 products
            const limitedProducts = products.slice(0, 8);
            const fragment = document.createDocumentFragment();

            limitedProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product');

                productItem.innerHTML = `
                <div class"pro-container">
                <div class="pro">
                    <div class="image-container"> 
                <img  src="${product.image}" alt="${product.title}">
         </div>
            <div class="des">
                <span>${product.category}</span>
                <h4>${product.title}</h4>
               <div class="star">
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                </div>
                <h3>$${product.price}</h3>
              <a href=""><i class="fa fa-shopping-cart cart"></i></a>
            </div>
            </div>
            </div>
    
          
        `;

                fragment.appendChild(productItem);
            });

            // Append the fragment to the productContainer
            productContainer.appendChild(fragment);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Call the function to fetch and display products when the page loads
    window.addEventListener('load', fetchAndDisplayProducts);



    // Product details
    
    