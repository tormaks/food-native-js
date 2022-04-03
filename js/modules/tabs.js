function tabs(tabWrapper, windowTabs, tabsHeaders, tabHeader, tabActive) {
	const tabContainer = document.querySelector(tabWrapper),
		tabContent = tabContainer.querySelectorAll(windowTabs),
		tabsParent = document.querySelector(tabsHeaders),
		tabs = tabsParent.querySelectorAll(tabHeader);
}

export default tabs;