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

	const nextSlide = () => {
		if (offset == (onlyNumber(width) * (slides.length - 1))) {
			offset = 0;
		} else {
			offset += onlyNumber(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			current.textContent =  `0${slideIndex}`;
		} else {
			current.textContent =  slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = '1';
	};

	const prevSlide = () => {
		if (offset == 0) {
			offset = onlyNumber(width) * (slides.length - 1);
		} else {
			offset -= onlyNumber(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			current.textContent =  `0${slideIndex}`;
		} else {
			current.textContent =  slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = '1';
	};

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = onlyNumber(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				current.textContent =  `0${slideIndex}`;
			} else {
				current.textContent =  slideIndex;
			}

			dots.forEach(dot => dot.style.opacity = ".5");
			dots[slideIndex-1].style.opacity = 1;
		});
	});

	const autoSwitchSlides = () => {
		idSlides = setInterval(nextSlide, 3000);
	};

	slider.addEventListener('mouseleave', (event) => {
		const target = event.target;
		if (target && target.classList.contains(container.slice(1))) {
			autoSwitchSlides();
		}
	});

	slider.addEventListener('mouseenter', (event) => {
		const target = event.target;
		if (target && target.classList.contains(container.slice(1))) {
			clearInterval(idSlides);
		}
	});

	next.addEventListener('click', nextSlide);

	prev.addEventListener('click', prevSlide);

	autoSwitchSlides();
}

export default slider;