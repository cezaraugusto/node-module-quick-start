/* global describe, test, expect */
const sleepySays = require('./module')

describe('sleepySays', () => {
  it('works with sleepy sleeping', () => {
    expect(sleepySays('hello!')).toBe('( o ‿ ~ ✿) hello!')
  })
  it('works with sleepy not sleeping', () => {
    const isSleepySleeping = true

    expect(sleepySays('hello!', isSleepySleeping)).toBe('(◡ ‿ ◡ ✿) zZZz')
  })
})
