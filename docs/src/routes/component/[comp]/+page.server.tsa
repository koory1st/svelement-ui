import { compile } from 'mdsvex';
import fs from 'fs';
export async function load({ params }) {
  // todo: load md content
  const text = fs.readFileSync(`./src/routes/component/md/${params.comp}.md`, {
    encoding: 'utf8',
    flag: 'r',
  });
  const compiledResponse = await compile(text);
  return {
    content: compiledResponse?.code,
  };
}
