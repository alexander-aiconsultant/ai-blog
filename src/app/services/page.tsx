import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Executive Advisory",
    description:
      "You know you need AI, but where do you start? We help leadership teams cut through the hype and make informed decisions.",
    items: [
      "Identify the highest-ROI AI use cases within your existing workflows and operations.",
      "Assess whether your data infrastructure and team are truly ready for machine learning.",
      "Educate C-suite executives on AI capabilities, limitations, and realistic timelines.",
      "Deliver a comprehensive AI roadmap — a step-by-step blueprint your internal team can execute.",
    ],
  },
  {
    title: "Generative AI & LLM Architecture",
    description:
      "We design the architecture and strategy for your generative AI systems — your engineers build it.",
    items: [
      "Evaluate and select the right foundation models (GPT, Llama, Gemini, etc.) for your specific use case.",
      "Design fine-tuning strategies, RAG pipelines, and prompt engineering frameworks for your proprietary data.",
      "Architect conversational AI systems for customer service, internal knowledge bases, or domain-specific applications.",
      "Review and optimize existing LLM implementations for accuracy, cost, and latency.",
    ],
  },
  {
    title: "Multi-Modal AI & Computer Vision Advisory",
    description:
      "Expert guidance on systems that process text, images, video, and audio together.",
    items: [
      "Design architectures for video understanding, media intelligence, and content analysis pipelines.",
      "Advise on computer vision solutions for healthcare diagnostics, quality control, or autonomous monitoring.",
      "Evaluate and recommend approaches for multi-modal retrieval, search, and recommendation systems.",
      "Guide your team on integrating vision-language models into existing products.",
    ],
  },
  {
    title: "AI Model Auditing & Optimization",
    description:
      "Your AI is live — but is it safe, accurate, and cost-efficient? We find out.",
    items: [
      "Stress-test models for robustness, hallucinations, bias, and edge-case failures.",
      "Analyze and restructure ML pipelines to reduce compute costs and improve inference speed.",
      "Design evaluation frameworks and automated monitoring for model degradation and data drift.",
      "Provide independent technical due diligence on AI systems for investors or acquirers.",
    ],
  },
];

export default function Services() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
        Services
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Strategic AI Consulting
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
        You&apos;re not hiring a developer. You&apos;re engaging a senior AI
        architect with a Ph.D. and Big Tech research experience to solve
        your hardest problems — so your team can build with confidence.
      </p>

      <div className="mt-16 space-y-16">
        {services.map((service) => (
          <section key={service.title}>
            <h2 className="text-2xl font-semibold tracking-tight">
              {service.title}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--muted)]"
                >
                  <span className="text-[var(--accent)] mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* How We Work */}
      <section className="mt-20 border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          How Engagements Work
        </h2>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          All consulting is delivered in pre-paid hourly blocks. This keeps
          engagements focused, predictable, and results-driven for both sides.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-2xl font-bold">10 hrs</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Starter Block</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              A focused engagement — ideal for an AI feasibility assessment,
              architecture review, or strategic deep-dive on a specific
              challenge.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--card)] p-6 ring-1 ring-[var(--accent)]/20">
            <p className="text-2xl font-bold">20 hrs</p>
            <p className="mt-1 text-sm text-[var(--accent)]">Most Popular</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Enough to deliver a full AI roadmap, audit an existing system,
              or provide sustained advisory across multiple technical
              decisions.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-2xl font-bold">40 hrs</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Deep Engagement</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Fractional AI leadership — ongoing strategic advisory, team
              mentoring, and architecture guidance across a longer horizon.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="font-semibold">What You Get</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Strategic advisory calls and working sessions",
                "Architecture design and technical decision guidance",
                "Model and pipeline evaluation with written recommendations",
                "AI roadmaps and technical blueprints your team can execute",
                "Research and analysis tailored to your specific challenges",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">The Process</h3>
            <ul className="mt-4 space-y-2">
              {[
                "We start with a free 30-minute discovery call to understand your challenge.",
                "Choose a pre-paid block that fits your scope (10, 20, or 40 hours).",
                "Hours are drawn down as we work together — you always know where you stand.",
                "All blocks expire within 60 days to maintain focus and momentum.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">Maximizing Your Investment</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              Every hour you spend with us is focused on the decisions that
              matter most — architecture design, model selection, algorithm
              strategy, and technical leadership. We operate at the level
              where a single insight can save your team months of engineering
              effort and significant infrastructure costs.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Book a Free Discovery Call
        </Link>
      </section>
    </main>
  );
}
