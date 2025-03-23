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
  return (
    <Link 
      href={props.href} 
      className={
        `text-lg hover:underline [&.active]:underline mx-5 
        ${navLinkShouldBeActive(props.href) ? 'active' : ''}`
      }>
        {props.name}
      </Link>
  )
}