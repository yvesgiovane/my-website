let currentImageIndex = 0;
const images = document.querySelectorAll('.main-visual');
let commercialClicked = false;

function showGallery() {
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

function nextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

function prevImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
}

function toggleDropdown(event) {
    event.preventDefault();
    if (commercialClicked) {
        document.querySelector('.dropdown-content').style.display = 'flex';
    } else {
        commercialClicked = true;
    }
}

document.addEventListener('DOMContentLoaded', showGallery);