import { Article } from "./types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "revolutionary-crispr-treatment-cures-hereditary-blindness-in-clinical-trials",
    title: "Revolutionary CRISPR Treatment Cures Hereditary Blindness in Clinical Trials",
    excerpt: "In a groundbreaking medical milestone, doctors have successfully used CRISPR gene-editing technology in vivo to restore vision in patients suffering from congenital blindness.",
    body: `In a landmark clinical trial that feels like science fiction turned reality, medical researchers have successfully used CRISPR-Cas9 gene editing directly inside the human body to restore vision in patients suffering from Leber Congenital Amaurosis (LCA), a rare form of inherited blindness.

Historically, genetic therapies required extracting cells from a patient, editing them in a lab, and then reinfusing them. This new trial, however, delivered the CRISPR gene-editing components directly to the photoreceptor cells in the retina via a microscopic injection. 

### How It Works
The treatment, named EDIT-101, works by targeting a specific mutation in the CEP290 gene, which is crucial for photoreceptor function. By slicing out the mutated segment, CRISPR allows the gene to function correctly once again, prompting the cells to rebuild their visual pathways.

"This is the first time CRISPR has been successfully injected into a live human organ to correct a genetic defect with functional success," said Dr. Arlene Vance, lead author of the study. "Patients who could previously only distinguish between light and dark can now read symbols, navigate hallways, and identify shapes."

### The Trial Results
Out of the 14 participants in the Phase I/II trial:
- **71%** showed significant improvement in key visual acuity and light sensitivity tests.
- No serious adverse events were reported, confirming the safety of the delivery method.
- Two patients reported being able to see their children's faces clearly for the first time in their lives.

This success opens the door for using in-vivo CRISPR therapies to target other genetic conditions in hard-to-reach organs, including the brain, liver, and kidneys. It represents a paradigm shift in how we approach hereditary diseases—moving from managing symptoms to permanently deleting the cause.`,
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    category: "Health Tech",
    author: "Dr. Sarah Jenkins",
    publishedAt: "2026-06-10T08:00:00Z",
    readTime: 5,
    featured: true
  },
  {
    id: "2",
    slug: "gpt-5-released-artificial-general-intelligence-closer-than-ever",
    title: "GPT-5 Released: Is Artificial General Intelligence Closer Than We Think?",
    excerpt: "OpenAI has officially unveiled its next-generation language model, showcasing advanced reasoning, emotional intelligence, and seamless real-time coding abilities.",
    body: `OpenAI has officially launched GPT-5, the successor to its wildly popular language model series. With capabilities that far exceed current benchmarks, the new model has reignited intense conversations about the timeline for achieving Artificial General Intelligence (AGI).

According to OpenAI's announcement, GPT-5 features a massive upgrade in reasoning capabilities, memory retention, and multimodal processing. 

### Key Features of GPT-5
1. **System 2 Thinking:** Unlike previous models that generate text rapidly based on probability, GPT-5 can slow down, plan its answers, double-check its logic, and run internal simulations before outputting a response.
2. **Infinite Context Window:** The model can remember and reference conversations, documents, and codebases spanning millions of tokens, eliminating the 'forgetting' problem in long chats.
3. **Autonomous Agent Integration:** GPT-5 can act as an orchestra conductor, delegating complex tasks to specialized sub-agents and verifying their output automatically.

### The Developer Experience
Software developers are already reporting 10x productivity gains. Rather than suggesting code snippets, GPT-5 can refactor entire repositories, migrate legacy systems to modern frameworks, and debug complex runtime issues with minimal oversight.

However, the rapid advancement has raised concerns. Critics argue that safety guardrails are lagging behind execution speeds. OpenAI insists that safety has been baked into the model's core training loop, utilizing advanced alignment techniques to prevent malicious use cases.`,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    category: "AI",
    author: "Marcus Vance",
    publishedAt: "2026-06-12T10:30:00Z",
    readTime: 4
  },
  {
    id: "3",
    slug: "smart-contact-lenses-monitor-glucose-and-intraocular-pressure",
    title: "Smart Contact Lenses That Monitor Glucose and Intraocular Pressure in Real-Time",
    excerpt: "Bio-engineers have developed a wearable contact lens capable of tracking blood sugar and eye pressure dynamically, offering a non-invasive solution for diabetes and glaucoma.",
    body: `Managing diabetes and glaucoma could soon be as simple as putting in your contact lenses. A joint research team from MIT and Tokyo Medical University has successfully tested a wireless, smart contact lens capable of continuous, non-invasive health monitoring.

The lenses utilize highly sensitive, embedded biosensors to analyze tear fluid. By monitoring glucose levels and intraocular pressure, they provide real-time updates directly to a smartphone app.

### How the Biosensors Operate
The lens features a micro-antenna, a low-power processing chip, and chemical sensors embedded inside a highly breathable hydrogel matrix. 
- **Glucose Detection:** The sensor reacts with glucose oxidase in tears, generating a tiny electric current proportional to blood glucose levels.
- **Pressure Sensing:** Microscopic structural channels in the lens contract or expand depending on intraocular pressure, changing the capacitance of the circuit.

### Medical Benefits
For diabetics, this technology eliminates the painful need for daily finger-prick blood tests. For patients at risk of glaucoma, early detection of high intraocular pressure can prevent permanent optic nerve damage and subsequent vision loss.

"Our goal was to make health tracking invisible and effortless," says Dr. Kenji Takahashi. "By utilizing tears instead of blood, we improve user comfort and compliance dramatically." The researchers are currently seeking FDA clearance for the device.`,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "Health Tech",
    author: "Elena Rostova",
    publishedAt: "2026-06-11T14:15:00Z",
    readTime: 6
  },
  {
    id: "4",
    slug: "y-combinator-w26-batch-trends-biotech-and-ai-defense-dominate",
    title: "Y Combinator W26 Batch Trends: Biotech and AI Defense Startups Dominate",
    excerpt: "As the latest Y Combinator Demo Day wraps up, a clear shift in investor sentiment is visible towards deep tech, localized manufacturing, and autonomous defensive AI.",
    body: `The latest Y Combinator Demo Day has officially concluded, showcasing a diverse range of startups targeting complex, real-world problems. While software-as-a-service (SaaS) products were once the crown jewels of YC, this batch highlights a major pivot toward deep tech.

Biotechnology, localized manufacturing, and autonomous AI systems designed for defense and cyber warfare took center stage.

### Key Trends from YC W26
- **Biotech Boom:** Startups leveraging AI to synthesize new proteins and automate clinical trial recruitment raised significant seed rounds.
- **Physical Robotics:** Startups focusing on building agricultural and manufacturing robots designed to combat labor shortages were highly sought after.
- **Cybersecurity & Defense:** With rising geopolitical tensions, platforms that monitor infrastructure and secure local networks using agentic AI received intense investor interest.

Investors are noting that the era of simple wrapper apps is coming to an end. "We are looking for companies with deep technical moats," remarked one venture partner. "We want to see founders tackling hard engineering and scientific problems that cannot be easily copied by big tech."`,
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    category: "Startups",
    author: "Claire Sterling",
    publishedAt: "2026-06-13T09:00:00Z",
    readTime: 4
  },
  {
    id: "5",
    slug: "apple-glass-augmented-reality-replaces-iphone",
    title: "Apple Glass Review: Can Augmented Reality Finally Replace Your iPhone?",
    excerpt: "Apple's long-rumored AR glasses are here. We spent 48 hours with 'Apple Glass' to see if lightweight spatial computing is ready for the mainstream.",
    body: `After years of speculation, leaks, and hardware delays, Apple has finally released "Apple Glass"—its lightweight augmented reality glasses. Unlike the bulky Vision Pro, Apple Glass looks and feels like standard eyewear, but packs a powerful spatial computing engine.

We spent two days using the device to see if it can truly replace our smartphones for everyday tasks.

### Design and Optics
Apple Glass is surprisingly light, weighing only 72 grams. It features dual microscopic Micro-LED waveguide displays that project sharp, transparent graphics directly onto the lenses. 
- The frame contains eye-tracking sensors, a LiDAR scanner, and spatial audio speakers embedded in the temples.
- It pairs with an iPhone or Apple Watch to offload heavy processing, preserving battery life.

### Real-world Performance
Navigating is done using simple eye gestures, subtle head movements, and voice commands. As you walk down the street, Apple Glass overlays directions, displays notifications, and even translates foreign languages in real-time.

While it won't fully replace your iPhone for heavy tasks like typing long emails or playing complex games, it is incredibly successful at reducing screen time. By bringing information directly into your line of sight, it allows you to stay present in the physical world.`,
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    category: "Gadgets",
    author: "Julian Chen",
    publishedAt: "2026-06-09T16:20:00Z",
    readTime: 5
  },
  {
    id: "6",
    slug: "fusion-energy-breakthrough-commercial-reactors-by-2030",
    title: "Fusion Energy Breakthrough: Net Gain Achieved by Commercial Reactor Prototype",
    excerpt: "A private fusion energy startup has achieved a Q-factor of 2.5 in a compact magnetic confinement reactor, accelerating the timeline for clean, infinite energy.",
    body: `Commercial nuclear fusion is no longer 30 years away. A private energy research startup based in Oxford has announced a massive milestone, achieving a Q-factor of 2.5 in a compact tokamak reactor prototype.

A Q-factor of 2.5 means the reactor produced 2.5 times the energy required to heat the plasma, marking a massive leap forward for magnetic confinement fusion.

### The Technology: High-Temperature Superconductors
The breakthrough was made possible by utilizing new high-temperature superconducting (HTS) magnets. These magnets allow for a much stronger magnetic field in a smaller footprint, enabling the containment of stable plasma at temperatures hotter than the sun.

"We have proven that compact tokamaks are the fastest path to commercial fusion," said the startup's CEO. "Our next goal is to build a grid-connected pilot plant by 2030."

### Global Implications
If successfully scaled, fusion energy offers a source of clean, safe, and virtually limitless electricity. Unlike current nuclear fission plants, fusion produces no long-lived radioactive waste and carries zero risk of meltdowns. It is the holy grail of clean energy.`,
    coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
    category: "Science",
    author: "Dr. Arthur Pendelton",
    publishedAt: "2026-06-08T11:00:00Z",
    readTime: 7
  },
  {
    id: "7",
    slug: "ai-designed-drugs-enter-phase-ii-clinical-trials",
    title: "AI-Designed Drugs Enter Phase II Clinical Trials for Rare Pulmonary Disease",
    excerpt: "An artificial intelligence system has fully designed a novel molecule that has officially advanced to Phase II trials, cutting the discovery phase from years to weeks.",
    body: `The traditional pharmaceutical pipeline is notoriously slow and expensive, often taking over a decade and billions of dollars to bring a single drug to market. However, a biotech startup has shattered this timeline by using deep learning models to design a novel drug from scratch.

The molecule, targeting idiopathic pulmonary fibrosis, has successfully passed safety checks in Phase I and has entered Phase II clinical trials.

### The AI Discovery Engine
Instead of screening thousands of existing chemical compounds, the AI system modeled target proteins in 3D and generated an entirely new molecular structure optimized to bind to the disease receptor.
- **Speed:** The drug discovery phase took only **46 days**, compared to the typical 4-6 years.
- **Cost:** Expenses were cut by over **80%**, potentially leading to much cheaper medication for patients.

"This is a massive victory for AI in medicine," said Chief Scientific Officer Dr. Emily Chen. "It proves that machine learning can go beyond analysis and actively create lifesaving therapeutics."`,
    coverImage: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
    category: "Health Tech",
    author: "Dr. Emily Chen",
    publishedAt: "2026-06-07T09:30:00Z",
    readTime: 5
  },
  {
    id: "8",
    slug: "neuralink-enables-quadriplegic-patient-to-control-robotic-arm",
    title: "Neuralink Enables Quadriplegic Patient to Control Robotic Arm with Unprecedented Precision",
    excerpt: "Using a high-density brain-computer interface, a patient with a spinal cord injury has successfully operated a robotic arm, feeling tactile sensations in real-time.",
    body: `Brain-computer interfaces (BCIs) are reaching new heights of fidelity. A clinical trial participant utilizing a Neuralink implant has demonstrated the ability to control a robotic prosthetic arm with extreme precision, even performing complex tasks like holding a cup or writing.

Crucially, the system works bidirectionally: when the robotic fingers touch an object, the implant stimulates the sensory cortex, giving the patient tactile feedback.

### Bidirectional Control and Sensation
The BCI decodes neural signals from the motor cortex to move the robotic arm while simultaneously encoding signal feedback from sensors on the robotic fingertips back into the brain.
- **Motor Decoding:** Algorithms translate neural firing patterns into 3D movements instantly.
- **Sensory Encoding:** Micro-stimulation pulses are sent back to the sensory area, allowing the patient to feel the texture, temperature, and hardness of objects.

"When I touched the glass, I could feel it in my hand, even though my hand hasn't moved in ten years," said the patient. The success brings us closer to restoring full mobility and sensation to patients with spinal cord injuries.`,
    coverImage: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    category: "Health Tech",
    author: "Dr. Sarah Jenkins",
    publishedAt: "2026-06-05T13:45:00Z",
    readTime: 6
  },
  {
    id: "9",
    slug: "rabbit-r2-pocket-companion-features-offline-voice-ai",
    title: "Rabbit R2 Review: The Pocket Companion with Offline Voice AI",
    excerpt: "Rabbit's follow-up hardware features an on-device local model, removing reliance on cloud APIs and ensuring near-zero latency voice interactions.",
    body: `Rabbit has returned with the Rabbit R2, its next-generation dedicated AI hardware. After the mixed reception of the original device, the company has completely re-engineered the product from the ground up, prioritizing local processing and offline capabilities.

The R2 runs an on-device, highly optimized language model designed to handle voice commands instantly without needing an internet connection.

### On-Device Intelligence
Powered by a custom AI accelerator chip, the Rabbit R2 processes natural language directly on the hardware. 
- **Latency:** Response times have dropped to under 100 milliseconds.
- **Privacy:** Since voice recordings are processed locally and never sent to the cloud, user privacy is completely protected.
- **Offline Actions:** The device can perform voice transcription, note-taking, translation, and scheduling offline.

### The Build Quality
The R2 retains the bright orange aesthetic but upgrades to a premium aluminum frame, a sharper display, and a scroll wheel that feels highly satisfying to use. It's a massive step forward for dedicated AI devices, showing that offline local execution is the future of hardware.`,
    coverImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    category: "Gadgets",
    author: "Julian Chen",
    publishedAt: "2026-06-04T10:00:00Z",
    readTime: 4
  },
  {
    id: "10",
    slug: "deepmind-alphafold-3-predicts-dna-and-rna-interactions",
    title: "DeepMind AlphaFold 3 Predicts DNA, RNA, and Chemical Compound Interactions",
    excerpt: "DeepMind has launched AlphaFold 3, expanding biological modeling to include DNA, RNA, chemical ligands, and post-translational modifications.",
    body: `Google DeepMind has unveiled AlphaFold 3, the latest version of its AI system that has already revolutionized biology. While AlphaFold 2 focused entirely on predicting protein structures, AlphaFold 3 expands its capabilities to model interactions between all of life's molecules.

The model can simulate how proteins interact with DNA, RNA, chemical ligands, and ions, representing a monumental leap for drug discovery.

### Modeling the Entire Molecular Ecosystem
AlphaFold 3 utilizes a diffusion-based architecture similar to AI image generators to predict the 3D structures of molecular complexes.
- **DNA and RNA:** Researchers can now see exactly how proteins bind to genetic sequences, opening up new paths for gene therapies.
- **Drug Interactions:** Chemists can model how potential drug compounds bind to target receptors, accelerating preclinical trials.

"This is the most complete picture of biological machinery we have ever had," said Demis Hassabis, CEO of Google DeepMind. The tool has been made available to researchers worldwide through the AlphaFold Server, ensuring global collaboration.`,
    coverImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80",
    category: "AI",
    author: "Marcus Vance",
    publishedAt: "2026-06-03T15:00:00Z",
    readTime: 5
  }
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((article) => article.featured);
}

export function getArticlesByCategory(categoryName: string): Article[] {
  return articles.filter(
    (article) => article.category.toLowerCase() === categoryName.toLowerCase()
  );
}

export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  return articles
    .filter((article) => article.id !== currentArticle.id)
    .sort((a, b) => {
      // Prioritize same category, then date
      const aSameCat = a.category === currentArticle.category ? 1 : 0;
      const bSameCat = b.category === currentArticle.category ? 1 : 0;
      if (aSameCat !== bSameCat) {
        return bSameCat - aSameCat;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.body.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.author.toLowerCase().includes(q)
  );
}
