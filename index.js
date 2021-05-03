const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger img');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
	if (mobileMenu.style.display == 'flex') {
		mobileMenu.style.display = 'none';
		mobileMenu.style.opacity = '0';
		hamburgerIcon.setAttribute('src', './images/icon-hamburger.svg');
		body.style.overflow = 'visible';
	} else {
		mobileMenu.style.display = 'flex';
		mobileMenu.style.opacity = '1';
		hamburgerIcon.setAttribute('src', './images/icon-close.svg');
		body.style.overflow = 'hidden';
	}
});
