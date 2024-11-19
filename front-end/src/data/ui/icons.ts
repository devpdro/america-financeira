import { ICON } from 'src/presentation/assets'

type IconProps = {
  icon: React.ElementType
  link: string
}

export const ICONS: IconProps[] = [
  {
    icon: ICON.IconArrowDown,
    link: 'https://www.linkedin.com/company/am%C3%A9rica-financeira/mycompany/',
  },
  {
    icon: ICON.IconArrowDown,
    link: 'https://www.instagram.com/america.financeira/',
  },
  {
    icon: ICON.IconArrowDown,
    link: 'https://www.youtube.com/channel/UCFZ1B3eZmM9sSEc_SkwRFRQ',
  },
  {
    icon: ICON.IconArrowDown,
    link: 'https://www.facebook.com/americafinanceiraeseguros',
  },
  {
    icon: ICON.IconArrowDown,
    link: 'https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
  },
]
