import fs from 'fs';

export function load({ params }) {
  const pdfs = fs.readdirSync('./ediciones');
  console.log(pdfs);

  return {
    ediciones: pdfs
  };
}
