const nav =
	document.querySelector(
		'.nav'
	); /*teraz jak wstawimy zmienną nav, to będzie ona oznaczała całego diva z klasą nav*/
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('nav__item');
const handleNav = () => {
	nav.classList.toggle('nav--active');
};
navBtn.addEventListener('click', handleNav);
