export type NavItemTypes = {
  label: string;
  link?: string;
  children?: NavItemTypes[];
  iconImage?: string;
};

export type NavMobileTypes = {
  closeSideMenu: () => void;
};
