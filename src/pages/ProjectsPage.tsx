import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import lootuseKulaImg from "@/assets/lootusekyla.jpg";
import harakaKoduImg from "@/assets/harakakodu.jpg";

const projects = [
  {
    image: lootuseKulaImg,
    title: "Lootuse Küla",
    description:
      "MTÜ Lootuse Küla pakub alkoholi- ja narkosõltuvusega võitlejatele rehabilitatsiooni ning toimetulekuoskuste tuge. Programmis osalejad õpivad töö- ja igapäevaeluks vajalikke oskusi ning saavad kogukonna tuge, et luua uus algus ja paremad võimalused tulevikuks.",
    status: "Projekt",
  },
  {
    image: harakaKoduImg,
    title: "Haraka Kodu",
    description:
      "Sihtasutus Haraka Kodu pakub ööpäevaringset hooldust ja teraapiaid raske ja sügava liitpuudega noortele. Eesmärk on parandada nende igapäevast toimetulekut ja sotsiaalseid oskusi turvalises, peresarnases keskkonnas, toetades kaasavat kogukonda.",
    status: "Projekt",
  },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <div className="absolute inset-0 hero-overlay flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">
              Meie toetatavad projektid
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-sm shadow-md w-full h-72 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                    {project.status}
                  </span>
                  <h2 className="heading-secondary mb-4">{project.title}</h2>
                  <p className="text-body">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-center">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground font-heading mb-4">
            Soovid kaasa aidata?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Toeta meie tegevust ja saa osa meie missioonist parandada inimeste elukvaliteeti. Lions Club Tallinn City pakub võimalust teha reaalseid muutusi kogukonnas.
          </p>
          <Link to="/toetused" className="btn-gold">
            Toeta Meid
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;