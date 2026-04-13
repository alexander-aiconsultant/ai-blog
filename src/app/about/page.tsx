import Link from "next/link";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        About
      </h1>

      <section className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Hi, I&apos;m Jia-Hong Kay Huang — an AI researcher, applied
          scientist, and the founder of Alexander AI Consulting.
        </p>
        <p>
          I hold a Ph.D. in Computer Science from the University of
          Amsterdam, where my research focused on multi-modal machine
          learning, large language models, and computer vision. I&apos;ve
          published extensively at top-tier venues including AAAI, CVPR,
          NAACL, SIGIR, CIKM, WACV, and ICASSP.
        </p>
        <p>
          My industry experience spans research roles at Google, Microsoft
          Research, Amazon, MediaTek, and the BBC, where I worked on
          problems ranging from active speaker detection and video
          summarization to medical AI and LLM applications. At Google, my
          work led to a patent filing and a state-of-the-art method for
          active speaker detection. A video summarization technology I
          proposed in 2020 was later adopted in a similar form by
          Google&apos;s Gemini Pro-1.5.
        </p>
        <p>
          I was elected as a permanent Marie Skłodowska-Curie Fellow in
          2018 and was selected among 31 students from thousands of
          applicants across EMEA for Google&apos;s exclusive Inside Look
          program in 2019.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I Can Help You With
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">AI Strategy &amp; Roadmap</h3>
            <p className="mt-2 text-sm text-gray-600">
              Assess where AI can create the most value for your business
              and build a practical adoption plan.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">LLM &amp; NLP Solutions</h3>
            <p className="mt-2 text-sm text-gray-600">
              Design and deploy large language model applications —
              from conversational AI to document analysis and summarization.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Computer Vision &amp; Multi-modal AI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Build systems that understand images, video, and text
              together — including medical imaging, video summarization,
              and visual question answering.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Medical &amp; Health AI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Leverage AI for healthcare applications such as retinal
              image analysis, medical report generation, and clinical
              decision support.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Get in Touch
        </h2>
        <p className="text-gray-700">
          Interested in working together? Reach out and let&apos;s talk.
        </p>
        <div className="flex flex-col gap-2 text-gray-700">
          <p>
            Email:{" "}
            <a
              href="mailto:alexander.aiconsultant@gmail.com"
              className="text-blue-600 hover:underline"
            >
              alexander.aiconsultant@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jia-hong-huang-7139a9b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jia-Hong Kay Huang
            </a>
          </p>
          <p>
            Google Scholar:{" "}
            <a
              href="https://scholar.google.com/citations?user=SrUWuYkAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Publications
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
