import "./globals.css"
import BackgroundTerminal from "../components/BackgroundTerminal"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="fr">
      <body>

        <BackgroundTerminal />

        <div className="app-container">
          {children}
        </div>

      </body>
    </html>
  )
}