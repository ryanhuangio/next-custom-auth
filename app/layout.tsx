'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/nav'
import Footer from './components/footer'
import { ThemeProvider } from 'next-themes'
import { GlobalContextProvider } from './context/cart-context'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <GlobalContextProvider>
                <ThemeProvider attribute="class">
                    <body className=" dark:bg-gray-900 dark:text-gray-300">
                        <NavBar />
                        <main className="py-0 px-0">{children}</main>
                        <Footer />
                    </body>
                </ThemeProvider>
            </GlobalContextProvider>
        </html>
    )
}
