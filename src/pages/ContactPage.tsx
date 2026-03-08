import Layout from "@/components/Layout";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#f9c910]">
        <div className="absolute inset-0 flex items-center">
          <div className="section-container">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground font-heading">
              Kontakt
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto space-y-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 className="heading-secondary mb-6">Võta ühendust</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">Aadress</h3>
                    <p className="text-sm text-muted-foreground">Tallinn, Eesti</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">E-post</h3>
                    <p className="text-sm text-muted-foreground">info@lionstallinncity.ee</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">Telefon</h3>
                    <p className="text-sm text-muted-foreground">+372 516 4309</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <iframe
                title="Tallinna kaart"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128936.7052753998!2d24.6455!3d59.437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929499df5616bf%3A0x400b36d18fc6270!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;