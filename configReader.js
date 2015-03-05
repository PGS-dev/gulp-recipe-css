'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    $.utils.checkMandatory(config, ['sources.css']);

    return _.merge({
        paths: {
            tmp: 'tmp'
        },
        tasks: {
            css: 'css',
            watchCss: 'watch:css'
        }
    }, config);
};