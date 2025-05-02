import { PT_Sans, Montserrat } from "next/font/google"

export const ptSans = PT_Sans({
  variable: "--ptSans",
  subsets: ["latin"],
  weight: ['400', '700']
})

export const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ['400', '700']
})
