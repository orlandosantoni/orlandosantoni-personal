import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <nav className="flex-row-reverse text-center py-6 px-12 sm:items-baseline w-full">
      <NavLink name="Home" href="/"/>
      <NavLink name="Blog" href="/blog"/>
      <NavLink name="About" href="/about"/>
    </nav>
  )
}