import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Fade-up animation for sections
    gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // Stagger animation for grid items
    gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
      const items = container.querySelectorAll('[data-stagger-item]');
      gsap.from(items, {
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });

    // Parallax animation for hero images
    gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
        y: (i, target) => {
          return (1 - ScrollTrigger.getProgress(target.parentElement as HTMLElement)) * 100;
        },
        ease: 'none',
      });
    });

    // Scale-in animation
    gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 60%',
          scrub: false,
          markers: false,
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power2.out',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
