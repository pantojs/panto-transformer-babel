/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[11:40:27]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const BabelTransformer = require('../');

describe('panto-transformer-babel', () => {
    describe('#transform', () => {
        it('should babel', done => {
            const file = {
                filename: 'a.js',
                content: '((...args)=>{const a=args[0];return a;})(1,2)'
            };
            new BabelTransformer({
                babelOptions: {
                    presets: ['es2015']
                }
            }).transform(file).then(tfile => {
                assert.deepEqual(eval(tfile.content), 1)
            }).then(() => {
                done();
            });
        });
    });
});