export type NavItemTypes = {
  children?: NavItemTypes[];
  label: string;
  link: string;
  new?: string;
  blank?: string;
};

export type NavMobileTypes = {
  closeSideMenu: () => void;
};
