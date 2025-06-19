import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  {
    threshold = 0.1,
    rootMargin = '0px',
    once = false,
  }: UseInViewOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIntersecting(entry.isIntersecting);
        
        // Unobserve if it should only trigger once and is currently intersecting
        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin, threshold, once]);
  
  return isIntersecting;
}