export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Let&apos;s Talk
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
        Whether you need a strategic AI roadmap, a custom generative AI
        system, or an expert audit of your existing models — reach out and
        let&apos;s discuss how we can help.
      </p>

      <div className="mt-12 space-y-6">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="font-semibold">Email</h2>
          <a
            href="mailto:alexander.aiconsultant@gmail.com"
            className="mt-2 block text-[var(--accent)] hover:underline"
          >
            alexander.aiconsultant@gmail.com
          </a>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="font-semibold">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/jia-hong-huang-7139a9b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[var(--accent)] hover:underline"
          >
            Jia-Hong Kay Huang
          </a>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="font-semibold">Location</h2>
          <p className="mt-2 text-[var(--muted)]">
            Seattle, Washington, United States
          </p>
        </div>
      </div>
    </main>
  );
}
