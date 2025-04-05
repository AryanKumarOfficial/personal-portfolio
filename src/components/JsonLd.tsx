"use client";

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

// Component to inject structured data (JSON-LD) into the page
export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Create a script element and set its properties
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    
    // Append to document head
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
  
  // This component doesn't render anything visible
  return null;
}
