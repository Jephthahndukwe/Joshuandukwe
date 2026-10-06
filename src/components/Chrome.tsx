import Link from "next/link";
import { brand } from "@/lib/content";

export function Logo() {
  return (
    <Link href="/youtube-masterclass" className="flex items-center gap-2.5 font-semibold tracking-tight">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 shadow-lg shadow-brand/30">
        <svg viewBox="0 0 24 24" className="size-4 fill-white" aria-hidden><path d="M8 5.5v13l11-6.5z" /></svg>
      </span>
      {brand.name}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:px-6">
        <p>© {year} {brand.name}. All rights reserved.</p>
        <nav className="flex gap-5">
          <a href={brand.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href={`mailto:${brand.supportEmail}`} className="hover:text-white">Contact</a>
        </nav>
      </div>
      <p className="mx-auto max-w-4xl px-4 pb-10 text-center text-xs leading-relaxed text-zinc-500">
        This site is not part of YouTube, Google or Meta, and is not endorsed by them in any way. Results shared are not typical and
        depend on individual effort. We make no guarantee of earnings.
      </p>
    </footer>
  );
}
