'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function navLinkShouldBeActive(href: string) {
  const pathname = usePathname();
  if (href === '/') {
    return href === pathname;
  }
  return pathname.startsWith(href);
}

export default function NavLink(props: { name: string, href: string }) {
  const isActive = navLinkShouldBeActive(props.href);
  return (
    <Link
      href={props.href}
      className={`text-xs tracking-[0.15em] uppercase px-4 transition-colors ${
        isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
      }`}
    >
      {props.name}
    </Link>
  )
}
