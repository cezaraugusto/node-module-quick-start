[npm-version-image]: https://img.shields.io/npm/v/node-module-quick-start.svg?color=0971fe
[npm-version-url]: https://www.npmjs.com/package/node-module-quick-start
[npm-downloads-image]: https://img.shields.io/npm/dm/node-module-quick-start.svg?color=2ecc40
[npm-downloads-url]: https://www.npmjs.com/package/node-module-quick-start
[action-image]: https://github.com/cezaraugusto/node-module-quick-start/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/node-module-quick-start/actions
[npm-provenance-image]: https://img.shields.io/badge/provenance-verified-0971fe?logo=npm&logoColor=white
[npm-provenance-url]: https://www.npmjs.com/package/node-module-quick-start

> Template for creating new Node modules with TypeScript, rslib, and Vitest.

# node-module-quick-start [![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![workflow][action-image]][action-url] [![Provenance][npm-provenance-image]][npm-provenance-url]

Looking to publish a new Node.js module? Start here. This template is the shared foundation behind the `*-location` packages, wired for:

- TypeScript source in `src/`, tests in `tests/`
- [rslib](https://lib.rsbuild.dev) builds, emitting ESM, CommonJS, and type declarations
- [Vitest](https://vitest.dev) for tests
- [eslint-config-auditor](https://www.npmjs.com/package/eslint-config-auditor) for linting
- GitHub Actions CI (matrix across macOS / Windows / Linux) and a provenance-enabled publish workflow

## Getting started

### Via GitHub "Use this template"

1. Click the green "Use this template" button
2. Replace `Cezar Augusto` with your name
3. Replace `cezaraugusto` with your username
4. Replace `boss@cezaraugusto.net` with your email
5. Replace `https://cezaraugusto.net` with your URL
6. Replace `node-module-quick-start` with your module name
7. Replace the sample in `src/index.ts` with your own code

### Via GitHub clone

```bash
git clone git@github.com:cezaraugusto/node-module-quick-start.git
```

## Layout

```
src/index.ts        # your module source (TypeScript)
tests/index.test.ts # Vitest tests
rslib.config.ts     # build config (ESM + CJS + .d.ts)
vitest.config.ts    # test config
tsconfig.json       # TypeScript config
eslint.config.mjs   # lint config
```

## Scripts

```bash
pnpm build      # build dist/ via rslib (ESM + CJS + types)
pnpm dev        # rebuild on change
pnpm test       # build, then run Vitest
pnpm lint       # eslint
pnpm lint:fix   # eslint --fix
```

## Usage

The template ships with a sample module so the build and tests pass out of the box:

```ts
import sleepySays from 'node-module-quick-start'

sleepySays('hello!') // ( o ‿ ~ ✿) hello!

// When Sleepy is sleeping
sleepySays('hello!', true) // (◡ ‿ ◡ ✿) zZZz
```

## API

### sleepySays(input, isSleepySleeping?)

#### input

Type: `string`

Text echoed back while Sleepy is awake.

#### isSleepySleeping

Type: `boolean`\
Default: `false`

When `true`, returns the sleeping face instead.

## License

MIT (c) Cezar Augusto.
