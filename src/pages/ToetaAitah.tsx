import Layout from "@/components/Layout";
import { useState } from "react";
import { Check } from "lucide-react";
import hero2 from "@/assets/hero-2.png";

const ToetaAitah = () => {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <img src={hero2} alt="Join Lions" className="w-full h-full object-cover hidden" />
        <div className="absolute inset-0 hero-overlay flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">
              Toetused
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="heading-section">TOETUSED</p>
              <h2 className="heading-primary mb-6">
                Toeta meie tegevust
              </h2>
              <p className="text-body mb-8">
                Sinu toetus annab otsepanuse meie heategevusprojektidele ning aitab teha head oma kogukonnas.
              </p>
            </div>

            <div className="card-lions p-8 bg-card">
              <h3 className="heading-secondary mb-4">
                Toetus õnnestus
              </h3>

              <p className="text-body mb-6">
                Suur aitäh toetuse eest! Teie panus on meile väga oluline ja aitab meil oma tegevust edasi arendada.
              </p>

              <div className="flex flex-col gap-4">
                <a href="/" className="btn-gold text-center">
                  Tagasi avalehele
                </a>

                <a href="/projektid" className="px-4 py-2.5 rounded-sm border border-border text-center hover:bg-muted transition">
                  Vaata projekte
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToetaAitah;