import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Use IntersectionObserver to trigger CSS animations
    // This ensures animations complete fully and don't get stuck mid-fade
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add is-visible class to trigger CSS animation
            entry.target.classList.add('is-visible');
            // Once visible, stop observing (animation is permanent)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Start animation a bit before fully visible
      }
    );

    // Observe all .reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};
