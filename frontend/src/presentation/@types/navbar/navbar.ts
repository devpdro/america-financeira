export type NavItemTypes = {
  label: string;
  link?: string;
  children?: NavItemTypes[];
  iconImage?: string;
};

export type NavMobileProps = {
  closeSideMenu: () => void;
};
