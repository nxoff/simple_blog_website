'use client'

import Image from "next/image"
import Link from "next/link"

import '../styles/menu.css'
import { useState } from "react"

const Menu = () => {
  const MOBILE_MENU_STYLES = [
    'mobile-options-hidden',
    'mobile-options-active'
  ]

  const MENU_ICON = [
    '',
    '-opened'
  ]

  const [styleState, setStyleState] = useState(MOBILE_MENU_STYLES[0])
  const [menuIcon, setMenuIcon] = useState(MENU_ICON[0])

  function hamburgerMenu() {
    if (styleState == MOBILE_MENU_STYLES[1]) {
      setStyleState(MOBILE_MENU_STYLES[0])
      setMenuIcon(MENU_ICON[0])
    }
    else {
      setStyleState(MOBILE_MENU_STYLES[1])
      setMenuIcon(MENU_ICON[1])
    }
  }

  return (
    <div className="main-menu">
      <div className="pc-options-container">
        <span>option 1</span>
        <span>option 2</span>
        <span>option 3</span>
      </div>
      <div id='mobile-options-parent' className={styleState}>
        <Image src={'/logo.png'} width={200} height={150} alt="logo" />
        <Link href={'/'}>Najnowsze Posty!</Link>
        <Link href={'/'}>Szukaj Artykułów</Link>
        <Link href={'/'}>Twój Profil</Link>
      </div>
      <Image
      onClick={hamburgerMenu}
      className={'menu-icon' + menuIcon}
      src={'/hamburger-menu'+ menuIcon +'.svg'}
      width={35} height={35}
      alt="menu" />
    </div>
  )
}

export default Menu
