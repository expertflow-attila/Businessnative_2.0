import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Garancia — Business Native",
  robots: { index: false },
};

export default function Page() {
  return <LegalArticle slug="garancia" />;
}
