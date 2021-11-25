export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: '常見問題',
    children: [
      {
        label: 'Explore',
        subLabel: 'QA',
        href: '#',
      },
      {
        label: 'News',
        subLabel: 'today news',
        href: '#',
      },
    ],
  },
  {
    label: 'Search',
    children: [
      {
        label: 'find product',
        href: '#',
      },
    ],
  },
];
