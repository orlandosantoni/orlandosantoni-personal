export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      <section className="mb-10">
        <h2 className="font-serif italic text-xl text-ink-muted mb-4">Bio</h2>
        <p>
          Hello I&apos;m Orlando! I&apos;m a software engineer born and raised in New Jersey, and am now living in Washington D.C.
        </p>
      </section>

      <div className="border-b border-rule my-8"></div>

      <section>
        <h2 className="font-serif italic text-xl text-ink-muted mb-6">Experience</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-ink">Software Engineer II @ Spotify</h3>
            <p className="text-sm text-ink-muted italic">April 2023 — Present</p>
          </div>
          <div>
            <h3 className="font-medium text-ink">Computer Science Instructor @ C2 Education</h3>
            <p className="text-sm text-ink-muted italic">Oct 2023 — August 2024</p>
          </div>
          <div>
            <h3 className="font-medium text-ink">Software Development Engineer @ Amazon</h3>
            <p className="text-sm text-ink-muted italic">Oct 2020 — Jan 2023</p>
          </div>
          <div>
            <h3 className="font-medium text-ink">Software Engineer @ Visa</h3>
            <p className="text-sm text-ink-muted italic">June 2018 — Oct 2020</p>
          </div>
        </div>
      </section>
    </main>
  );
}
