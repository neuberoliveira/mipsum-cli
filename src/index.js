import * as os from 'os'
import MussumIpsum from 'mipsum/src/lib/mipsum-core'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const DEFAULT_PARAGRAPHS = 1
const DEFAULT_QUOTES = 4

const getOption = (optionName, defaultValue = undefined) => {
  const optionNameShort = optionName.substr(0, 1)
  let optionValue = argv[optionName]
  if (optionValue === undefined) {
    optionValue = argv[optionNameShort]
  }
  if (optionValue === undefined) {
    optionValue = defaultValue
  }

  return optionValue
}

const paragraphOption = getOption('paragraph', DEFAULT_PARAGRAPHS)
const quoteOption = getOption('quote', DEFAULT_QUOTES)
const endOfLineOption = getOption('eol', os.EOL)

const options = {
  resultType: 'array',
  pNum: paragraphOption,
  pQuotes: quoteOption,
}

const paragraphs = new MussumIpsum(options).init()
console.log(paragraphs.join(endOfLineOption))
