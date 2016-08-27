# panto-transformer-babel
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

[Babel](http://babeljs.io) transformer for panto.

```js
panto.loadTransformer('babel');

panto.pick('**/*.js').read().babel({
    babelOptions: {
        presets: []
    },
    ignoreError: false,
    isSlient: false
});
```

## options:
 - babelOptions: object, see [here](http://babeljs.io/docs/usage/options/)
 - ignoreError: boolean, if fail when error
 - isSlient: boolean, if log warnning message

[npm-url]: https://npmjs.org/package/panto-transformer-babel
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-babel.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-babel.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-babel
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-babel.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-babel
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-babel.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-babel#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-babel/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-babel/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-babel?branch=master
