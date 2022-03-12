const selectedPackage = document.querySelector('.selected');
const optionsMenu = document.querySelector('.options-container');
const basicPackage = document.querySelector('.option .basic');
const proPackage = document.querySelector('.option .pro');
const ultimatePackage = document.querySelector('.option .ultimate');

showIndexPageSelectedPackage();

function showIndexPageSelectedPackage() {
    const indexPageSelectedPackage = getPackageName();
    const packageDetail = {
        Basic: 'Free',
        Pro: '$9.99',
        Ultimate: '$19.99'
    };
    if (packageDetail.hasOwnProperty(`${indexPageSelectedPackage}`)) {
        selectedPackage.childNodes[0].data = `${indexPageSelectedPackage} Pack`;
        selectedPackage.childNodes[1].innerText = packageDetail[`${indexPageSelectedPackage}`];
        for (let package of optionsMenu.children) {
            if (package.firstElementChild.childNodes[1].innerText === selectedPackage.childNodes[1].innerText) {
                package.firstElementChild.children[1].classList.add('show-check-icon');
                package.firstElementChild.nextElementSibling.setAttribute('checked', 'true');
            };
        };
    } else basicPackage.children[1].classList.add('show-check-icon');

    function getPackageName() {
        const queryString = new URLSearchParams(window.location.search);
        return queryString.get('package');
    }
};

document.addEventListener('click', function (e) {
    hidePackageMenu();
});

selectedPackage.addEventListener('click', e => {
    showPackageMenu();
    e.stopPropagation();
});

optionsMenu.addEventListener('click', e => {
    e.stopPropagation();
});

basicPackage.addEventListener('click', selectPackage);
proPackage.addEventListener('click', selectPackage);
ultimatePackage.addEventListener('click', selectPackage);


function showPackageMenu() {
    optionsMenu.parentElement.classList.toggle('show-options-container');
};

function hidePackageMenu() {
    optionsMenu.parentElement.classList.remove('show-options-container');
};

function selectPackage() {
    for (let package of optionsMenu.children) {
        if (package.firstElementChild === this) {
            this.children[1].classList.add('show-check-icon');
            selectedPackage.childNodes[0].data = this.childNodes[0].data;
            selectedPackage.childNodes[1].innerText = this.childNodes[1].innerText;
            this.nextElementSibling.setAttribute('checked', 'true');
        } else package.firstElementChild.children[1].classList.remove('show-check-icon');
    };
    hidePackageMenu();
};