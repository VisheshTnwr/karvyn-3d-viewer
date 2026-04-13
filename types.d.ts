import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        ar?: boolean;
        'camera-controls'?: boolean;
        'touch-action'?: string;
        'shadow-intensity'?: string;
        alt?: string;
      };
    }
  }
}