'use client'

import { useEffect } from 'react';
import Link from 'next/link';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SmoothScrollLink ({ href, children }: SmoothScrollLinkProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = href;
      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (targetElement) {
        const targetOffsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: targetOffsetTop - 30,
          behavior: 'smooth',
        });
      }
    };

    const link = document.querySelector(`a[href="${href}"]`) as HTMLAnchorElement | null;
    if (link) {
      link.addEventListener('click', handleClick);
      return () => {
        link.removeEventListener('click', handleClick);
      };
    }
  }, [href]);

  return <Link href={href}>{children}</Link>;
};
