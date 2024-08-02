export type NavItemTypes = {
  label: string;
  link: string;
  new?: string;
  blank?: string;
  children?: NavItemTypes[];
};

export type NavMobileTypes = {
  closeSideMenu: () => void;
};
