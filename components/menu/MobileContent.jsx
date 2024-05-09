import '../../styles/menu.css'

import Image from 'next/image'
import Link from 'next/link'

import Policy from "./Policy"

const MobileContent = ({ styleState }) => {
  return (
    <section id='mobile-options-parent' className={styleState}>
      <div className="hamburger-menu-content-container">
        <Image src={'/logo.png'} width={200} height={150} alt="logo" />
        <Link href={'/'}>Najnowsze Posty!</Link>
        <Link href={'/'}>Szukaj Artykułów</Link>
        <Link href={'/'}>Twój Profil</Link>
      </div>
      <div className="hamburger-menu-socials-container">
        <div className="hamburger-menu-socials-wrapper">
          <Image src={'/colored-socials/facebook-colored.svg'} width={48} height={48} alt="FB" />
          <Image src={'/colored-socials/instagram-colored.svg'} width={48} height={48} alt="IG" />
          <Image src={'/colored-socials/x-colored.svg'} width={48} height={48} alt="X" />
        </div>
        <Policy />
      </div>
    </section>
  )
}

export default MobileContent
