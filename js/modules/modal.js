function openModalWindow(modalSelector, timerOpenModal) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.classList.add('show');
	modalWindow.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (timerOpenModal) {
		clearInterval(timerOpenModal);
	}
}

function closeModalWindow(modalSelector) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.classList.add('hide');
	modalWindow.classList.remove('show');
	document.body.style.overflow = '';
}

function modal(modalSelector, btnsOpenModal, timerOpenModal) {
	const modalWindow = document.querySelector(modalSelector),
		btnsOpenModalWindow = document.querySelectorAll(btnsOpenModal),
		btnCloseModalWindow = modalWindow.querySelector('[data-close]');
}

export default modal;
export {openModalWindow};
export {closeModalWindow};