import { useEffect } from 'react';

// Content is visible by default; the hidden state only applies once JS adds `.js`
// to <html>, so the prerendered HTML stays fully readable without scripts.
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
