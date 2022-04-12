function openModalWindow(modalSelector, timerOpenModal) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.classList.add('show');
	modalWindow.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (timerOpenModal) {
		clearInterval(timerOpenModal);
	}
}

export {openModalWindow};