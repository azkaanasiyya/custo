import About from "@/components/about/about";
import AboutBlog from "@/components/about/blog";
import AboutHero from "@/components/about/hero";
import AboutQuote from "@/components/about/quote";
import AboutTeam from "@/components/about/team";
import AboutTestimonial from "@/components/common/testimonial";
import CTA from "@/components/layout/cta";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <About />
      <AboutQuote />
      <AboutTeam />
      <AboutBlog />
      <AboutTestimonial />
      <CTA />
    </div>
  );
}
