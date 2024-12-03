import { Meta } from 'src/presentation/components'

import * as ICON from 'react-icons/ai'

import S from './locations.module.scss'

const LOCATIONS = [
  {
    name: 'São Pedro-SP',
    ramal: 'Matriz',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://goo.gl/maps/XXXXXX',
  },
  {
    name: 'Campinas-SP',
    ramal: '4012',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519999744679&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Bernardino+de+Campos,+471+-+Centro,+Campinas+-+SP,+13010-150/@-22.9053988,-47.0675227,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8c8b0db4e8b11:0xacf82ad84bc13544!8m2!3d-22.9054038!4d-47.065334?shorturl=1',
  },
  {
    name: 'Hortolândia-SP',
    ramal: '4018',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519998530457&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Zulmira+Soares+dos+Santos+-+Jardim+Santa+Clara+do+Lago+I,+Hortol%C3%A2ndia+-+SP,+13186-381/@-22.8893724,-47.1968044,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8b90d2b9f6e69:0xdfe15f9ee6d11f29!8m2!3d-22.8893774!4d-47.1946157!15sCi1SdWE6IFp1bG1pcmEgUy4gRG9zIFNhbnRvcywxOTkgSkQgU2FudGEgQ2xhcmGSAQVyb3V0ZQ?shorturl=1',
  },
  {
    name: 'São Carlos-SP',
    ramal: '4016',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5516997983710&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Maj.+Jos%C3%A9+In%C3%A1cio,+2373+-+Centro,+S%C3%A3o+Carlos+-+SP,+13560-161/@-22.0168079,-47.8894557,17z/data=!3m1!4b1!4m5!3m4!1s0x94b877242a14f313:0x8e6543ecd4942ca9!8m2!3d-22.0168129!4d-47.887267?shorturl=1',
  },
  {
    name: 'Jundiaí-SP',
    ramal: '4003',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519974175639&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/Rua+Cica,+600+-+Vila+Garcia,+Jundia%C3%AD+-+SP,+13206-765/@-23.2061044,-46.8826113,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf26c90e2b6bcd:0x2866a6ecb1855f26!8m2!3d-23.2061093!4d-46.8804226?shorturl=1',
  },
  {
    name: 'Piracicaba-SP',
    ramal: '6044',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519996243477&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Ipiranga,+876+-+Centro,+Piracicaba+-+SP,+13400-485/@-22.7301193,-47.6509749,19z/data=!3m1!4b1!4m5!3m4!1s0x94c6310609e08921:0x42089072b10baa8f!8m2!3d-22.7301205!4d-47.6504277',
  },
  {
    name: 'Rio Claro-SP',
    ramal: '4004',
    whatsapp:
      'https://api.whatsapp.com/send?phone=5519982591097&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
    maps: 'https://www.google.com/maps/place/R.+Quatro,+768+-+Centro,+Rio+Claro+-+SP,+13500-030/@-22.4128926,-47.5619534,17z/data=!3m1!4b1!4m5!3m4!1s0x94c7da5a574cfa39:0x59f2f787c699a9a7!8m2!3d-22.4128976!4d-47.5597647?shorturl=1',
  },
]

const Locations = () => (
  <div>
    <Meta
      title="Nossas Unidades - América Financeira"
      description="Descubra as unidades da América Financeira em todo o Brasil. Localize a filial mais próxima para atendimento especializado."
      keywords="América Financeira, filiais, unidades, atendimento financeiro, Campinas, serviços financeiros, ramais, localização"
    />
    <div className={S['locations-container']}>
      <h1 className={S['title-section']}>Nossas unidades</h1>
      <div className={S['locations-box']}>
        {LOCATIONS.map(({ name, ramal, whatsapp, maps }, key) => (
          <div className={S.box} key={key}>
            <h1 className={S['title-box']}>{name}</h1>
            <p className={S.paragraph}>
              Ramal: <em>{ramal}</em>
            </p>
            <div className={S['icons-section']}>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={S.icon}>
                <ICON.AiOutlineWhatsApp className={S.icon} size={28} />
              </a>
              <a href={maps} target="_blank" rel="noopener noreferrer" className={S.icon}>
                <ICON.AiOutlineEnvironment className={S.icon} size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Locations
