'use client'

import { useEffect, useState } from 'react'
import '../styles/footer.css'

import Image from 'next/image'
import { edgeServerPages } from 'next/dist/build/webpack/plugins/pages-manifest-plugin'

const Footer = () => {
  const [scrollValue, setScrollValue] = useState(-200);

  const handleScroll = () => {

    if (scrollValue > -6) return

    let value_reduced = scrollValue + 15
    setScrollValue(value_reduced)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  });

  return (
    <footer style={{bottom: scrollValue}}>
      <h3>nasze social media</h3>
    </footer>
  )
}

export default Footer
