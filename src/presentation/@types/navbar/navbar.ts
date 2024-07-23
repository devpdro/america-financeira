export type NavItemTypes = {
  label: string;
  link: string;
  children: NavItemTypes[];
  new?: string;
  blank?: string;
};

export type NavMobileTypes = {
  closeSideMenu: () => void;
};
