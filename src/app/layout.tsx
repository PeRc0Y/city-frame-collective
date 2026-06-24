import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Frame Collective | Modern Travel Posters',
  description: 'Bring the essence of the world\'s most beautiful cities into your home with our curated collection of modern travel posters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
