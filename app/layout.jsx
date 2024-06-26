import 'styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs'

import Menu from '@/components/menu/Menu'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Page',
  description: 'veery simple blog page with authentication'
}

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <header className='menu-container'>
            <div className='user-profile-icon-wrapper'>
              <SignedIn>
                <UserButton userProfileUrl='/profile'  />
              </SignedIn>
            </div>
            <div className='content-menu-wrapper'>
              <Menu/>
            </div>
          </header>
          <main className='app'> {children} </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
