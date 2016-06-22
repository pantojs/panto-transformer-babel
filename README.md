# panto-transformer-babel
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Babel transformer for panto.

```js
panto.loadPlugin('babel');

panto.pick('**/*.js').(panto.read()).(panto.babel({
    babelOptions: {
        presets: []
    }
})).end();
```

## options:
 - babelOptions: object

[npm-url]: https://npmjs.org/package/panto-transformer-babel
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-babel.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-babel.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-babel
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-babel.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-babel#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-babel/dev-status.svg
