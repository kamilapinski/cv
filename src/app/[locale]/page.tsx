import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhoIAm from "@/components/WhoIAm";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>
}

export const dynamic = "force-static"; // wymusza static

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pl" }];
}

export default async function Page({ params }: Props) {
  const {locale} = await params;
  
  return (
    <main>
      <Introduction />
      <WhoIAm />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}