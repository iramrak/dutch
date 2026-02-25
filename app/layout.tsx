import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/app/LanguageContext";
import { PopupProvider } from "./PopupContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Make My Dutch || Уроки нидерландского языка онлайн",
  description:
    "🇳🇱 Онлайн-уроки нидерландского с носителем. Преподаватель Бас (30 лет опыта). Подготовка к NT2, интеграции и жизни в Нидерландах. Запишитесь на первый урок!",
  keywords: [
    "курсы нидерландского языка онлайн, репетитор нидерландского, нидерландский с носителем, подготовка к экзамену NT2, голландский язык для переезда, уроки нидерландского по скайпу, разговорный нидерландский",
    "nederlands leren online, privélessen nederlands, cursus nederlands nt2, inburgeringsexamen oefenen, nederlands voor expats, native speaker nederlands docent, taalles op maat",
    "learn dutch online, private dutch tutor, dutch lessons for expats, nt2 exam preparation online, native dutch teacher, conversational dutch course, dutch language tutoring"
  ],
  openGraph: {
    title: "Make My Dutch — Learn Dutch with Bas",
    description:
      "Learn Dutch online with Bas — professional teacher with over 30 years of experience. Individual lessons for Russian, English, and Dutch speakers.",
    url: "https://make-mydutch.com",
    siteName: "Make My Dutch",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Make My Dutch — Dutch lessons online",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <Head>
        <title>Make My Dutch — Уроки нидерландского онлайн</title>
        <meta
          name="description"
          content="Профессиональные онлайн-уроки нидерландского языка с преподавателем Басом. Более 30 лет опыта, индивидуальные занятия и эффективная методика."
        />
        <meta
          name="keywords"
          content="нидерландский язык онлайн, уроки нидерландского, Nederlands leren online, Dutch lessons online"
        />
        <meta property="og:title" content="Make My Dutch — Learn Dutch Online" />
        <meta
          property="og:description"
          content="Learn Dutch with Bas — online lessons, flexible schedule, native-level Dutch tutoring."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bas",
              "jobTitle": "Dutch Language Teacher",
              "url": "https://make-mydutch.com",
              "sameAs": [
                "https://make-mydutch.com",
                "https://linkedin.com",
                "https://facebook.com"
              ],
              "knowsLanguage": [
                { "@type": "Language", "name": "Dutch" },
                { "@type": "Language", "name": "English" },
                { "@type": "Language", "name": "Russian" }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Make My Dutch",
                "url": "https://make-mydutch.com",
              },
              "image": "https://make-mydutch.com/og-image.jpg",
            }),
          }}
        />
      </Head>

      <body className={`${onest.className} container mx-auto bg-[#F7F8FF]`}>
        <LanguageProvider>
          <PopupProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </PopupProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
