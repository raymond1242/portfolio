import { Roboto, Dosis } from "next/font/google"

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const dosis = Dosis({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
