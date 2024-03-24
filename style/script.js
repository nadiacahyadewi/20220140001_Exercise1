function show() {
    var confirmation = confirm("Anda akan diarahkan ke halaman lain. Lanjutkan?");
    if (confirmation) {
        window.location.href = "0";
    }
}

function toggleDescription(card) {
    const description = card.querySelector('.description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        card.classList.add('open');
    } else {
        description.style.display = 'none';
        card.classList.remove('open');
    }
}


