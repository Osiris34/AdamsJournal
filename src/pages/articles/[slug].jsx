import { useRouter } from "next/router";
import { articles } from "@/data/articles";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Loading or article not found...</p>;

  return (
    <article className="container mx-auto px-4 py-12 prose lg:prose-xl">
      <h1>{article.title}</h1>
      <p className="italic text-sm text-gray-500">{article.date}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
