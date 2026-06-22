import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    pool: 'forks',
    isolate: false,
    fileParallelism: false,
    maxWorkers: 1
  }
})
