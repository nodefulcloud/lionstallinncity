import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";

const Kinkekaart = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <div className="absolute inset-0 hero-overlay flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">
              Kinkekaart
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="section-container flex justify-center">
          
          <div className="max-w-xl w-full p-10 text-center">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Lehekülg on loomisel
            </h2>

            <p className="text-gray-600 mb-6">
              Siin valmib peagi uus sisu. Palume natuke kannatust – 
              töötame selle nimel, et leht oleks varsti valmis.
            </p>

            <Link
              to="/"
              className="inline-block bg-[#f9c910] hover:brightness-95 text-black font-medium px-6 py-3 rounded-lg transition"
            >
              Tagasi avalehele
            </Link>

          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Kinkekaart;