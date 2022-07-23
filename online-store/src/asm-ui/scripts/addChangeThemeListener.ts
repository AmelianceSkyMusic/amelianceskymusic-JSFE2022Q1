export const addChangeThemeListener = () => {
	const btnTheme$ = document.querySelector('#button-theme') as HTMLButtonElement;

	btnTheme$.addEventListener('click', () => {
		if (btnTheme$.classList.contains('current-dark')) {
			btnTheme$.classList.remove('current-dark');
			btnTheme$.classList.add('current-light');
			(document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'not all';
			(document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'all';
		} else {
			btnTheme$.classList.remove('current-light');
			btnTheme$.classList.add('current-dark');
			(document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'all';
			(document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'not all';
		}
	});
};
