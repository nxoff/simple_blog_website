'use client'

import { useEffect, useState } from 'react'
import '../styles/footer.css'

import Image from 'next/image'

const Footer = () => {
  const [scrollValue, setScrollValue] = useState(-200);

  const handleScroll = (e) => {
    let delta = e.deltaY
    let value_update

    if (delta > 0 && scrollValue < -5) {
      value_update = scrollValue + 15
      setScrollValue(value_update)
    }

    if (delta < 0 && scrollValue > -200) {
      value_update = scrollValue - 15
      setScrollValue(value_update)
    }
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
