import Introduction from "@/components/Introduction";
import WhoIAm from "@/components/WhoIAm";
import Footer from "@/components/Footer";
import Register from "@/components/Register";
import Prices from "@/components/Prices";

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
      <Prices />
      <Register />
      <Footer />
    </main>
  );
}