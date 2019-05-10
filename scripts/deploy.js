const shell = require("shelljs")
const minimist = require("minimist")

const { stage = "prod" } = minimist(process.argv.slice(2))

const { code } = shell.exec(`npx serverless deploy --stage ${stage} --verbose`)

if (code !== 0) {
  return
}

shell.exec("npx serverless client build")
shell.exec(`npx serverless client deploy --stage ${stage} --no-confirm`)
