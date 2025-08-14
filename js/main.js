//ORDER CUONTER
const quantityInput = document.querySelector('#quantity');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');

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

//BURGER MENU
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

//LIGHTBOXES
const readMoreButtons = document.querySelectorAll('.read-more-btn');
const lightboxOverlay = document.querySelector('#lightbox-overlay');
const lightboxContent = document.querySelector('#lightbox-content');
const lightboxCloseBtn = document.querySelector('#lightbox-close');

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

