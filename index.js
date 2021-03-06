/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[10:32:40]:revised
 * 2016-06-26[12:46:11]:add filename to babel
 *
 * @author yanni4night@gmail.com
 * @version 0.1.5
 * @since 0.1.0
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
                const result = babel.transform(content, panto.util.extend({}, babelOptions, {
                    filename
                }));

                resolve(panto.util.extend(file, {
                    content: result.code
                }));
            } catch (err) {
                if (ignoreError) {
                    if (!isSilent) {
                        panto.log.warn(`BabelTransform warnning: ${err.message}`);
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