'use client'
import Image from "next/image"
import Link from "next/link"

import '../../styles/menu.css'

import MobileContent from "./MobileContent"
import RegularContent from "./RegularContent"

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
    <header className="main-menu">
      <RegularContent />
      <MobileContent styleState={styleState} />
      <Image
        onClick={hamburgerMenu}
        className={'menu-icon' + menuIcon}
        src={'/hamburger-menu'+ menuIcon +'.svg'}
        width={35} height={35}
        alt="menu"
      />
    </header>
  )
}

export default Menu
