
baguetteBox.run('.gallery');

const imgSearch = document.getElementById('searchfield');
imgSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    const captions = document.querySelectorAll( '[data-caption]' );
    captions.forEach( caption => {
        if (caption.getAttribute('data-caption').toLowerCase().includes( currentValue )) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    });
});