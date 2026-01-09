import { Nunito } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const fontNunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Next Pizza App',
  description: 'This is my Next.js project.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontNunito.variable} antialiased`}>{children}</body>
    </html>
  )
}
