import { masterclass } from "@/lib/content";

export function Disclaimer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 pb-10 pt-16 text-center font-sans text-sm leading-relaxed text-soft/80">
      <p>{masterclass.disclaimer}</p>
      <p className="mt-2">© {new Date().getFullYear()} Everything Melda. All rights reserved.</p>
    </footer>
  );
}
