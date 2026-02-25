import type {Metadata} from "next";
import "./globals.css";
import type {PropsWithChildren} from "react";
import {Providers} from "@/app/providers";
import {SITE_NAME} from "@/shared/constants/seo.constants";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    weight: '300',
    variable: "--font-montserrat",
    subsets: ['latin'],
    style: ['normal']
})

export const metadata: Metadata = {
  title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`
  },
  description: "Один день в этом году будет для нас особенным, и мы хотим провести его в кругу близких и друзей. С огромной радостью приглашаем Вас на главное событие в нашей жизни - нашу свадьбу!",
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
          <Providers>
              {children}
          </Providers>
      </body>
    </html>
  );
}
