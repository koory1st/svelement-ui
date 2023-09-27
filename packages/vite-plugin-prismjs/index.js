import { transformSync } from '@babel/core';
import { createFilter } from '@rollup/pluginutils';
import babelPluginPrismjs from 'babel-plugin-prismjs';

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function prismjsPlugin(options) {
  let needSourceMap = true;

  function transform(id, code) {
    return transformSync(code, {
      babelrc: false,
      ast: true,
      plugins: [[babelPluginPrismjs, options]],
      sourceMaps: needSourceMap,
      sourceFileName: id,
      configFile: false,
    });
  }

  return {
    name: 'prismjs',

    enforce: 'pre',

    configResolved(config) {
      needSourceMap = config.command === 'serve' || !!config.build.sourcemap;
    },

    transform(code, id) {
      const filter = createFilter(/\.[jt]s$/);
      const svelteFilter = createFilter(/\.svelte$/);

      if (svelteFilter(id)) {
        const script = stripScript(code);

        if (script) {
          const result = transform(id, script);

          if (result) {
            return {
              code: code.replace(script, result.code),
              map: result.map,
            };
          }
        }
      } else if (filter(id)) {
        const result = transform(id, code);

        if (result) {
          return {
            code: result.code,
            map: result.map,
          };
        }
      }
    },
  };
}

export { prismjsPlugin };

export default prismjsPlugin;
