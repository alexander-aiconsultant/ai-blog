import Link from "next/link";

const services = [
  {
    title: "Enterprise AI Strategy & Readiness",
    description:
      "Many businesses know they need AI but have no idea where to start. We act as your strategic entry point.",
    items: [
      "Use-Case Identification — Assess current workflows to find where AI provides the highest ROI.",
      "AI Feasibility Assessments — Evaluate whether your data infrastructure is ready for machine learning.",
      "Executive Education — Demystify AI capabilities for C-suite leadership and set realistic expectations.",
      "AI Roadmap Development — Deliver a step-by-step technical plan your internal team can execute.",
    ],
  },
  {
    title: "Custom Generative AI & Automation",
    description:
      "We build scalable intelligent systems that understand your proprietary data and automate complex workflows.",
    items: [
      "Foundational Model Integration — Fine-tune and deploy LLMs as internal knowledge bases, customer agents, or analysis tools.",
      "Workflow Automation — Build pipelines that read documents, extract key data, and generate reports automatically.",
      "Conversational AI — Design multi-turn chatbots that interact naturally and execute complex tasks across domains.",
      "Domain-Specific LLM Solutions — Tailor language models for specialized fields like law, finance, and healthcare.",
    ],
  },
  {
    title: "Multi-Modal Data Analytics",
    description:
      "Unlock value from your unstructured text, video, and audio data with systems that see, hear, and understand.",
    items: [
      "Media & Content Intelligence — Automatically analyze, tag, and summarize massive video and audio archives.",
      "Advanced Computer Vision — Custom vision systems for quality control, monitoring, or healthcare diagnostics.",
      "Sensor & Audio Processing — Detect anomalies, recognize speech patterns, and monitor environments.",
      "Interactive Retrieval — Build search systems that understand natural language queries across multi-modal data.",
    ],
  },
  {
    title: "AI Auditing, Optimization & Scaling",
    description:
      "Ensure your AI systems run safely, accurately, and cost-effectively in production.",
    items: [
      "Model Robustness & Safety Audits — Stress-test models to prevent hallucinations, identify biases, and ensure reliability.",
      "Efficiency & Cost Optimization — Restructure ML pipelines to run faster and cut cloud infrastructure costs.",
      "Continuous Evaluation — Design automated monitoring for model degradation and data drift over time.",
      "Scalability Architecture — Ensure your AI systems can handle growth without performance degradation.",
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
        How We Help
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
        We offer specialized, high-impact AI consulting — not generic
        software development. Every engagement is tailored to deliver
        measurable business outcomes.
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
          How We Work
        </h2>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          We offer premium hourly consulting sold in pre-paid blocks. You
          get direct access to a Ph.D.-level AI expert with Big Tech
          experience — not a junior associate.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-2xl font-bold">10 hrs</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Starter Block</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Ideal for a focused strategy session, architecture review, or
              initial AI feasibility assessment.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--card)] p-6 ring-1 ring-[var(--accent)]/20">
            <p className="text-2xl font-bold">20 hrs</p>
            <p className="mt-1 text-sm text-[var(--accent)]">Most Popular</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Enough for a comprehensive AI roadmap, model auditing, or
              hands-on technical guidance for your engineering team.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-2xl font-bold">40 hrs</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Deep Engagement</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              For ongoing advisory, fractional AI leadership, or complex
              multi-phase projects requiring sustained expert involvement.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="font-semibold">What&apos;s Included</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Live strategy and architecture calls",
                "Code and model architecture reviews",
                "Technical roadmap and blueprint drafting",
                "Research and analysis for your specific implementation challenges",
                "Written recommendations and documentation",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">How It Works</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Choose a pre-paid block (10, 20, or 40 hours).",
                "Hours are drawn down as we work together.",
                "Blocks expire within 60 days to keep momentum.",
                "Unused hours are non-refundable — this ensures commitment from both sides.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">A Note on Scope</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              You are engaging a senior AI architect and strategist. Billable
              work includes high-level architecture design, model evaluation,
              algorithm optimization, and strategic guidance. For
              implementation tasks like data cleaning scripts or basic
              pipeline setup, we recommend pairing our advisory with your
              internal engineering team or a dedicated developer.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Discuss Your Project
        </Link>
      </section>
    </main>
  );
}
