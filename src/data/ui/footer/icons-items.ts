import { Icons } from '@/presentation/assets'

interface IconsItemsTypes {
  icon: React.ElementType
  link: string
}

const IconsItems: IconsItemsTypes[] = [
  {
    icon: Icons.BiLogoLinkedin,
    link: 'https://www.linkedin.com/company/am%C3%A9rica-financeira/mycompany/',
  },
  {
    icon: Icons.BiLogoInstagramAlt,
    link: 'https://www.instagram.com/america.financeira/',
  },
  {
    icon: Icons.FaYoutube,
    link: 'https://www.youtube.com/channel/UCFZ1B3eZmM9sSEc_SkwRFRQ',
  },
  {
    icon: Icons.BiLogoFacebook,
    link: 'https://www.facebook.com/americafinanceiraeseguros',
  },
  {
    icon: Icons.IoLogoWhatsapp,
    link: 'https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
  },
]

export default IconsItems
