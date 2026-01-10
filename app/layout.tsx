import './globals.css'
import Header from '../components/Header'
import { Inter, Jura } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jura = Jura({ subsets: ['latin'], variable: '--font-jura' })

export const metadata = {
  title: '1NITIALS',
  description: 'works by ronnie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-gray-50 ${inter.variable} ${jura.variable} font-sans`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}