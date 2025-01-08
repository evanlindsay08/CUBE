'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function PageTransition({ href, children, className }: { href: string, children: React.ReactNode, className: string }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Remove existing content-warp class to reset animations
    document.querySelectorAll('.content-warp').forEach(el => {
      el.classList.remove('content-warp');
      void el.offsetWidth; // Force reflow
      el.classList.add('content-warp');
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