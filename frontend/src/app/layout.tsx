import type {Metadata} from "next";
import "./globals.css";
import type {PropsWithChildren} from "react";
import {Providers} from "@/app/providers";
import {SEO_URL, SEO_DESCRIPTION, SEO_KEYWORDS, SITE_NAME} from "@/shared/constants/seo.constants";
import {Montserrat} from "next/font/google";
import {Footer} from "@/shared/components/layout/footer";

const montserrat = Montserrat({
    weight: '300',
    variable: "--font-montserrat",
    subsets: ['latin', 'cyrillic'],
    style: ['normal']
})

export const metadata: Metadata = {
    metadataBase: new URL(SEO_URL),
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    openGraph: {
        title: SITE_NAME,
        description: SEO_DESCRIPTION,
        siteName: SITE_NAME,
        type: 'website',
        locale: 'ru_RU',
        url: SEO_URL,
        images: [{ url: '/hero/rings.webp', width: 400, height: 400, alt: SITE_NAME }],
    },
    twitter: {
        card: 'summary',
        title: SITE_NAME,
        description: SEO_DESCRIPTION,
        images: ['/hero/rings.webp'],
    },
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} wrapper`}>
          <Providers>
              <main>{children}</main>
              <Footer />
          </Providers>
      </body>
    </html>
  );
}
