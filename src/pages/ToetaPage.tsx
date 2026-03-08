import Layout from "@/components/Layout";
import { useState } from "react";
import { Check } from "lucide-react";
import hero2 from "@/assets/hero-2.png";

const benefits = [
  "Tee reaalset head oma kogukonnas",
  "Loo püsivaid sõprussuhteid ja professionaalseid kontakte",
  "Osale rahvusvahelistel konverentsidel ja üritustel",
  "Saavuta ligipääs koolitus- ja enesearenguprogrammidele",
];

const JoinPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"donation" | "giftcard">("donation");
  const [form, setForm] = useState({
    sender_name: "",
    sender_email: "",
    recipient: "",
    amount: "50",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Benefits & Form */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="heading-section">{activeTab === "giftcard" ? "Kinkekaart" : "Toetus"}</p>
              <h2 className="heading-primary mb-6">
                Toeta meie tegevust
              </h2>
              <p className="text-body mb-8">
                Sinu toetus annab otsepanuse meie heategevusprojektidele ning aitab teha head oma kogukonnas. Kinkekaardi soetamine toetab meid samamoodi nagu otsene toetus, kuid lisaks saate PDF-formaadis kinkekaardi, mis kinnitab annetust ja mida saab soovi korral kinkida sõbrale või lähedasele. 
              </p>
            </div>

            {/* Tabs + Form */}
            <div className="card-lions p-8 bg-card">
              <div className="flex gap-4 mb-6 border-b border-border">
                <button
                  className={`px-4 py-2 ${activeTab === "donation" ? "border-b-2 border-secondary font-semibold" : ""}`}
                  onClick={() => setActiveTab("donation")}
                >
                  Toetus
                </button>
                <button
                  className={`px-4 py-2 ${activeTab === "giftcard" ? "border-b-2 border-secondary font-semibold" : ""}`}
                  onClick={() => setActiveTab("giftcard")}
                >
                  Kinkekaart
                </button>
              </div>

              <h3 className="heading-secondary mb-6">
                {activeTab === "giftcard" ? "Kinkekaart" : "Toetus"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Sinu Nimi</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.sender_name}
                    onChange={(e) => setForm({ ...form, sender_name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Sinu Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.sender_email}
                    onChange={(e) => setForm({ ...form, sender_email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {activeTab === "giftcard" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Saaja Nimi</label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={form.recipient}
                        onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Kinkekaardi Sõnum</label>
                      <textarea
                        rows={4}
                        maxLength={1000}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Summa (€)</label>
                  <input
                    type="number"
                    maxLength={20}
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <button type="submit" className="btn-gold w-full">
                  Edasi Maksma
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JoinPage;