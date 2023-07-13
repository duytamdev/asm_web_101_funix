const infoContainer = document.getElementById('section-info-detail');
const btnSubmit = document.querySelector('.btn-submit');
const formInfo = document.getElementById('form-info');

btnSubmit.addEventListener('click', (e) => {
    // remove class
    infoContainer.classList.remove('hide');
    formInfo.classList.add('hide');
});