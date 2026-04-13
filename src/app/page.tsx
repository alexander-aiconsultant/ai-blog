import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
          AI Consulting &amp; Advisory
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          Turning AI Research into Business Results
        </h1>
        <p className="mt-6 text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
          We are a premier AI consultancy that bridges the gap between
          theoretical breakthroughs and production-ready systems. We don&apos;t
          just implement APIs — we engineer robust, tailored AI solutions
          with mathematical precision and scalable architecture.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 border border-[var(--border)] text-[var(--muted)] rounded-lg text-sm font-medium hover:text-white hover:border-white/30 transition-colors"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">Ph.D.</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Computer Science, UvA</p>
          </div>
          <div>
            <p className="text-3xl font-bold">30+</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Publications at Top Venues</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5+</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Big Tech Research Labs</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Marie Curie</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Fellow (Permanent)</p>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Enterprise AI Solutions
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-lg font-semibold">AI Strategy &amp; Readiness</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              Identify high-ROI AI use cases, assess data infrastructure
              readiness, and build actionable roadmaps for your leadership team.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-lg font-semibold">Generative AI &amp; Automation</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              Fine-tune and deploy LLMs as intelligent knowledge bases,
              customer agents, or document analysis pipelines tailored to
              your proprietary data.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-lg font-semibold">Multi-Modal Data Analytics</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              Unlock value from unstructured text, video, and audio data
              with custom computer vision, media intelligence, and sensor
              processing systems.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-lg font-semibold">AI Auditing &amp; Optimization</h3>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
              Stress-test your AI models for robustness and bias, optimize
              compute costs, and design continuous monitoring for model
              degradation.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            Learn more about our services →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto">
            Whether you need a strategic AI roadmap, a custom generative AI
            system, or an audit of your existing models — let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
