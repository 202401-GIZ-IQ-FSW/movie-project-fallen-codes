import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Living Plus",
  description: "Movies and Actors Database",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        >
        </link>
      </head>
      <body
        style={{ backgroundColor: "rgb(12, 45, 87)" }}
        className={inter.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
