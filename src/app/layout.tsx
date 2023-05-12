import './globals.css'

export const metadata = {
  title: 'Cake App',
  description: 'Cake App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
