import fs from 'fs';
import path from 'path';

export function load({ params }) {
  const pathDir = path.join(process.cwd(), 'static/numeros');

  let fileNames = fs
    .readdirSync(pathDir)
    .filter((e) => !e.endsWith('.svelte') && !e.endsWith('.js')); //remove actual files
  console.log(fileNames);

  return {
    ediciones: fileNames
  };
}
