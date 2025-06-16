import Link from "next/link";
import { articles } from "@/data/articles"; // Create this data file

export default function ArticlesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Vinyl Reviews & Articles</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <div key={article.slug} className="border p-4 rounded-md shadow">
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.excerpt}</p>
            <Link href={`/articles/${article.slug}`} className="text-blue-600 mt-2 inline-block">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
