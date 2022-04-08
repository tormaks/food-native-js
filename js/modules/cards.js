import { getData } from "../services/services";

function cards() {
	class MenuItem {
		constructor (img, alt, title, descr, price, parentSelector, ...args) {
			this.img = img;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.args = args;
			this.transfer = 70;
			this.parent = document.querySelector(parentSelector);
			this.changeToRUB();
		}

		changeToRUB() {
			this.price *= this.transfer;
		}

		render() {
			const element = document.createElement('div');
			if (this.args.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.args.forEach(className => element.classList.add(className));
			}
			element.innerHTML = `
				<img src=${this.img} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
				</div>`;
			this.parent.append(element);
		}
	}
}

export default cards;