/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string
    // Add more variables as needed, all should start with VITE_
    readonly NODE_ENV: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  