/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[10:32:40]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const Transformer = require('panto-transformer');
const babel = require('babel-core');

class BabelTransformer extends Transformer {
    _transform(file) {
        let {
            filename,
            content
        } = file;

        const {
            babelOptions,
            ignoreError,
            isSilent
        } = this.options;

        return new Promise((resolve, reject) => {
            try {
                const result = babel.transform(content, panto.util.extend({}, babelOptions));

                resolve(panto.util.extend({}, file, {
                    content: result.code
                }));
            } catch (err) {
                if (ignoreError) {
                    if (!isSilent) {
                        panto.log.warn(`BabelTransform warnning in ${filename}: ${err.message}`);
                    }
                    resolve(file);
                } else {
                    reject(err);
                }
            }
        });
    }
}

module.exports = BabelTransformer;