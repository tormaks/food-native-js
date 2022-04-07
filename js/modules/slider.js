function slider({container, wrapper, slide, prevArrow, nextArrow, totalCounter, currentCounter, field}) {
	let offset = 0;
	let slideIndex = 1;

	const slider = document.querySelector(container),
		slidesWrapper = slider.querySelector(wrapper),
		slides = slidesWrapper.querySelectorAll(slide),
		prev = slider.querySelector(prevArrow),
		next = slider.querySelector(nextArrow),
		total = slider.querySelector(totalCounter),
		current = slider.querySelector(currentCounter),
		width = window.getComputedStyle(slidesWrapper).width,
		slidesField = slidesWrapper.querySelector(field);

	let idSlides;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent =  `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent =  slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];
	indicators.classList.add('carousel-indicators');

	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.classList.add('dot');
		dot.setAttribute('data-slide-to', i + 1);

		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	slides.forEach(slide => {
		slide.style.width = width;
	});

	const onlyNumber = str => +str.replace(/\D/ig, '');
}

export default slider;