import { getBlogPermalink, getPermalink } from "./utils/permalinks";
import { useTranslations } from "./i18n/utils";

export const getHeaderData = (lang: 'en' | 'es' = 'en') => {
	const t = useTranslations(lang);
	
	return {
		links: [
			{
				text: t('nav.home'),
				href: getPermalink(lang === 'en' ? '/' : `/${lang}`),
			},
			{
				text: t('nav.services'),
				links: [
					{
						text: t('nav.smartKeys'),
						href: getPermalink(lang === 'en' ? '/services/smart-keys' : `/${lang}/services/smart-keys`),
					},
					{
						text: t('nav.carUnlocking'),
						href: getPermalink(lang === 'en' ? '/services/car-unlocking' : `/${lang}/services/car-unlocking`),
					},
					{
						text: t('nav.ignitionRepair'),
						href: getPermalink(lang === 'en' ? '/services/ignition-repair' : `/${lang}/services/ignition-repair`),
					},
					{
						text: t('nav.allKeysLost'),
						href: getPermalink(lang === 'en' ? '/services/all-keys-lost' : `/${lang}/services/all-keys-lost`),
					},
				],
			},
			{
				text: t('nav.contact'),
				href: getPermalink(lang === 'en' ? '/contact' : `/${lang}/contact`),
			},
			{
				text: t('nav.about'),
				href: getPermalink(lang === 'en' ? '/about' : `/${lang}/about`),
			},
			{
				text: t('nav.blog'),
				href: getBlogPermalink(), // Note: blog might need more work for i18n
			},
		],
	};
};

export const getFooterData = (lang: 'en' | 'es' = 'en') => {
	const t = useTranslations(lang);
	
	return {
		secondaryLinks: [
			{ text: lang === 'en' ? "Terms" : "Términos", href: getPermalink(lang === 'en' ? '/terms' : `/${lang}/terms`) },
			{ text: lang === 'en' ? "Privacy Policy" : "Política de Privacidad", href: getPermalink(lang === 'en' ? '/privacy' : `/${lang}/privacy`) },
		],
		socialLinks: [
			{
				ariaLabel: "Reddit",
				icon: "tabler:brand-reddit",
				href: "https://reddit.com/u/onsitecarkey",
			},
			{
				ariaLabel: "TikTok",
				icon: "tabler:brand-tiktok",
				href: "https://www.tiktok.com/@onsitecarkey",
			},
			{
				ariaLabel: "Instagram",
				icon: "tabler:brand-instagram",
				href: "https://www.instagram.com/harley.cosio",
			},
			{
				ariaLabel: "Facebook",
				icon: "tabler:brand-facebook",
				href: "https://www.facebook.com/people/Onsite-Car-Key/61573376696110/",
			},
		],
		companyInfo: {
			name: "Onsite Car Key",
			address: "South Florida",
			phone: "(954) 998-5887",
			email: "info@onsitecarkey.com",
		},
	};
};

export const headerData = getHeaderData('en');
export const footerData = getFooterData('en');
