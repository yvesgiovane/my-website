let currentImageIndex = 0;
let currentGallery = 'fabrique'; // 默认设置为 'fabrique'
const fabriqueImages = document.querySelectorAll('.fabrique-visual');
const sn1604Images = document.querySelectorAll('.sn1604-visual');

function showGallery() {
    // 隐藏所有图片
    fabriqueImages.forEach(img => img.style.display = 'none');
    sn1604Images.forEach(img => img.style.display = 'none');

    // 显示当前画廊的图片
    const images = currentGallery === 'fabrique' ? fabriqueImages : sn1604Images;
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentImageIndex);
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

function nextImage() {
    const images = currentGallery === 'fabrique' ? fabriqueImages : sn1604Images;
    images[currentImageIndex].classList.remove('active');
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    images[currentImageIndex].style.display = 'block';
}

function prevImage() {
    const images = currentGallery === 'fabrique' ? fabriqueImages : sn1604Images;
    images[currentImageIndex].classList.remove('active');
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
    images[currentImageIndex].style.display = 'block';
}

function showFabriqueGallery(event) {
    event.preventDefault();
    currentGallery = 'fabrique';
    currentImageIndex = 0;
    showGallery();
}

function showSN1604Gallery(event) {
    event.preventDefault();
    currentGallery = 'sn1604';
    currentImageIndex = 0;
    showGallery();
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', showGallery);