"use client"

import "@/../styles/globals.css"
import SidebarGym from "@/components/organins/SidebarGym"
import { PrimeReactProvider } from "primereact/api"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

 

  return (
    <html lang="es">
      <PrimeReactProvider>
       
        <body className="flex">

        <SidebarGym />
          
          {children}
          
          </body>
       
      </PrimeReactProvider>
    </html>
  )
}
