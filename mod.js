import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjs = require('./index.js');
export const positioner = cjs.positioner;
export const compatibility = cjs.compatibility;
