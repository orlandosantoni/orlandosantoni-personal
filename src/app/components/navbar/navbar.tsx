import NavLink from "./nav-link";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-6 pt-10 pb-0">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-4">
          <Link
            href="/"
            className="font-serif italic text-2xl text-ink tracking-wide hover:opacity-60 transition-opacity"
          >
            Orlando Santoni
          </Link>
        </div>
        <nav className="flex items-center justify-center gap-2 mb-6">
          <NavLink name="Home" href="/"/>
          <span className="text-rule select-none text-sm">·</span>
          <NavLink name="Blog" href="/blog"/>
          <span className="text-rule select-none text-sm">·</span>
          <NavLink name="About" href="/about"/>
        </nav>
        <div className="border-b border-rule"></div>
      </div>
    </header>
  )
}
