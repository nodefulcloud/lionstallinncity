import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <div className="absolute inset-0 hero-overlay flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">
              Meie ajalugu
            </h1>
          </div>
        </div>
      </section>

      {/* Lions International */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="heading-section">Rahvusvaheline liikumine</p>
              <h2 className="heading-primary mb-6">Lions Clubs International</h2>

              <p className="text-body mb-4">
                Lions Clubs International on maailma suurim heategevuslik
                klubiorganisatsioon. Organisatsioon asutati 1917. aastal ning
                täna tegutseb üle maailma enam kui 1,4 miljonit liiget rohkem
                kui 200 riigis ja piirkonnas.
              </p>

              <p className="text-body mb-4">
                Lionsid on vabatahtlikud, kes panustavad oma aega ja oskusi
                kogukonna heaks. Liikumise moto on <strong>„Me teenime“</strong>
                („We Serve“), mis väljendab lionsite pühendumust aidata abivajajaid
                ning parandada inimeste elukvaliteeti.
              </p>

              <p className="text-body">
                Lions-klubid üle maailma toetavad mitmeid algatusi, sealhulgas
                nägemistervise edendamist, noorte arendamist, nälja vähendamist
                ning kogukondade tugevdamist.
              </p>
            </div>

            <div>
              <img
                src={hero1}
                alt="Lions kogukonnategevus"
                className="rounded-sm shadow-md w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="heading-section">Ajalugu</p>
            <h2 className="heading-primary">Lions Club Tallinn City</h2>
          </div>

          <div className="space-y-6 text-body">

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Eesti esimene Lions klubi
              </h3>
              <p>
                LC Tallinn Cityl on au olla esimene ja seega ka kõige vanem
                Lions-klubi Eestis. Klubi asutati 24. mail 1989.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Charter Night Glehni lossis
              </h3>

              <p className="mb-4">
                LC Tallinn City Charter Night toimus 12. augustil 1989 Glehni lossis.
                Seda sündmust meenutab asutajaliige Uno Liiv klubi 10. aastapäeva raamatus.
              </p>

              <blockquote className="border-l-4 border-lions-gold pl-6 italic text-muted-foreground mb-4">
                „Tegemist oli märgilise sündmusega kogu Lions-liikumises, sest selleks
                hetkeks ei olnud kogu Ida-Euroopas ega endises Nõukogude Liidus veel
                loodud ühtegi Lions-klubi.“
                <footer className="mt-2 text-sm not-italic text-primary">
                  — Uno Liiv
                </footer>
              </blockquote>

              <p>
                Sündmuse rahvusvahelist tähtsust arvestades osalesid Charter Night’il
                mitme riigi Lions-klubide esindajad.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Rahvusvaheline sündmus
              </h3>
              <p>
                Sündmuse rahvusvahelist tähtsust arvestades osalesid
                Charter Night’il mitme riigi Lions-klubide esindajad.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Vaderklubi ja ettevalmistus
              </h3>
              <p>
                LC Tallinn City vaderklubiks on Soome Lions-klubi
                LC Heinola Sillat. Nende liikmed Esa Ahola ja
                Markku Saittakari tegid suure ettevalmistustöö,
                mis võimaldas Lionismi laienemist üle niinimetatud
                „raudse eesriide“.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Pidulik õhtu ja külalised
              </h3>
              <p>
                Charter Night’i pidulik õhtu algas tervitusega külalistele,
                mille edastas asutajaliige Tiit Raukas. Klubi asutamise
                kirja andsid üle ISR Joukko Tynkkynen ja PDG Esko Kanerva.
              </p>

              <p>
                Peokõneleja oli IBC Ralf Ekström. Rahvusvahelise
                Lions-organisatsiooni peamaja tervituse edastas
                PID Aimo Viitala ning kohal viibis ka
                Austin P. Jennings, üks tollaseid rahvusvahelise
                Lions Clubs Internationali juhtidest.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                30+ aastat tegevust
              </h3>
              <p>
                Tänaseks on klubil seljataga üle 30 tegevusaasta.
                Lions-liikumise põhieesmärk on heategevus ning
                LC Tallinn City on püüdnud seda eesmärki täita
                oma võimaluste piires.
              </p>

              <p>
                Eesti taasiseseisvumise algusaastatel vahendas klubi
                abi Soomest ja Rootsist, et toetada neid inimesi
                ja kogukondi, kes seda kõige enam vajasid.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground font-heading mb-4">
            Soovid panustada kogukonda?
          </h2>

          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Liitu Lions Club Tallinn Cityga ja saa osaks rahvusvahelisest
            vabatahtlike võrgustikust, kes tegutsevad kogukonna heaks.
          </p>

          <Link to="/toetused" className="btn-gold">
            Liitu meiega
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;