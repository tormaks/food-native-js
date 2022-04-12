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

	function openModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModalWindow(modalSelector, timerOpenModal);
			window.removeEventListener('scroll', openModalByScroll);
		}
	}

	btnsOpenModalWindow.forEach(btn => {
		btn.addEventListener('click', () => openModalWindow(modalSelector, timerOpenModal));
		btnCloseModalWindow.addEventListener('click', () => closeModalWindow(modalSelector));
	});

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow) {
			closeModalWindow(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModalWindow(modalSelector);
		}
	});

	window.addEventListener('scroll', openModalByScroll);
}

export default modal;
export {openModalWindow};
export {closeModalWindow};