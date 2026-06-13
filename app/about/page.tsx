import { Metadata } from "next";
import PageLayout from "../../components/PageLayout";

export const metadata: Metadata = {
  title: "About | TechVitals",
  description: "About the team and editorial vision behind TechVitals.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl py-10">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-500/90 sm:text-5xl">
          About TechVitals
        </h1>
        
        <p className="mb-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          TechVitals is a modern media publication dedicated to reporting on the frontier of medicine, biotechnology, artificial intelligence, and hardware. We aim to highlight how technical breakthroughs actively improve human health and safety.
        </p>

        <div className="my-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white shadow-lg sm:p-10">
          <h2 className="mb-4 text-2xl font-bold">Our Editorial Mission</h2>
          <p className="text-sm sm:text-base text-teal-50">
            We believe that the future is built at the intersection of disciplines. By reporting on scientific milestones with editorial rigor and clear, accessible explanations, we strive to inform both industry experts and curious newcomers.
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-500/90">Our Coverage Areas</h2>
        <ul className="mb-8 list-inside list-disc space-y-2 text-neutral-600 dark:text-neutral-400">
          <li><strong>Health Tech:</strong> Bio-wearables, gene-editing, robotic surgery, and clinical technology.</li>
          <li><strong>Artificial Intelligence:</strong> Deep learning, agentic models, and neural network applications.</li>
          <li><strong>Startups:</strong> Venture capital trends, deep-tech founders, and new business paradigms.</li>
          <li><strong>Gadgets:</strong> Reviews and analysis of AR/VR, smart wearables, and edge AI hardware.</li>
          <li><strong>Science:</strong> Physics breakthroughs, quantum computing, and alternative clean energy.</li>
        </ul>

        <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-500/90">Get In Touch</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Have a news tip, pitch, or feedback? Contact our newsroom at <a href="mailto:newsroom@techvitals.com" className="text-teal-600 hover:underline dark:text-teal-400">newsroom@techvitals.com</a>.
        </p>
      </div>
    </PageLayout>
  );
}
