import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/animations/FadeIn";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact | Nzenong Braxton - Get In Touch"
        description="Ready to collaborate? Contact Nzenong Kombou Mc Braxton for web development, mobile apps, and digital solutions. Based in Buea, Cameroon."
        canonical="/contact"
      />
      <Layout>
        <section className="pt-32 pb-16" aria-labelledby="contact-page-heading">
          <div className="container px-4">
            <FadeIn>
              <header className="text-center mb-16">
                <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
                  {"// Let's Connect"}
                </p>
                <h1 id="contact-page-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get In <span className="text-glow text-primary">Touch</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                </p>
              </header>
            </FadeIn>
          </div>
        </section>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;
