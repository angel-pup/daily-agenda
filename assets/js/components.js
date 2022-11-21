$(function() {
    let cardToggles = document.getElementsByClassName('card-toggle');
    for (let i = 0; i < cardToggles.length; i++) {
        cardToggles[i].addEventListener('click', e => {
            e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
            e.currentTarget.parentElement.parentElement.childNodes[5].classList.toggle('is-hidden');
        });
    }

    let expandAll = document.getElementById('expand-all');
    expandAll.addEventListener('click', e => {
        for (let i = 0; i < cardToggles.length; i++) {
            cardToggles[i].parentElement.parentElement.childNodes[3].classList.remove('is-hidden');
            cardToggles[i].parentElement.parentElement.childNodes[5].classList.remove('is-hidden');
        }
    });

    let collapseAll = document.getElementById('collapse-all');
    collapseAll.addEventListener('click', e => {
        for (let i = 0; i < cardToggles.length; i++) {
            cardToggles[i].parentElement.parentElement.childNodes[3].classList.add('is-hidden');
            cardToggles[i].parentElement.parentElement.childNodes[5].classList.add('is-hidden');
        }
    })
});