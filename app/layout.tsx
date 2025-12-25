import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIMANIA Financial Dashboard',
  description: 'Open, transparent, and real-time financial information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

