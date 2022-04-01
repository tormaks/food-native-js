function calculator() {
	const result = document.querySelector('.calculating__result span');

	let gender,
		height,
		weight,
		age,
		ratio;

	if (localStorage.getItem('gender')) {
		gender = localStorage.getItem('gender');
	} else {
		gender = 'woman';
		localStorage.setItem('gender', gender);
	}

	if (localStorage.getItem('ratio')) {
		ratio = localStorage.getItem('ratio');
	} else {
		ratio = 1.375;
		localStorage.setItem('ratio', ratio);
	}

	function initLocalStorage(parentSelector, activeCLass = 'calculating__choose-item_active') {
		const elements = document.querySelectorAll(parentSelector);

		elements.forEach(elem => {
			elem.classList.remove(activeCLass);
			if (elem.getAttribute('id') === localStorage.getItem('gender')) {
				elem.classList.add(activeCLass);
			}

			if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				elem.classList.add(activeCLass);
			}
		});
	}

	initLocalStorage('.calculating__choose_big div');
	initLocalStorage('#gender div');
}

export default calculator;