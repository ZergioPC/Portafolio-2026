// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = '/Portafolio-2026';

function rehypeBaseImages() {
  return (tree) => {
    function walk(node) {
      if (node.type === 'element' && node.tagName === 'img' && typeof node.properties?.src === 'string' && node.properties.src.startsWith('/')) {
        node.properties.src = BASE + node.properties.src;
      }
      if (node.children) {
        node.children.forEach(walk);
      }
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ZergioPC.github.io',
  base: BASE,
  markdown: {
    rehypePlugins: [rehypeBaseImages],
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
