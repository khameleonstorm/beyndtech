import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Beyndtech Portfolio',
  description: 'Scale Your Business',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const panchang = localFont({
  src: '../public/fonts/Panchang-Variable.ttf',
  display: 'swap',
  variable: '--font-panchang'
})

const montserrat = localFont({
  src: '../public/fonts/Montserrat-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-montserrat'
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${panchang.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
