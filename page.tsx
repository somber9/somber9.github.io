import Image from "next/image";

const projects = [
  ["BrainNeRF", "Physics-guided EEG spatial super-resolution for reconstructing missing brain signals."],
  ["Alzheimer's Detection", "Multimodal analysis of EEG, MRI, and olfactory signals for early diagnosis."],
  ["Conductive Hydrogel", "Biomedical material exploration for sensing and intelligent health applications."],
];

export default function Home() {
  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(247,243,234,.82)] backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#opening" className="text-[15px] font-semibold tracking-tight">Somber</a>
          <nav className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#research">Research</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#beyond">Beyond</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="opening" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <span className="cloud left-[8%] top-[18%]" />
        <span className="cloud right-[10%] bottom-[16%] scale-125" />
        <div className="container fade-in">
          <p className="mb-7 text-sm text-[var(--muted)]">Somber</p>
          <h1 className="serif max-w-5xl text-[clamp(54px,10vw,128px)] leading-[.92] tracking-[-.04em]">
            让一朵云推动另一朵云。
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Passing kindness forward, through research.
          </p>
        </div>
      </section>

      <section className="section flex items-center">
        <div className="container grid items-center gap-16 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="kicker mb-8">Bener Su</p>
            <h2 className="serif max-w-3xl text-[clamp(44px,7vw,92px)] leading-[.96] tracking-[-.03em]">
              Building AI that understands the brain and serves people.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I am an undergraduate student in Biomedical Engineering at Nanjing University, exploring brain–computer interfaces, AI for healthcare, and computational neuroscience.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#research">Explore research</a>
              <a className="btn" href="mailto:sober_9@foxmail.com">Contact</a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-[var(--line)] bg-white/30 p-3 shadow-[0_24px_80px_rgba(25,23,21,.12)]">
              <Image src="/forest.jpeg" alt="Bener Su in a forest" width={900} height={1150} className="aspect-[4/5] w-full rounded-[24px] object-cover object-center" priority />
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Biomedical Engineering · Nanjing University · AI for Healthcare</p>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="container">
          <p className="kicker mb-8">Research</p>
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <h2 className="serif text-[clamp(42px,6vw,84px)] leading-none tracking-[-.03em]">How can AI recover what sparse signals cannot see?</h2>
            <div>
              <h3 className="text-2xl font-semibold">BrainNeRF</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                My current research studies EEG spatial super-resolution: reconstructing high-density EEG signals from limited observed channels using physics-guided neural field representations.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="card p-5"><p className="text-sm text-[var(--muted)]">Input</p><p className="mt-2 font-semibold">Sparse EEG</p></div>
                <div className="card p-5"><p className="text-sm text-[var(--muted)]">Model</p><p className="mt-2 font-semibold">Neural Field</p></div>
                <div className="card p-5"><p className="text-sm text-[var(--muted)]">Goal</p><p className="mt-2 font-semibold">High-density EEG</p></div>
              </div>
              <p className="mt-8 text-sm text-[var(--muted)]">Advisor: Prof. Ran Wang · Target venue: AAAI · Dataset: FACED</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="kicker mb-8">Projects</p>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(([title, copy]) => (
              <article className="card p-8" key={title}>
                <h3 className="text-2xl font-semibold tracking-[-.02em]">{title}</h3>
                <p className="mt-5 leading-7 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beyond" className="section">
        <div className="container grid gap-12 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="kicker mb-8">Beyond Research</p>
            <h2 className="serif text-[clamp(42px,6vw,84px)] leading-none tracking-[-.03em]">A life outside the lab.</h2>
          </div>
          <div className="grid gap-6">
            <div className="card p-8">
              <h3 className="text-xl font-semibold">Philosophy</h3>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">I believe research is one way to pass forward the warmth I have received from society.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold">Curiosity</h3>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">I enjoy exploring the connections between intelligence, life, technology, and humanity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex min-h-screen items-center border-t border-[var(--line)] py-24">
        <div className="container">
          <blockquote className="serif max-w-5xl whitespace-pre-line text-[clamp(36px,6vw,80px)] leading-[1.08] tracking-[-.03em]">
{`如果有一天，

我的研究能够帮助一个人重新开口说话，

或者帮助一个家庭更早发现疾病，

那么，

那些无数个深夜，

都值得。`}
          </blockquote>
          <p className="mt-10 text-lg text-[var(--muted)]">—— 让一朵云推动另一朵云</p>
          <div className="mt-16 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <a className="hover:text-[var(--accent)]" href="mailto:sober_9@foxmail.com">sober_9@foxmail.com</a>
            <span>·</span>
            <a className="hover:text-[var(--accent)]" href="https://github.com/Somber9" target="_blank">GitHub</a>
            <span>·</span>
            <span>Bener Su · Somber</span>
          </div>
        </div>
      </section>
    </main>
  );
}
