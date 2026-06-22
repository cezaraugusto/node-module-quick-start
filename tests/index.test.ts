import {describe, expect, test} from 'vitest'

import sleepySays from '../src/index'

describe('sleepySays', () => {
  test('echoes the input while awake', () => {
    expect(sleepySays('hello!')).toBe('( o ‿ ~ ✿) hello!')
  })

  test('sleeps when told to', () => {
    expect(sleepySays('hello!', true)).toBe('(◡ ‿ ◡ ✿) zZZz')
  })
})
