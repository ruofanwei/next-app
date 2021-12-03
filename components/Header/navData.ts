export interface NavItem {
  id?: number;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    id: 1,
    label: '常見問題',
  },
  {
    id: 2,
    label: '最新消息',
  },
  {
    id: 3,
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
