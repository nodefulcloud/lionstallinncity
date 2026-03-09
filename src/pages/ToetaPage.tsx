import Layout from "@/components/Layout";
import { useState } from "react";
import { Check } from "lucide-react";
import hero2 from "@/assets/hero-2.png";

const bankDetails = {
  iban: "EE497700771007690412",
  beneficiary: "LIONS CLUB TALLINN CITY",
}

const demoMontonioURLs = {
  "swedbank": "https://sandbox-pay.montonio.com/09cf6e08-5413-4f13-9e06-8f3927b0b3c7",
  "seb": "https://sandbox-pay.montonio.com/ad2873cd-f9e7-47bf-b4b8-2478292b3791",
  "lhv": "https://sandbox-pay.montonio.com/46e3a606-3818-4bbd-a6d0-f07f52054807",
  "cooppank": "https://sandbox-pay.montonio.com/77cc01c8-6a7e-44d4-962e-90d7c677f6d2"
}

const JoinPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"ukskord" | "igakuu">("igakuu");
  const [form, setForm] = useState({
    sender_email: "",
    amount: "20",
    bank: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "igakuu" && !form.bank) {
      alert("Palun vali pank");
      return;
    }
    if (activeTab === "igakuu" && form.bank) {
      if (form.bank === "swedbank") {
        window.location.href = `https://www.swedbank.ee/private/d2d/payments2/standing_order/new?standingOrder.beneficiaryAccountNumber=${bankDetails.iban}&standingOrder.beneficiaryName=${encodeURIComponent(bankDetails.beneficiary)}&standingOrder.amount=${form.amount}&standingOrder.details=${encodeURIComponent(form.sender_email) ?? "Toetus%20Lions%20Club%20Tallinn%20City"}`;
      } else if (form.bank === "seb") {
        window.location.href = `https://e.seb.ee/cgi-bin/ipank/ipank.p?act=ADDSOSMARTPAYM&field1=benname&value1=${encodeURIComponent(bankDetails.beneficiary)}&field3=benacc&value3=${bankDetails.iban}5&field10=desc&value10=${encodeURIComponent(form.sender_email)}%20-%20Igakuine%20p%C3%BCsimakse%2010%20EURi&field5=amount&value5=${form.amount}&sofield1=frequency&sovalue1=1&paymtype=REMSEBEE&field6=currency&value6=EUR&sofield2=startdt&sofield3=enddt&sovalue4=CIF&sofield4=paymtype`;
      } else if (form.bank === "lhv") {
        window.location.href = `https://www.lhv.ee/portfolio/payment_standing_add.cfm?i_receiver_name=${encodeURIComponent(bankDetails.beneficiary)}&i_receiver_account_no=${bankDetails.iban}&i_payment_desc=${encodeURIComponent(form.sender_email)}%20-%20Igakuine%20p%C3%BCsimakse%2010%20EURi&i_amount=${form.amount}`;
      } else if (form.bank === "cooppank") {
        window.location.href = `https://i.cooppank.ee/permpmtnew?SaajaKonto=${bankDetails.iban}&SaajaNimi=${encodeURIComponent(bankDetails.beneficiary)}&MaksePohjus=${encodeURIComponent(form.sender_email)}%20-%20Igakuine%20p%C3%BCsimakse%2010%20EURi&Vaaring=EUR&MakseSumma=${form.amount}`;
      } else {
        window.location.href = "/toetused/maksepuudub";
      }
    } else if (activeTab == "ukskord") {
      window.location.href = demoMontonioURLs[form.bank as keyof typeof demoMontonioURLs] || "/toetused/maksepuudub";
    } else {
      window.location.href = "/toetused/maksepuudub";
    }
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
              <p className="heading-section">TOETUSED</p>
              <h2 className="heading-primary mb-6">
                Toeta meie tegevust
              </h2>
              <p className="text-body mb-8">
                Sinu toetus annab otsepanuse meie heategevusprojektidele ning aitab teha head oma kogukonnas.
              </p>
            </div>

            {/* Tabs + Form */}
            <div className="card-lions p-8 bg-card">
              <h3 className="heading-secondary mb-6">
                Soovin toetada
              </h3>
              <div className="flex gap-4 mb-6 border-b border-border">
                <button
                  className={`px-4 py-2 ${activeTab === "ukskord" ? "border-b-2 border-secondary font-semibold" : ""}`}
                  onClick={() => setActiveTab("ukskord")}
                >
                  Üks Kord
                </button>
                <button
                  className={`px-4 py-2 ${activeTab === "igakuu" ? "border-b-2 border-secondary font-semibold" : ""}`}
                  onClick={() => setActiveTab("igakuu")}
                >
                  Iga Kuu
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === "igakuu" && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Teie email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.sender_email}
                      onChange={(e) => setForm({ ...form, sender_email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
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
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Vali pank</label>
                    <select
                      required
                      value={form.bank} // or maybe rename to form.selected_bank
                      onChange={(e) => setForm({ ...form, bank: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">-- Vali pank --</option>
                      <option value="swedbank">Swedbank</option>
                      <option value="seb">SEB</option>
                      <option value="lhv">LHV</option>
                      <option value="cooppank">Coop Pank</option>
                    </select>
                  </div>
                <button type="submit" className="btn-gold w-full">
                  {activeTab === "igakuu" ? "Lisa püsikorraldus" : "Edasi maksma"}
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