'use client'

import Image from "next/image"

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
      <div className={styleState}>
        <span>option 1</span>
        <span>option 2</span>
        <span>option 3</span>
      </div>
      <Image
      onClick={hamburgerMenu}
      className="menu-icon"
      src={'/hamburger-menu'+ menuIcon +'.svg'}
      width={35} height={35}
      alt="menu" />
    </div>
  )
}

export default Menu
