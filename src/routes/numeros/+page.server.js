import fs from 'fs';
import path from 'path';

export function load({ params }) {
  const pathDir = path.join(process.cwd(), 'src/lib/assets/numeros');

  let fileNames = fs
    .readdirSync(pathDir)
    .filter((e) => !e.endsWith('.svelte') && !e.endsWith('.js')); //remove actual files

  return {
    ediciones: fileNames
  };
}
