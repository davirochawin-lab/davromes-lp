import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const TITLE = "Ganhe dinheiro com Inteligência Artificial usando o celular";
const DESC =
  "Descubra 30 maneiras de usar a Inteligência Artificial para buscar uma nova fonte de renda — sem ser programador. Fale comigo no WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

function WhatsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

function Cta({ className = "" }: { className?: string }) {
  return (
    <Button asChild variant="cta" className={`motion-cta w-full sm:w-auto ${className}`}>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsIcon />
      QUERO APRENDER A GANHAR DINHEIRO COM IA
    </a>
    </Button>
  );
}

function AiOrb() {
  return (
    <div aria-hidden="true" className="ai-art relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[18%] rounded-full bg-glow-violet/40 blur-3xl animate-pulse-soft" />
      <div className="absolute inset-[28%] rounded-full bg-glow-blue/40 blur-2xl" />
      <div className="absolute inset-0 rounded-full border border-border animate-orbit">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
      </div>
      <div className="absolute inset-[12%] rounded-full border border-dashed border-border animate-orbit-rev">
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent" />
      </div>
      <div className="ai-core absolute inset-[30%] glass flex items-center justify-center rounded-full">
        <span className="font-display text-5xl font-bold text-gradient">IA</span>
      </div>
    </div>
  );
}

function Index() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = mainRef.current?.querySelectorAll<HTMLElement>(
      "h1, h2, h3, p, .motion-panel, .motion-number, .hero-copy > div, .hero-art, section:last-child > div",
    );
    if (!targets || !("IntersectionObserver" in window)) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const updateMotion = () => {
      observer?.disconnect();
      if (motionPreference.matches) {
        targets.forEach((target) => target.classList.remove("motion-enter"));
        return;
      }
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-enter");
            observer?.unobserve(entry.target);
          }
        }
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      targets.forEach((target, index) => {
        target.dataset["motionOrder"] = String(index % 3);
        if (!target.classList.contains("motion-enter")) observer?.observe(target);
      });
    };
    updateMotion();
    motionPreference.addEventListener("change", updateMotion);
    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-glow-violet/25 blur-[120px]" />

      <main ref={mainRef} className="relative">
        {/* HERO */}
        <section className="hero-section mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-10 sm:gap-10 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-24">
          <div className="hero-copy min-w-0">
            <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
              Renda com Inteligência Artificial
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Ganhe dinheiro com <span className="text-gradient">Inteligência Artificial</span> usando apenas o seu celular.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Você não precisa ser programador, especialista em tecnologia ou ter uma empresa para começar.
            </p>
            <div className="mt-8"><Cta /></div>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Hoje, existem diversas formas de usar ferramentas de Inteligência Artificial para criar serviços, vender soluções e encontrar novas oportunidades de renda — e muitas delas podem ser iniciadas apenas com um celular e acesso à internet.
            </p>
          </div>
          <div className="hero-art mx-auto w-full max-w-[240px] sm:max-w-md"><AiOrb /></div>
        </section>

        {/* IDENTIFICAÇÃO */}
        <section className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Talvez você esteja exatamente nessa situação...</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Você quer ganhar mais dinheiro, mas não sabe por onde começar.</p>
            <p>
              Já viu pessoas falando sobre Inteligência Artificial, viu gente criando renda pela internet, mas quando tenta entender como fazer isso na prática, encontra milhares de informações diferentes e não sabe qual caminho seguir.
            </p>
          </div>
          <div className="motion-panel glass mt-10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">E o pior:</h3>
            <p className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
              você sabe que a IA está criando novas oportunidades, mas não quer descobrir tarde demais que poderia ter começado antes.
            </p>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="mx-auto max-w-5xl px-5 py-16 lg:py-24">
          <div className="motion-panel glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-glow-blue/25 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
              <div className="motion-number font-display text-8xl font-bold leading-none text-gradient sm:text-9xl">30</div>
              <p className="text-xl leading-relaxed sm:text-2xl">
                Foi por isso que eu organizei <strong className="text-gradient">30 maneiras diferentes de usar a Inteligência Artificial para buscar uma nova fonte de renda</strong>, desde possibilidades mais simples para começar até modelos que podem ser transformados em negócios.
              </p>
            </div>
            <div className="relative mt-10 border-t border-border pt-8">
              <h3 className="text-2xl font-bold">Você não precisa fazer tudo.</h3>
              <p className="mt-2 text-lg font-semibold text-muted-foreground">
                Você só precisa encontrar uma maneira que faça sentido para você e começar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-5 pb-28 pt-8 text-center sm:pb-32">
          <h2 className="text-3xl font-bold sm:text-5xl">Quer descobrir como <span className="text-gradient">começar?</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Clique no botão abaixo e envie a mensagem:</p>
          <p className="motion-panel glass mx-auto mt-4 max-w-xl rounded-2xl px-5 py-4 text-lg font-semibold">
            “Eu quero aprender a ganhar dinheiro com Inteligência Artificial.”
          </p>
          <div className="mt-8"><Cta /></div>
        </section>
      </main>

      <footer className="relative border-t border-border px-5 py-8 pb-28 text-center text-sm text-muted-foreground sm:pb-8">
        © {new Date().getFullYear()} · Todos os direitos reservados.
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 p-3 backdrop-blur sm:hidden">
        <Button asChild variant="cta" className="motion-cta mobile-cta w-full text-sm">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsIcon /> <span>QUERO APRENDER GANHAR DINHEIRO COM IA</span>
        </a>
        </Button>
      </div>
    </div>
  );
}
