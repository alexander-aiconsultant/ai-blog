export default function Founder() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
        Founder
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Jia-Hong Kay Huang, Ph.D.
      </h1>
      <p className="mt-2 text-lg text-[var(--muted)]">
        AI Researcher · Applied Scientist · Marie Curie Fellow
      </p>

      <div className="mt-12 space-y-6 text-[var(--muted)] leading-relaxed">
        <p>
          Alexander AI Consulting was founded by Jia-Hong Kay Huang, a
          computer scientist with deep expertise in multi-modal machine
          learning, large language models, and computer vision.
        </p>
        <p>
          Jia-Hong holds a Ph.D. in Computer Science from the University of
          Amsterdam, with a dual undergraduate background in Mathematical
          Sciences and Statistics. His research has been published at
          top-tier venues including AAAI, CVPR, NAACL, SIGIR, CIKM, WACV,
          ICASSP, and ICPR — spanning natural language processing, computer
          vision, and artificial intelligence.
        </p>
        <p>
          His industry experience includes applied research roles at Google,
          Microsoft Research, Amazon, MediaTek, and the BBC. At Google, his
          work led to a patent filing and a state-of-the-art active speaker
          detection method. A query-controllable video summarization
          technology he proposed in 2020 was later adopted in a similar form
          by Google Gemini Pro-1.5 in 2024.
        </p>
        <p>
          In 2018, he was elected as a permanent Marie Skłodowska-Curie
          Fellow. In 2019, he was selected among 31 students from thousands
          of applicants across EMEA for Google&apos;s exclusive Inside Look
          program.
        </p>
      </div>

      {/* Research Highlights */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Research Highlights
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">Multi-Modal Video Understanding</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Pioneered query-controllable video summarization and GPT-2
              based multi-modal methods. Published at ICMR, ICME, CVPR
              Workshop, and TMM.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">LLM for Law &amp; Finance</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Developed LLM-based systems for numerical estimation and
              operational efficiency in legal domains. Published at CIKM
              (Oral).
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">Medical AI &amp; Diagnostics</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Led DeepEyeNet, a large-scale retinal image dataset project.
              Built medical report generation systems published at WACV
              (Oral) and ICIP.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="font-semibold">VQA Robustness &amp; Chain-of-Thought</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Introduced a robustness analysis framework and the concept of
              &quot;basic questions&quot; — a precursor to modern
              Chain-of-Thought prompting. Published at AAAI (Oral, 16.2%
              acceptance rate).
            </p>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Industry Experience
        </h2>
        <div className="mt-8 space-y-4">
          {[
            { company: "Google", role: "Research Intern — Active Speaker Detection, Patent Filing", location: "Mountain View" },
            { company: "Amazon", role: "Applied Scientist Intern — Vision Transformer, Audio Transformer", location: "Seattle" },
            { company: "Microsoft Research", role: "ML Research Intern — Causal Video Summarization, Medical AI", location: "Cambridge" },
            { company: "MediaTek", role: "ML Research Intern — Retinal Image Captioning, Image Inpainting", location: "Hsinchu" },
            { company: "BBC R&D", role: "ML Research Intern — News Video Summarization", location: "London" },
          ].map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-[var(--border)]"
            >
              <span className="font-semibold w-48">{exp.company}</span>
              <span className="text-sm text-[var(--muted)] flex-1">{exp.role}</span>
              <span className="text-sm text-[var(--muted)]">{exp.location}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mt-16 flex flex-wrap gap-6">
        <a
          href="https://scholar.google.com/citations?user=SrUWuYkAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          Google Scholar →
        </a>
        <a
          href="https://www.linkedin.com/in/jia-hong-huang-7139a9b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          LinkedIn →
        </a>
      </section>
    </main>
  );
}
