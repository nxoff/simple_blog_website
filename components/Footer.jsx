'use client'

import { useEffect, useState } from 'react'
import '../styles/footer.css'

import Image from 'next/image'

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(-200);

  const handleScroll = () => {
    const position = window.scrollY - 200;

    if (position > 0)
      return

    setScrollPosition(position);

    console.log(scrollPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <footer style={{bottom: scrollPosition}}>
      <h3>nasze social media</h3>
    </footer>
  )
}

export default Footer
