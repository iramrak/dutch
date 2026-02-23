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
    "Онлайн-уроки нидерландского языка с преподавателем Басом. Более 30 лет опыта, индивидуальные занятия и профессиональная методика обучения.",
  keywords: [
    // 🇷🇺 Russian
    "нидерландский язык онлайн, уроки нидерландского, курсы нидерландского языка, репетитор нидерландского, нидерландский язык для русских, индивидуальные занятия, подготовка к NT2, нидерландский с носителем, разговорный нидерландский, голландский язык онлайн, эффективное обучение",
    // 🇳🇱 Dutch
    "Nederlands leren online, privélessen Nederlands, Nederlandse taalcursus, Nederlands voor expats, NT2-examen voorbereiding, leren met native speaker, taallessen op maat, effectief Nederlands leren, flexibele lessen",
    // 🇬🇧 English
    "Learn Dutch online, Dutch tutor, private Dutch lessons, NT2 preparation, Dutch for expats, learn Dutch fast, professional Dutch teacher, flexible online Dutch lessons"
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
