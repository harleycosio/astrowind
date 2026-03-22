import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useLanguageSwitcher(url: URL) {
	const currentLang = getLangFromUrl(url);
	const alternateLang = currentLang === 'en' ? 'es' : 'en';

	// For the language switcher, we swap between /something and /es/something
	let pathname = url.pathname;

	if (currentLang === 'en') {
		// e.g., /about -> /es/about
		// Remove leading slash if any before joins
		pathname = `/es${pathname === '/' ? '' : pathname}`;
	} else {
		// e.g., /es/about -> /about
		pathname = pathname.replace(`/${currentLang}`, '');
		if (pathname === '') pathname = '/';
	}

	return {
		currentLang,
		alternateLang,
		alternatePath: pathname,
	};
}
