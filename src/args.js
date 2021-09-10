const argsList = process.argv
const argsLen = argsList.length

const getOption = (idx) => {
  if (typeof idx === 'number') {
    return argsList[idx]
  }
  const arg = argsList.find((arg) => arg.indexOf(idx) === 0) || ''
  const isSetter = arg.indexOf('=') !== -1

  if (!isSetter) {
    return arg !== ''
  }

  const parts = arg.split('=')
  const val = parts[1]

  if (val == 'true' || val == 'yes' || val == 'y' || val == '1') {
    return true
  } else if (val == 'false' || val == 'no' || val == 'n' || val == '0') {
    return false
  } else {
    return val
  }
}

const getArgAt = (index) => process.argv[index]

const minThan = (num) => process.argv.length < num

export default {
  isArgsEmpty: () => argsLen <= 2,
  getOption,
  getArgAt,
  minThan,
}
