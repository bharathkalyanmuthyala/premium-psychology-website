import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};