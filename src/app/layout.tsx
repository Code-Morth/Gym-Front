import "@/../styles/globals.css"
import { PrimeReactProvider } from "primereact/api"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  )
}
