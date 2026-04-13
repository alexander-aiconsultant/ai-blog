export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <div className="mt-8 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          I&apos;m an AI researcher and consultant with a Ph.D. in Computer
          Science from the University of Amsterdam. My research focuses on
          artificial intelligence and machine learning.
        </p>
        <p>
          I&apos;ve had the opportunity to work with leading tech organizations
          including Google, Microsoft Research, Amazon, and MediaTek through
          research internships and full-time roles.
        </p>
        <p>
          Through this blog and my consulting practice, I help businesses
          understand and leverage AI to solve real-world problems. Whether
          you&apos;re looking for strategic AI guidance or hands-on
          implementation support, feel free to reach out.
        </p>
        <p>
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 hover:underline"
          >
            Get in touch →
          </a>
        </p>
      </div>
    </main>
  );
}
