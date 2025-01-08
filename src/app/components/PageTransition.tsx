'use client';

import { useEffect } from 'react';
import { forceReflow } from '@/app/utils/animation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    document.querySelectorAll('.content-warp').forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.remove('content-warp');
        forceReflow(element);
        element.classList.add('content-warp');
      }
    });
  }, []);

  return (
    <div className="content-warp">
      {children}
    </div>
  );
} 