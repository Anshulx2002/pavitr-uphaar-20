import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.observed)');
      elements.forEach((el) => {
        io.observe(el);
        (el as HTMLElement).classList.add('observed');
      });
    };

    // Observe existing elements
    observeElements();

    // Observe future elements (e.g., when filtering/paginating)
    const mo = new MutationObserver(() => {
      observeElements();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return ref;
};