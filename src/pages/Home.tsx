import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { SocialProof } from "@/components/sections/SocialProof";

const Home = () => {
  return (
    <>
      <SEO
        title="Nzenong Braxton | Full Stack Developer & SEO Specialist"
        description="Portfolio of Nzenong Kombou Mc Braxton, aka Cyber-Lord. Full Stack Developer specializing in React, Laravel, Flutter, and modern web technologies."
        canonical="/"
      />
      <Layout>
        <Hero />
        <Skills />
        <SocialProof />
      </Layout>
    </>
  );
};

export default Home;
