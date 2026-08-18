import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PopupProvider } from "@/app/PopupContext";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const localeToOgLocale: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  nl: "nl_NL",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://make-mydutch.com"),
    title: t("title"),
    description: t("description"),
    keywords: [
      "курсы нидерландского языка онлайн, репетитор нидерландского, нидерландский с носителем, подготовка к экзамену NT2, голландский язык для переезда, уроки нидерландского по скайпу, разговорный нидерландский",
      "nederlands leren online, privélessen nederlands, cursus nederlands nt2, inburgeringsexamen oefenen, nederlands voor expats, native speaker nederlands docent, taalles op maat",
      "learn dutch online, private dutch tutor, dutch lessons for expats, nt2 exam preparation online, native dutch teacher, conversational dutch course, dutch language tutoring",
    ],
    alternates: {
      canonical: `https://make-mydutch.com/${locale === "en" ? "" : locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          `https://make-mydutch.com/${l === "en" ? "" : l}`,
        ])
      ),
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://make-mydutch.com/${locale === "en" ? "" : locale}`,
      siteName: "Make My Dutch",
      locale: localeToOgLocale[locale as Locale] ?? "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogTitle"),
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bas",
              jobTitle: "Dutch Language Teacher",
              url: "https://make-mydutch.com",
              sameAs: [
                "https://make-mydutch.com",
                "https://linkedin.com",
                "https://facebook.com",
              ],
              knowsLanguage: [
                { "@type": "Language", name: "Dutch" },
                { "@type": "Language", name: "English" },
                { "@type": "Language", name: "Russian" },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Make My Dutch",
                url: "https://make-mydutch.com",
              },
              image: "https://make-mydutch.com/og-image.jpg",
            }),
          }}
        />
      </head>

      <body className={`${onest.className} container mx-auto bg-[#F7F8FF]`}>
        <NextIntlClientProvider>
          <PopupProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </PopupProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
