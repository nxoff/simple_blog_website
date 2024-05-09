import '../../styles/menu.css'

import Link from 'next/link'

const RegularContent = () => {
  return (
    <section className="regular-content-container">
      <Link href={'/'}>Najnowsze Posty!</Link>
      <Link href={'/'}>Szukaj Artykułów</Link>
      <Link href={'/'}>Twój Profil</Link>
    </section>
  )
}

export default RegularContent
