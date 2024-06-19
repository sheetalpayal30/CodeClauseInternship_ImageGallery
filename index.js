document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector('#search-box');
    const images = document.querySelectorAll('.container .image-container .image');

    searchBox.oninput = () => {
        const value = searchBox.value.toLowerCase();
        images.forEach(image => {
            const title = image.getAttribute('data-title').toLowerCase();
            if (title.includes(value) || value === '') {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    };
});