import { Link } from "react-router-dom";
import { Heart, Handshake, Users, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSlideshow from "@/components/HeroSlideshow";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import LootuseKyla from "@/assets/lootusekyla.jpg";
import HarakaKodu from "@/assets/harakakodu.jpg";

const impactItems = [
  {
    icon: Heart,
    title: "Panustame abivajajate heaks",
    description:
      "Toetame asutusi, kes aitavad abivajajaid.",
  },
  {
    icon: Handshake,
    title: "Heategevusüritused",
    description:
      "Korraldame aktiivselt sündmusi ja kogume vahendeid, et aidata meie poolt toetatavaid heategevuslikke projekte.",
  },
  {
    icon: Users,
    title: "Koostöö",
    description:
      "Teeme koostööd, et suurendada mõju ja edendada ühiskondlikku vastutustunnet.",
  },
  {
    icon: Globe,
    title: "Rahvusvahelisus",
    description:
      "Oleme osa rahvusvahelisest Lions Clubs võrgustikust, mille moto on 'We Serve'",
  },
];

const projects = [
  {
    image: LootuseKyla,
    title: "Lootuse Küla",
    description:
      "MTÜ Lootuse Küla pakub alkoholi- ja narkosõltuvusega võitlejatele rehabilitatsiooni, toimetulekuoskuste tuge ning uusi võimalusi sotsiaalseks eluks. Programmis osalejad õpivad töökultuuri ja elukvaliteeti parandavat tegevust läbi reaalse töö ja kogukonna toetuse.", // põhineb avalikul info põhjal. :contentReference[oaicite:0]{index=0}
  },
  {
    image: HarakaKodu,
    title: "Haraka Kodu",
    description:
      "Sihtasutus Haraka Kodu on erihooldust toetav asutus, mis pakub ööpäevaringset hooldust ja teraapiaid raske ja sügava liitpuudega noortele, et parandada nende sotsiaalseid oskusi ja igapäevast toimetulekut. Tegemist on peresarnase elukeskkonnaga, mis toetab kaasavat kogukonda.", // põhineb avalikul info põhjal. :contentReference[oaicite:1]{index=1}
  }
];

const news = [
  {
    title: "Lions Club Tallinn City Celebrates 10 Years of Service",
    date: "February 28, 2026",
    excerpt: "A milestone celebration honoring a decade of community impact and volunteerism.",
  },
  {
    title: "New Partnership with Tallinn Schools",
    date: "February 15, 2026",
    excerpt: "We're expanding our youth mentoring program to three additional schools in the region.",
  },
  {
    title: "Record Turnout at Winter Food Drive",
    date: "January 20, 2026",
    excerpt: "Over 500 families received food packages during our annual winter food drive.",
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSlideshow />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="heading-section">Meist</p>
            <h2 className="heading-primary mb-6">
              Lions Club Tallinn City
            </h2>
            <p className="text-body mb-8">
              Lions Club Tallinn City on Eesti esimene Lions-klubi, asutatud 24. mail 1989. Charter Night toimus 12. augustil Glehni lossis, toetudes Soome vaderklubi LC Heinola Sillat abile.

              Tänaseks on meil üle 30 aasta tegevust, keskendudes heategevusele ja kogukonna toetamisele.
            </p>
            <Link to="/meist" className="btn-primary">
              Meie Ajalugu
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="heading-section">Mida me teeme</p>
            <h2 className="heading-primary">Meie Eesmärgid</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactItems.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-5">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="heading-section">Meie Töö</p>
            <h2 className="heading-primary">Meie Projektid</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card-lions">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Link
                    to="/projektid"
                    className="text-sm font-medium text-lions-blue hover:text-lions-blue-light transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section-padding bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-6">
            Toeta meie tegevust
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-4 leading-relaxed">
            Toeta meie tegevust ja saa osa meie missioonist parandada inimeste elukvaliteeti! Lions Club Tallinn City pakub võimalust teha reaalseid muutusi kogukonnas! Liitu meiega ja aita kaasa positiivse mõju loomisele!
          </p>
          <Link to="/toetused" className="btn-gold text-base">
            Toeta Meid
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="heading-section">Püsi Kursis</p>
            <h2 className="heading-primary">Värsked Uudised</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.title} className="card-lions p-6">
                <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-heading text-base font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/uudised" className="btn-secondary">
              All News
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
