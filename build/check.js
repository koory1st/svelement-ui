const {execSync} = require('child_process');
let lernaOutput;
try {
    lernaOutput = execSync('pnpm lerna-changed --json --toposort ', {encoding: 'utf-8'}).toString();
} catch (e) {
    console.log("lerna-changed not found")
    return;
}
const lines = lernaOutput.split('\n');
const remainingLines = lines.slice(3);
const outputString = remainingLines.join('\n');
const packages = JSON.parse(outputString);
console.log("packages", packages)

const filterString = packages.map(element => {
    console.log("check scope:", element.name)
    return `--filter=${element.name}`
// npm -r --filter=@svelement-ui/tooltip --filter=@svelement-ui/popper run check
}).join(' ');
console.log(filterString)
const checkResult = execSync(`pnpm -r ${filterString} run check`).toString();
console.log(checkResult)
const lintResult = execSync(`pnpm -r ${filterString} run lint`).toString();
console.log(lintResult)