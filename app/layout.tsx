import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Business Native — MI-ügynökök, amik elvégzik a munkát",
  description:
    "Teljesítményközpontú rendszereket építek magyar vállalkozásoknak: MI-ügynökök végzik az ismétlődő munkát, hogy neked több időd maradjon arra, ami igazán számít.",
  metadataBase: new URL("https://expert-flow-skalazas.vercel.app"),
  openGraph: {
    title: "Business Native — MI-ügynökök, amik elvégzik a munkát",
    description:
      "Teljesítményközpontú rendszerek: MI-ügynökök végzik az ismétlődő munkát — kevesebb kézi lépés, gyorsabb átfutás, visszanyert idő.",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
