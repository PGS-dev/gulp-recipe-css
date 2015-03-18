'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    $.utils.checkMandatory(config, ['sources.css']);

    config = _.merge({
        paths: {
            tmp: 'tmp'
        },
        tasks: {
            css: 'css',
            watchCss: 'watch:css'
        }
    }, config);
    config.sources = _.pick(config.sources, 'css');
    return config;
};