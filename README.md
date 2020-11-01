[action-image]: https://github.com/cezaraugusto/node-module-quick-start/workflows/CI/badge.svg
[action-url]: https://github.com/cezaraugusto/node-module-quick-start/actions
[npm-image]: https://img.shields.io/npm/v/node-module-quick-start.svg
[npm-url]: https://npmjs.org/package/node-module-quick-start

# node-module-quick-start [![workflow][action-image]][action-url] [![npm][npm-image]][npm-url]

> Template for creating new `node_modules`

Looking to publish a new Node.js module? Start here!

## Installation

### Via GitHub clone

```
git@github.com:cezaraugusto/node-module-quick-start.git
```

### Via GitHub "Use this template" feature

1. Click the big green "Use this template" button
2. Replace `Cezar Augusto` with your name
3. Replace `cezaraugusto` with your username
4. Replace `boss@cezaraugusto.net` with your email
5. Replace `https://cezaraugusto.net` with your URL
6. Replace `node-module-quick-start` with your module name
7. HAVE FUN!

### Via npm

Alternatively, you can install this module as-is and hack from there

```
# node_modules/node-module-quick-start will include this repo
npm install node-module-quick-start
```

## Usage

This repo includes a sample program:

```js
const sleepySays = require('./node-module-quick-start')

sleepySays('hello!') // ( o ‿ ~ ✿) hello!

// When sleepy is sleeping

sleepySays('hello!', true) // (◡ ‿ ◡ ✿) zZZz
```
## API

### sleepySays(say, isSleepySleeping?)

#### say

Type: `string`

#### isSleepySleeping

Type: `boolean`\
Default: `false`

## License

MIT (c) Cezar Augusto.
