package.json

{
  "name": "react-vite-tailwind",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc -b && vite build --outDir dist",
    "lint": "bunx biome lint --write && bunx tsc --noEmit",
    "format": "bunx biome format --write",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.18.1",
    "lucide-react": "^0.515.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.6.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.27.0",
    "@biomejs/biome": "1.9.4",
    "@types/react": "^18.3.22",
    "@types/react-dom": "^18.3.7",
    "@typescript-eslint/eslint-plugin": "^8.32.1",
    "@typescript-eslint/parser": "^8.32.1",
    "@vitejs/plugin-react": "^4.5.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.27.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-import-resolver-typescript": "^3.10.1",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "prettier": "^3.5.3",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.3",
    "typescript-eslint": "^8.32.1",
    "vite": "^6.3.5",
    "bippy": "^0.3.16"
  }
}

tsconfig.json


{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noEmit": true,
    "jsxImportSource": "bippy/dist"
  },
  "include": [
    "src",
    "vite.config.ts"
  ]
}

vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
});
