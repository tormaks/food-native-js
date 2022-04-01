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
}

export default calculator;