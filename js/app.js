
baguetteBox.run('.gallery');

let imgSearch = document.getElementById('searchfield');
imgSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let captions = document.querySelectorAll( 'data-caption' );
    captions.forEach( caption => {
        if (caption.textContent.toLowerCase().includes( currentValue )) {
            caption.parentNode.style.display = 'block';
        } else {
            caption.parentNode.style.display = 'none';
        }
    });
});