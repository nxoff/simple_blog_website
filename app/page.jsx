import '../styles/home.css'

import Link from 'next/link'

import BlogList from './BlogList'

const Home = () => {
  return (
    <section className='home'>
      <header>
        <h1>Blogs</h1>
      </header>
      <BlogList/>
      <section className='home-bottom-content'>
        <Link href={'/'}>Zobacz najnowsze blogi!</Link>
      </section>
    </section>
  )
}

export default Home
