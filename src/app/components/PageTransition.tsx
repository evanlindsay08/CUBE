'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { forceReflow } from '@/app/utils/animation';

interface PageTransitionProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ href, children, className }: PageTransitionProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    document.querySelectorAll('.content-warp').forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.remove('content-warp');
        forceReflow(element);
        element.classList.add('content-warp');
      }
    });

    // Small delay to match the original load timing
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
} 