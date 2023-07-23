const infoContainer = document.getElementById('section-info-detail');
const btnSubmit = document.querySelector('.btn-submit');
const formInfo = document.getElementById('form-info');
const emailInput = document.getElementById('emailInput');
const btnCertificate= document.getElementById('btn-certificate');
const subInput = document.getElementById('sub-input');
const moreBtn = document.querySelector('.more-btn');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let isCollapse= false;

moreBtn.addEventListener('click', (e) => {
    moreBtn.classList.toggle('more-btn--active');
});

btnSubmit.addEventListener('click', (e) => {
    // remove class
    if(emailInput.value.match(regexEmail)) {
        infoContainer.classList.remove('hide');
        formInfo.classList.add('hide');
    }else{
        subInput.classList.add('sub-input--danger');
        subInput.innerHTML = 'Email không hợp lệ, vui lòng nhập lại';
    }

});
btnCertificate.addEventListener('click', (e) => {
    scrollToSection('certificate');
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}