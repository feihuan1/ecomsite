import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/shared/Navbar'

import './globals.css'
import CartProvider from '@/components/shared/CartProvider'
import ShoppingCartModal from '@/components/shared/ShoppingCartModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FashionWise',
  description: 'A e-com site build for porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <CartProvider>
        <Navbar />
        <ShoppingCartModal />
        {children}
      </CartProvider>
        </body>
    </html>
  )
}
