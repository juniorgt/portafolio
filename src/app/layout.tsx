"use client"
import { Navbar } from './components/Navbar'
import { ThemeProvider } from 'next-themes'
import { Footer } from './components/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
