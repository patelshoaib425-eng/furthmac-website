import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Link } from "react-router-dom";
import { Reveal } from "../components/site/Motion";
import { Home as HomeIcon } from "lucide-react";
import { CTABanner } from "../components/site/Home";

const PROSE = "prose max-w-none prose-headings:font-display prose-headings:text-navy prose-p:text-steel-500 prose-p:leading-relaxed prose-a:text-orange";

export const Privacy = () => (
  <>
    <Seo title="Privacy Policy | Furthmac Solutions" description="Furthmac Solutions privacy policy." path="/privacy" />
    <PageHeader overline="Privacy Policy" titleLines={["Privacy Policy"]} image="team" />
    <section className="container-x py-20"><div className={PROSE}>
      <p>This privacy policy describes how Furthmac Solutions collects, uses and protects information submitted through our website.</p>
      <h2>Information we collect</h2><p>We collect only the information you voluntarily submit through contact forms — name, email, phone, company and message.</p>
      <h2>How we use it</h2><p>We use your information solely to respond to enquiries and to provide requested engineering services.</p>
      <h2>Data protection</h2><p>Submissions are stored securely. We do not sell or share your data with third parties.</p>
      <h2>Contact</h2><p>For any privacy question, email info@furthmac.com.</p>
    </div></section>
  </>
);

export const Terms = () => (
  <>
    <Seo title="Terms & Conditions | Furthmac Solutions" description="Furthmac Solutions terms and conditions." path="/terms" />
    <PageHeader overline="Terms & Conditions" titleLines={["Terms & Conditions"]} image="team" />
    <section className="container-x py-20"><div className={PROSE}>
      <p>By using this website, you agree to the following terms.</p>
      <h2>Website use</h2><p>Content on this website is provided for informational purposes and may be updated without notice.</p>
      <h2>Services</h2><p>Engineering services are governed by separate contractual agreements executed between Furthmac Solutions and the client.</p>
      <h2>Intellectual property</h2><p>All content and marks on this site are the property of Furthmac Solutions unless otherwise stated.</p>
    </div></section>
  </>
);

export const Cookie = () => (
  <>
    <Seo title="Cookie Policy | Furthmac Solutions" description="Furthmac Solutions cookie policy." path="/cookie-policy" />
    <PageHeader overline="Cookie Policy" titleLines={["Cookie Policy"]} image="team" />
    <section className="container-x py-20"><div className={PROSE}>
      <p>This website may use essential cookies to remember preferences such as theme selection. We do not use cookies to track users across other websites.</p>
    </div></section>
  </>
);

export const NotFound = () => (
  <>
    <Seo title="Page Not Found | Furthmac Solutions" description="The page you were looking for could not be found." path="/404" />
    <section className="min-h-[70vh] flex items-center container-x py-24">
      <Reveal className="max-w-xl">
        <div className="overline text-orange">404</div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mt-3">Page not found.</h1>
        <p className="mt-4 text-steel-500 leading-relaxed">The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn-primary mt-8"><HomeIcon size={16} /> Return Home</Link>
      </Reveal>
    </section>
    <CTABanner />
  </>
);
