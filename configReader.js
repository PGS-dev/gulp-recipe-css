'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    return _.merge({
        paths: {
            tmp: 'tmp'
        },
        tasks: {
            css: 'css',
            watchCss: 'wath:css'
        },
        sources: {
            css: []
        }
    }, config);
};