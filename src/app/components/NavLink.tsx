'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export function NavLink({ href, className, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={className}
    >
      {children}
    </Link>
  );
} 