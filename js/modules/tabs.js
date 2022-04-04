function tabs(tabWrapper, windowTabs, tabsHeaders, tabHeader, tabActive) {
	const tabContainer = document.querySelector(tabWrapper),
		tabContent = tabContainer.querySelectorAll(windowTabs),
		tabsParent = document.querySelector(tabsHeaders),
		tabs = tabsParent.querySelectorAll(tabHeader);

	let idTabs;

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'anim');
		});

		tabs.forEach(item => {
			item.classList.remove(tabActive);
		});
	}
}

export default tabs;