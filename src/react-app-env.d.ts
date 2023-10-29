/// <reference types="react-scripts" />
interface NodeModule {
    hot?: {
      accept: (path?: string, callback?: () => void) => void;
    };
  }
  
  declare var global: NodeJS.Global & typeof globalThis;
  
