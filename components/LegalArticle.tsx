import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";

export default function LegalArticle({ slug }: { slug: string }) {
  const md = fs.readFileSync(
    path.join(process.cwd(), "content/legal", `${slug}.md`),
    "utf8"
  );
  return (
    <section className="hairline-b">
      <div className="container-page py-16 md:py-20">
        <article className="prose-legal mx-auto max-w-[760px]">
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
