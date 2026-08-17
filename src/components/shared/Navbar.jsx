import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";
import { asset } from "@/lib/paths";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Qualifikation", href: "/#qualifikation" },
  { label: "Bewertungen", href: "/#bewertungen" },
  { label: "Kontakt", href: "/kontakt" },
];

const PHONE_DISPLAY = "+49 152 04919263";
const PHONE_HREF = "tel:+4915204919263";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const itemsRef = useRef([]);
  const tlRef = useRef(null);

  const isActive = (href) => {
    if (href === "/") return router.asPath === "/";
    if (href.startsWith("/#")) return false;
    return router.asPath === href || router.asPath.startsWith(href + "/");
  };

  const isFirstRun = useRef(true);

  useEffect(() => {
    const nav = navRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    tlRef.current?.kill();

    // First render: snap instantly to the closed state, no animation, no
    // tween between mismatched clip-path strings.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      nav.inert = true;
      gsap.set(nav, { clipPath: `circle(0px at ${cx}px ${cy}px)` });
      gsap.set(itemsRef.current, { x: -60, opacity: 0 });
      return;
    }

    if (open) {
      const radius = Math.hypot(window.innerWidth, window.innerHeight);

      nav.inert = false;
      document.body.style.overflow = "hidden";
      window.lenis?.stop();

      if (reduced) {
        gsap.set(nav, { clipPath: `circle(${radius}px at ${cx}px ${cy}px)` });
        gsap.set(itemsRef.current, { x: 0, opacity: 1 });
      } else {
        tlRef.current = gsap.timeline()
          .to(nav, { clipPath: `circle(${radius}px at ${cx}px ${cy}px)`, duration: 1.2, ease: "power4.out" }, 0)
          .to(itemsRef.current, { x: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "elastic.out(1.1, 0.85)" }, 0.1);
      }
    } else {
      document.body.style.overflow = "";
      window.lenis?.start();

      if (reduced) {
        gsap.set(nav, { clipPath: `circle(0px at ${cx}px ${cy}px)` });
        gsap.set(itemsRef.current, { x: -60, opacity: 0 });
        nav.inert = true;
      } else {
        tlRef.current = gsap.timeline({ onComplete: () => { nav.inert = true; } })
          .to(itemsRef.current, { x: -60, opacity: 0, duration: 0.4, stagger: 0.04, ease: "power3.in" }, 0)
          .to(nav, { clipPath: `circle(0px at ${cx}px ${cy}px)`, duration: 0.7, ease: "power3.inOut" }, 0.15);
      }
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  const handleLinkClick = (e, href) => {
    setOpen(false);
    if (href.startsWith("/#") && router.pathname === "/") {
      e.preventDefault();
      const id = href.slice(2);
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          if (window.lenis) window.lenis.scrollTo(target, { duration: 1.4 });
          else target.scrollIntoView({ behavior: "smooth" });
        }, 350);
      }
    }
  };

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[80]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 dark-glass rounded-full mt-3 sm:mt-4 pl-4 sm:pl-5 pr-3 sm:pr-4">
            <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Zur Startseite">
              <img
                src={asset("/images/logo-full-white.png")}
                alt="Sachverständigenbüro Arne Müller"
                className="h-8 sm:h-10 w-auto max-w-[45vw] sm:max-w-none"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={PHONE_HREF}
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-brand-secondary transition-colors px-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>

              <button
                ref={btnRef}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="main-menu"
                aria-label={open ? "Menü schließen" : "Menü öffnen"}
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 overflow-hidden"
              >
                <svg
                  className={`absolute w-5 h-5 fill-brand-dark transition-all duration-300 ${open ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
                <svg
                  className={`absolute w-4 h-4 fill-brand-dark transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="main-menu"
        ref={navRef}
        className="fixed inset-0 z-[70] bg-brand-dark flex items-start justify-center overflow-y-auto"
        style={{ height: "100dvh", clipPath: "circle(0px at 100% 0px)" }}
        aria-hidden={!open}
      >
        <div className="w-full max-w-xl px-6 py-28 sm:py-32 flex flex-col items-start gap-0.5 sm:gap-1">
          {navLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                ref={addItemRef}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group flex items-baseline gap-4 py-1.5 sm:py-2 text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
                  active ? "text-brand-secondary" : "text-white/90 hover:text-brand-secondary"
                }`}
              >
                <span className="text-sm font-medium text-white/40 group-hover:text-brand-secondary transition-colors">
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            );
          })}

          <div className="mt-6 sm:mt-8 pt-5 border-t border-white/10 w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-white/50">
            <a href={PHONE_HREF} className="hover:text-brand-secondary transition-colors">{PHONE_DISPLAY}</a>
            <a href="mailto:kontakt@gutachter-mueller.com" className="hover:text-brand-secondary transition-colors">
              kontakt@gutachter-mueller.com
            </a>
            <div className="flex gap-4">
              <Link href="/impressum" onClick={() => setOpen(false)} className="hover:text-brand-secondary transition-colors">Impressum</Link>
              <Link href="/datenschutz" onClick={() => setOpen(false)} className="hover:text-brand-secondary transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
