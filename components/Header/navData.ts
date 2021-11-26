export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: '找營地',
  },
  {
    label: '常見問題',
  },
  {
    label: '最新消息',
  },
  {
    label: '我要開店',
  },
  /*{
    label: '常見問題',
    children: [
      {
        label: 'find product',
        href: '#',
      },
    ],
  },*/
];
