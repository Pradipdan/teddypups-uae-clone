import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Copy 404.html
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

// Routes to create directories for
const routes = [
  'puppies',
  'gone-home',
  'happy-families',
  'how-it-works',
  'faq',
  'contact'
];

routes.forEach((route) => {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);
});

console.log('Successfully prepared static routes and 404.html for GitHub Pages!');
