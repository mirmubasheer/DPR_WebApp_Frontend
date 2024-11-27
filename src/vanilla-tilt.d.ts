declare module 'vanilla-tilt' {
    export interface VanillaTiltOptions {
      max?: number;
      speed?: number;
      glare?: boolean;
      'max-glare'?: number;
    }
  
    export function init(element: Element, options?: VanillaTiltOptions): void;
  }
  