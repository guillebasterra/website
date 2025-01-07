import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

async function getMarkdownContent(fileName: string) {
  const filePath = path.join(process.cwd(), "src/content", fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent); // Extract metadata and markdown content.
  const processedContent = await remark().use(html).process(content); // Convert markdown to HTML.
  const htmlContent = processedContent.toString();

  return { data, htmlContent };
}

export default async function AboutPage() {
  const { data, htmlContent } = await getMarkdownContent("about.md");

  return (
    <div className="prose max-w-2xl mx-20 p-8">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
