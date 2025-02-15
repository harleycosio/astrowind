import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
     /* links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],*/
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Smart Keys',
          href: getPermalink('/services/smart-keys'),
        },
        {
          text: 'Car Unlocking',
          href: getPermalink('/services/car-unlocking'),
        },
        {
          text: 'Ignition Repair',
          href: getPermalink('/services/ignition-repair'),
        },
        {
          text: 'Key Duplication',
          //href: getPermalink('/contact'),
        },
        {
          text: 'Key Extraction',
          //href: getPermalink('/terms'),
        },
        {
          text: 'All keys lost',
          href: getPermalink('/services/all-keys-lost'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    }, 
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),

    },
  ],

};

export const footerData = {

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://reddit.com/r/onsitecarkey' },   
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/onsitecarkey' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/onsitecarkey' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://m.me/onsitecarkey' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made with <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a>
  `,
};
