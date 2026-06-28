const fs = require('fs');

let data = JSON.parse(fs.readFileSync('inputs.json', 'utf8'));

// Brand
data.brand.name = "Joseph";
data.brand.mark = "✺";
data.brand.meta.title = "Joseph";
data.brand.meta.subtitle = "Agentic Engineer";
data.brand.filed_under = "Agentic Engineering";
data.brand.tagline = "Agentic Engineer";
data.brand.description = "Joseph is an Agentic Engineer building autonomous systems with elegant, Rococo-inspired precision.";
data.brand.primary_url = "https://github.com/joseph";
data.brand.primary_url_label = "GitHub";
data.brand.location = "Paris / Silicon Valley / Web";

// Hero
data.hero.label = "Agentic Engineering & Architecture";
data.hero.headline = [
  { text: "Architecting " },
  { text: "autonomous", em: true },
  { text: " systems with " },
  { text: "classical", em: true },
  { text: " precision" },
  { text: ".", dot: true }
];
data.hero.lead = "Bridging the gap between cutting-edge LLM agents and the timeless elegance of Rococo aesthetics. Building systems that act independently, reason deeply, and interact gracefully.";
data.hero.primary = { label: "View Projects", href: "#work" };
data.hero.secondary = { label: "Read Manifesto", href: "#about" };
data.hero.stats = [
  { value: "01", label: "Agent", sub: "Architect" },
  { value: "Rococo", label: "Design", sub: "Philosophy" },
  { value: "∞", label: "Autonomous", sub: "Loops" }
];
data.hero.index = [
  { num: "01", label: "Reason", active: true },
  { num: "02", label: "Act" },
  { num: "03", label: "Refine" },
  { num: "04", label: "Automate" }
];

// About
data.about.headline = [
  { text: "A delicate balance of " },
  { text: "machine logic", em: true },
  { text: " and " },
  { text: "humanistic", em: true },
  { text: " art" },
  { text: ".", dot: true }
];
data.about.lead = "As an Agentic Engineer, I design cognitive loops that empower AI to plan, execute, and self-correct. I believe the complex internal mechanisms of AI should be wrapped in an interface as intricate and beautiful as an 18th-century automaton.";
data.about.stamp_top = "Agentic Practice";
data.about.footer_text = "Logic · Elegance · Autonomy · Scale";

// Capabilities
data.capabilities.headline = [
  { text: "Engineering " },
  { text: "capabilities", em: true },
  { text: " for the autonomous era" },
  { text: ".", dot: true }
];
data.capabilities.lead = "From orchestrating multi-agent systems to embedding robust reasoning loops, my work focuses on building digital intelligence that operates gracefully.";
data.capabilities.cards = [
  {
    num: "01",
    tag: "Agentic Logic",
    icon_svg: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>',
    title: "Cognitive\nArchitectures",
    body: "Designing self-reflecting loops and tool-use paradigms that allow LLMs to operate as autonomous problem solvers.",
    href: "#"
  },
  {
    num: "02",
    tag: "Orchestration",
    icon_svg: '<path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2" fill="none"/>',
    title: "Multi-Agent\nSystems",
    body: "Coordinating fleets of specialized agents. Like a well-conducted symphony, each agent plays its part to accomplish complex tasks.",
    href: "#"
  },
  {
    num: "03",
    tag: "Aesthetics",
    icon_svg: '<path d="M12 2L2 22h20L12 2z" stroke="currentColor" stroke-width="2" fill="none"/>',
    title: "Rococo\nInterfaces",
    body: "Bringing the ornate, asymmetric, and elegant details of Rococo art to modern AI terminal and web interfaces.",
    href: "#"
  },
  {
    num: "04",
    tag: "Infrastructure",
    icon_svg: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="4 4"/>',
    title: "Autonomous\nPipelines",
    body: "Building robust CI/CD and deployment pipelines that agents themselves can trigger and monitor.",
    href: "#"
  }
];

// Labs
data.labs.headline = [
  { text: "Thoughts, " },
  { text: "experiments", em: true },
  { text: ", and clockwork" },
  { text: ".", dot: true }
];

// Footer
data.footer.brand_description = "Joseph is an Agentic Engineer focused on the intersection of autonomous AI systems and classical Rococo aesthetics.";
data.footer.mega = [
  { text: "Agentic " },
  { text: "Elegance", em: true }
];

// Work
data.work.headline = [
  { text: "Selected " },
  { text: "mechanisms", em: true }
];

// Testimonial
data.testimonial.quote = [
  { text: "He builds AI agents that operate with the " },
  { text: "precision", em: true },
  { text: " of a Swiss watchmaker and the " },
  { text: "grace", em: true },
  { text: " of a French courtier." }
];

data.imagery.strategy = "bring-your-own";
data.imagery.assets_path = "./assets/";

fs.writeFileSync('inputs.json', JSON.stringify(data, null, 2));
