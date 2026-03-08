import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.png";

const posts = [
  {
    title: "Lions Club Tallinn City Celebrates 10 Years of Service",
    date: "February 28, 2026",
    excerpt: "A milestone celebration honoring a decade of community impact and volunteerism in the Tallinn area. Over 100 members and guests gathered to reflect on achievements and set goals for the future.",
    image: hero1,
  },
  {
    title: "New Partnership with Tallinn Schools",
    date: "February 15, 2026",
    excerpt: "We're expanding our youth mentoring program to three additional schools in the Tallinn region. The partnership will provide after-school tutoring and leadership workshops for students aged 12–18.",
  },
  {
    title: "Record Turnout at Winter Food Drive",
    date: "January 20, 2026",
    excerpt: "Over 500 families received food packages during our annual winter food drive. Thanks to the generosity of our members and the community, we exceeded our donation goals by 40%.",
  },
  {
    title: "Lions International Convention 2025 Recap",
    date: "December 10, 2025",
    excerpt: "Our delegates attended the Lions International Convention and brought back new ideas and connections to strengthen our local chapter's programs.",
  },
  {
    title: "Volunteer of the Year Award",
    date: "November 5, 2025",
    excerpt: "Congratulations to our member Maris Kask, who received the Lions District Volunteer of the Year award for her outstanding dedication to community service.",
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
