import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import About from "@/components/About";
import Cert from "@/components/Cert";
import AboutClasses from "@/components/AboutClasses";
import Hero from "@/components/Hero";
import Indev from "@/components/Indev";
import WhyMe from "@/components/WhyMe";
import Premm from "@/components/Premm";
import Revs from "@/components/Revs";
import FAQ from "@/components/FAQ";
import Forms from "@/components/Forms";
import Baby from "@/components/Baby";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main>
      <h1 className="sr-only">{t("title")}</h1>
      <Hero />
      <Indev />
      <WhyMe />
      <About />
      <Cert />
      <AboutClasses />
      <Premm />
      <Revs />
      <Baby />
      <FAQ />
      <Forms />
    </main>
  );
}
