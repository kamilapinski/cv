import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDirection } from "@/lib/utils";
import { Locale } from "@/lib/types";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ModeToggle";
import LangToggle from "@/components/LangToggle";
import { I18nProvider } from "@/app/providers/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Łapiński - CV",
  description: "The online CV of Kamil Łapiński, a software developer.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "pl" },
  ];
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}
            >
          <I18nProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <div className="fixed z-100 top-2 left-2 flex justify-center space-x-2">
                  <ModeToggle />
                  <LangToggle />
                </div>
                {children}
              </ThemeProvider>
            </I18nProvider>
          </body>
        </html>
  );
}