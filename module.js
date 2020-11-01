function sleepySays (input, isSleepySleeping) {
  if (isSleepySleeping) {
    return '(◡ ‿ ◡ ✿) zZZz'
  }
  return `( o ‿ ~ ✿) ${input}`
}

module.exports = sleepySays
