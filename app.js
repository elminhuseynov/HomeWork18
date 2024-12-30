const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', function() {
        images.forEach(img => img.classList.remove('scale'));
        this.classList.add('scale');
    });
});

const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        listItems.forEach(i => i.classList.remove('color'));
        this.classList.add('color');
    });
});
