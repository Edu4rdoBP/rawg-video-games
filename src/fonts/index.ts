import { Lato, Poppins } from "next/font/google"

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: '100'
})

export const lato = Lato({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lato',
    weight: '100'
})