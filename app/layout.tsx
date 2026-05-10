import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev Security Audit',
  description: 'Audit securitate pentru aplicații web și API-uri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
