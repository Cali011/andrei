/* Blue Hour Scrapbook page: offset editorial storytelling, tactile paper moments, and copy kept close to the friend's real voice. */
import { useState } from "react";
import { ArrowDownRight, Clock3, Menu, X } from "lucide-react";

const heroArt = "/hero-blue-hour.png";
const stickerArt = "/friendship-stickers.png";
const logoArt = "/andrei-logo.png";

function Nav({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const links = [
    ["The letter", "#letter"],
    ["Eight years", "#timeline"],
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="Back to the top">
          <img src={logoArt} alt="Illustrated portrait logo of Andrei" className="h-11 w-11 rounded-full border border-white/25 object-cover shadow-[0_10px_30px_rgba(0,0,0,.25)]" />
          <span className="mono text-[10px] font-bold uppercase tracking-[.2em] text-cyan-100">A + orbit</span>
        </a>
        <button className="btn-press flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`${open ? "flex" : "hidden"} absolute right-5 top-16 w-56 flex-col gap-2 rounded-2xl border border-white/15 bg-[#0b2249]/95 p-3 text-white shadow-2xl backdrop-blur-xl sm:right-8 lg:right-12`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-blue-100 transition hover:bg-white/10 hover:text-white">{label}</a>)}
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow mb-5 flex items-center gap-3 ${light ? "text-cyan-200" : "text-[#237aa7]"}`}><span className="h-px w-9 bg-current" />{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <main id="top" className="page-shell">
      <section className="relative isolate min-h-[720px] overflow-hidden bg-[#071a3b] text-white">
        <div className="stars absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,59,.96)_0%,rgba(7,26,59,.64)_48%,rgba(7,26,59,.08)_100%)]" />
        <Nav open={menuOpen} setOpen={setMenuOpen} />
        <div className="absolute right-[-5%] top-[13%] w-[70%] max-w-3xl rotate-2 sm:right-[4%] lg:top-[16%] lg:w-[61%]">
          <div className="absolute -left-5 -top-5 z-10 h-14 w-28 rotate-[-8deg] bg-[#f7db80]/80 shadow-sm" />
          <div className="absolute -bottom-4 -right-5 z-10 h-12 w-24 rotate-[7deg] bg-[#f7db80]/70 shadow-sm" />
          <div className="relative border-[10px] border-[#fffdf6] bg-[#fffdf6] p-2 shadow-[0_22px_80px_rgba(0,0,0,.34)]"><img src={heroArt} alt="Blue-hour illustration of two friends under a moon" className="h-auto w-full object-cover opacity-90" /><div className="flex items-center justify-between px-2 pb-1 pt-3 text-[#237aa7]"><span className="mono text-[9px] uppercase tracking-[.15em]">kept under moonlight / 01</span></div></div>
          <div className="absolute -bottom-12 -left-9 z-10 hidden rotate-[-7deg] bg-[#e8e5ff] px-4 py-2 shadow-lg sm:block"><span className="mono text-[9px] font-bold uppercase tracking-[.14em] text-[#5b55a8]">tiny note: still here</span></div>
        </div>
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-2xl reveal">
            <div className="mono mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-cyan-200"><span className="h-2 w-2 rounded-full bg-[#56d7ff] shadow-[0_0_18px_#56d7ff]" />A little archive of us / 2018 to now</div>
            <h1 className="display max-w-xl text-6xl font-semibold leading-[.92] tracking-[-.04em] sm:text-8xl">For the one who stayed <em className="text-[#56d7ff]">through every round.</em></h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-blue-100 sm:text-lg">A blue-hour letter for Andrei Mhel T. Sayas, my Par, my Sayas, and the only best friend I’ve ever needed.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#letter" className="btn-press inline-flex items-center gap-3 rounded-full bg-[#56d7ff] px-5 py-3 text-sm font-bold text-[#071a3b] shadow-[0_8px_30px_rgba(86,215,255,.25)] hover:bg-white">Read the letter <ArrowDownRight size={17} /></a>
              <span className="mono text-[10px] uppercase tracking-[.17em] text-blue-200">scroll slowly, okay?</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-cyan-200 lg:flex"><span className="mono text-[10px] uppercase tracking-[.2em]">friendship status</span><span className="h-2 w-2 rounded-full bg-[#f7db80]" /></div>
      </section>

      <section className="relative bg-[#eaf7ff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="relative pl-1 lg:pt-8"><SectionLabel>the friendship file</SectionLabel><h2 className="display max-w-xl text-5xl leading-[.97] tracking-[-.04em] text-[#0b2249] sm:text-6xl">Meet the sweetest person I know.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#315475]">His name is <strong className="text-[#0b2249]">Andrei Mhel T. Sayas</strong>. I call him Par, Sayas, Andrei, or Mhel. He’s the kind of person who can make an ordinary day feel like something worth keeping.</p><div className="mt-12 grid max-w-lg grid-cols-2 gap-x-7 gap-y-8 border-t border-[#9bc9e4] pt-6"><div><div className="mono text-[10px] uppercase tracking-[.16em] text-[#237aa7]">born</div><div className="mt-2 text-sm font-bold text-[#0b2249]">September 14, 2004</div></div><div><div className="mono text-[10px] uppercase tracking-[.16em] text-[#237aa7]">studied</div><div className="mt-2 text-sm font-bold text-[#0b2249]">Hospitality Management</div></div><div><div className="mono text-[10px] uppercase tracking-[.16em] text-[#237aa7]">known as</div><div className="mt-2 text-sm font-bold text-[#0b2249]">Par · Sayas · Andrei · Mhel</div></div><div><div className="mono text-[10px] uppercase tracking-[.16em] text-[#237aa7]">current status</div><div className="mt-2 flex items-center gap-2 text-sm font-bold text-[#0b2249]"><span className="h-2 w-2 rounded-full bg-emerald-400" />Forever my best friend</div></div></div></div>
          <div className="paper tape lift relative mt-4 rotate-1 px-7 pb-8 pt-10 sm:px-10"><div className="absolute right-6 top-5 mono text-[10px] font-bold text-[#237aa7]">ID / 001</div><div className="notebook-rule space-y-6 pb-2 text-[17px] leading-8 text-[#23415f]"><p>Somehow, out of all the people I could have met in school, <span className="font-bold text-[#0b2249]">you became my best friend.</span></p><p>Almost eight years later, I still don’t know exactly how we clicked. It just happened, and I’m really glad it did.</p><p>We’ve argued, misunderstood each other, and had more random quarrels than I can count. But somehow, we always find our way back.</p></div><div className="mt-8 flex items-center justify-between border-t border-[#b5d4e3] pt-5"><span className="mono text-[10px] uppercase tracking-[.14em] text-[#237aa7]">signed with love, mostly</span></div></div>
        </div>
      </section>

      <section id="letter" className="relative overflow-hidden bg-[#0b2249] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 grid-lines opacity-30" />        <div className="relative mx-auto max-w-7xl"><div className="absolute right-0 top-0 hidden rotate-6 rounded-full border border-cyan-300/50 px-4 py-3 text-cyan-200 lg:block"><span className="mono text-[10px] font-bold uppercase tracking-[.16em]">24/7 / saved</span></div><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><SectionLabel light>the actual letter</SectionLabel><h2 className="display text-5xl leading-[.98] tracking-[-.04em] sm:text-6xl">Eight years of <em className="text-[#56d7ff]">“HAHAHA.”</em></h2><p className="mt-7 max-w-sm text-blue-200">The long version, because a friendship like this deserves more than a caption.</p><button onClick={() => setOpened(!opened)} className="btn-press mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300 hover:text-[#0b2249]">{opened ? "Fold the letter" : "Open the letter"}<ArrowDownRight size={17} /></button></div>
          <div className={`${opened ? "max-h-[1200px] opacity-100" : "max-h-[430px] opacity-95"} relative overflow-hidden transition-all duration-500`}><div className="absolute bottom-0 left-0 right-0 z-10 h-28 bg-gradient-to-t from-[#0b2249] to-transparent" /><article className="max-w-2xl space-y-7 text-[17px] leading-8 text-blue-50"><p>Dear Andrei,</p><p>I met you in school, and we became classmates from Grade 8 until Grade 10. We officially became best friends near the end of Grade 9. Honestly, I still don’t know exactly how we clicked, but somehow, our friendship just happened, and I’m really glad it did.</p><p>One funny thing about us is that we used to have the <strong className="text-[#56d7ff]">same type of girl</strong>. If I liked a girl, there was a big chance you liked her too. And if you liked her, chances were, I would also end up liking her. Same taste, no planning. HAHAHA!</p><p>You are sweet, caring, kind, and very affectionate. You’re also the type of person who always asks for a kiss. Yes, you read that right. You’re definitely the sweet one between the two of us, totally the opposite of me.</p><p>You are my only best friend. We don’t have to be perfect and we don’t always agree, but at the end of the day, we remain best friends. Almost eight years of memories, laughs, and probably countless more quarrels to come.</p><p>I’m genuinely grateful I met you. And out of everyone I could have met, <strong className="text-[#56d7ff]">you became my best friend.</strong></p><p className="display text-3xl italic text-[#f7db80]">Always your Par,<br />JOHNJOHN</p></article></div>
        </div></div>
      </section>

      <section id="timeline" className="bg-[#fffdf6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><SectionLabel>the timeline</SectionLabel><h2 className="display max-w-xl text-5xl leading-[.98] tracking-[-.04em] text-[#0b2249] sm:text-6xl">From classmates to <em className="text-[#237aa7]">constant.</em></h2></div><div className="mono text-[10px] uppercase tracking-[.16em] text-[#58829d]">est. late grade 9 / still going</div></div><div className="relative mt-14 min-h-[500px] md:min-h-[330px]"><div className="paper lift absolute left-0 top-0 w-full max-w-sm -rotate-2 p-7 md:w-[34%]"><div className="absolute -right-4 -top-3 h-9 w-20 rotate-6 bg-[#f7db80]/80" /><span className="mono text-[10px] font-bold text-[#237aa7]">01 / THE BEGINNING</span><h3 className="display mt-8 text-3xl text-[#0b2249]">Same classroom.</h3><p className="mt-3 text-sm leading-6 text-[#52708b]">Grade 8 to Grade 10. A lot of ordinary school days that quietly turned into our story.</p><div className="mt-8 flex items-center gap-2 text-[#237aa7]"><span className="h-2 w-2 rounded-full bg-[#56d7ff]" /><span className="mono text-[9px] uppercase tracking-[.14em]">archive stamp</span></div></div><div className="paper lift absolute left-[19%] top-36 w-full max-w-sm rotate-2 bg-[#dff5ff] p-7 md:left-[33%] md:top-14 md:w-[34%]"><span className="mono text-[10px] font-bold text-[#237aa7]">02 / THE PLOT TWIST</span><h3 className="display mt-8 text-3xl text-[#0b2249]">Same type.</h3><p className="mt-3 text-sm leading-6 text-[#52708b]">Different crushes, somehow the same taste. A friendship built on suspiciously similar choices.</p><div className="mt-8 rotate-[-3deg] text-right mono text-[9px] uppercase tracking-[.14em] text-[#5b55a8]">HAHAHA / suspicious</div></div><div className="paper lift absolute bottom-0 right-0 w-full max-w-sm -rotate-1 bg-[#e8e5ff] p-7 md:bottom-auto md:top-5 md:w-[34%]"><div className="absolute -left-4 -top-3 h-9 w-20 rotate-[-8deg] bg-[#f7db80]/80" /><span className="mono text-[10px] font-bold text-[#5b55a8]">03 / THE CONSTANT</span><h3 className="display mt-8 text-3xl text-[#0b2249]">Always back.</h3><p className="mt-3 text-sm leading-6 text-[#52708b]">Arguments happen. Misunderstandings happen. We still find the way back to each other.</p></div></div></div></section>


      <section className="relative overflow-hidden bg-[#071a3b] px-5 py-24 text-center text-white sm:px-8 lg:px-12"><div className="stars absolute inset-0 opacity-50" /><div className="relative mx-auto max-w-3xl"><img src={stickerArt} alt="Illustrated portrait sticker of Andrei" className="mx-auto mb-10 h-28 w-28 rounded-full border border-white/20 object-cover shadow-[0_18px_50px_rgba(0,0,0,.28)]" /><div className="mono mb-5 text-[10px] uppercase tracking-[.2em] text-cyan-200">friendship status / permanently saved</div><h2 className="display text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">At the end of the day, <em className="text-[#56d7ff]">it’s still you.</em></h2><p className="mx-auto mt-8 max-w-xl text-base leading-7 text-blue-200">Thank you for eight years of being sweet, caring, annoying, affectionate, and impossible to replace.</p></div></section>

      <footer className="flex flex-col justify-between gap-4 bg-[#06142e] px-5 py-6 text-blue-300 sm:flex-row sm:items-center sm:px-8 lg:px-12"><span className="mono text-[10px] uppercase tracking-[.17em]">for Andrei</span><span className="flex items-center gap-2 text-xs"><Clock3 size={14} /> best friend archive</span></footer>
    </main>
  );
}
