

document.addEventListener('DOMContentLoaded', () => {
  
    const quantityInput = document.getElementById('quantity');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');

   
    if (increaseBtn && decreaseBtn && quantityInput) {
      increaseBtn.addEventListener('click', function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
      });

      decreaseBtn.addEventListener('click', function() {
        let current = parseInt(quantityInput.value);
        if (current > 1) {
          quantityInput.value = current - 1;
        }
      });
    }

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        if (burger && burgerCon) {
            burger.classList.toggle("expanded");
            burgerCon.classList.toggle("slide-toggle");
        }
    }

    if (burger) {
        burger.addEventListener("click", hamburgerMenu, false);
    }

  
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxCloseBtn = document.getElementById('lightbox-close');

    const showLightbox = (content) => {
        lightboxContent.innerHTML = '';
        lightboxContent.appendChild(content);
        lightboxOverlay.style.display = 'flex';
    };

   
    const hideLightbox = () => {
        lightboxOverlay.style.display = 'none';
    };

  
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productInfo = event.target.nextElementSibling;
            
            if (productInfo) {
                const clonedContent = productInfo.cloneNode(true);
              
                clonedContent.style.display = 'block'; 
                showLightbox(clonedContent);
            }
        });
    });

    
    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', hideLightbox);
    }

   
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (event) => {
            if (event.target === lightboxOverlay) {
                hideLightbox();
            }
        });
    }

   
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightboxOverlay && lightboxOverlay.style.display === 'flex') {
            hideLightbox();
        }
    });
});


