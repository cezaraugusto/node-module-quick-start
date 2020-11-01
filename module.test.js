/* global describe, test, expect */
const sleepySays = require('./module')

describe('sleepySays', () => {
  test('works with sleepy sleeping', () => {
    expect(sleepySays('hello!')).toBe('( o ‿ ~ ✿) hello!')
  })
  test('works with sleepy not sleeping', () => {
    const isSleepySleeping = true
    expect(sleepySays('hello!', isSleepySleeping)).toBe('(◡ ‿ ◡ ✿) zZZz')
  })
})
