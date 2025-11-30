import { getBlogPermalink, getPermalink } from "./utils/permalinks";

export const headerData = {
	links: [
		{
			text: "Home",
			href: getPermalink("/"),

		},
		{
			text: "Services",
			links: [
				{
					text: "Smart Keys",
					href: getPermalink("/services/smart-keys"),
				},
				{
					text: "Car Unlocking",
					href: getPermalink("/services/car-unlocking"),
				},
				{
					text: "Ignition Repair",
					href: getPermalink("/services/ignition-repair"),
				},
				{
					text: "All keys lost",
					href: getPermalink("/services/all-keys-lost"),
				},
			],
		},
		{
			text: "Contact",
			href: getPermalink("/contact"),
		},
		{
			text: "About us",
			href: getPermalink("/about"),
		},
		{
			text: "Blog",
			href: getBlogPermalink(),
		},
	],
};

export const footerData = {
	secondaryLinks: [
		{ text: "Terms", href: getPermalink("/terms") },
		{ text: "Privacy Policy", href: getPermalink("/privacy") },
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
		phone: "(954) 998-5887", // Update with actual number
		email: "info@onsitecarkey.com",
	},
};
