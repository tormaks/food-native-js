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

	function calcTotal() {
		if (!gender || !height || !weight || !age || !ratio) {
			result.textContent = '___';
		} else {
			if (gender === 'woman') {
				result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
			} else {
				result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
			}
		}
	}

	calcTotal();

	function getStaticData(parentSelector, activeClass = 'calculating__choose-item_active') {
		const elements = document.querySelectorAll(`${parentSelector} div`);

		elements.forEach(elem => {
			elem.addEventListener('click', (evt) => {
				if (evt.target.getAttribute('data-ratio')) {
					ratio = elem.getAttribute('data-ratio');
					localStorage.setItem('ratio', ratio);
				} else {
					gender = elem.getAttribute('id');
					localStorage.setItem('gender', gender);
				}

				elements.forEach(elem => {
					elem.classList.remove(activeClass);
					evt.target.classList.add(activeClass);
				});
				calcTotal();
			});
		});
	}

	getStaticData('.calculating__choose_big');
	getStaticData('#gender');
}

export default calculator;