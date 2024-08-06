import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type CustomLinkProps = {
  href: string
  isUnderConstruction?: boolean
  children: ReactNode
  ariaLabel: string
  className?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, isUnderConstruction, children, ariaLabel, className }) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isUnderConstruction) {
      e.preventDefault()
      router.push({
        pathname: '/_error', // Atualize para o caminho correto da sua página de erro
        query: { isUnderConstruction: true },
      })
    }
  }

  return (
    <Link legacyBehavior href={href} passHref>
      <a className={className} onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
