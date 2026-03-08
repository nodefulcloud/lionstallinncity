import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.png";

const posts = [
  {
    title: "Uudis 1",
    date: "28. veebruar 2026",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: hero1,
  },
  {
    title: "Uudis 2",
    date: "15. veebruar 2026",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Uudis 3",
    date: "20. jaanuar 2026",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Uudis 4",
    date: "10. detsember 2025",
    excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Uudis 5",
    date: "5. november 2025",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const NewsPage = () => {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <div className="absolute inset-0 flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">Värsked Uudised</h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.title} className="card-lions overflow-hidden">
                {post.image && (
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover" loading="lazy" />
                )}
                <div className="p-6 md:p-8">
                  <p className="text-xs font-medium text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="font-heading text-xl font-bold text-primary mb-3">{post.title}</h2>
                  <p className="text-body">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
