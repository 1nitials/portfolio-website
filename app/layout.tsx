import './globals.css'
import Header from '../components/Header'

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
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}