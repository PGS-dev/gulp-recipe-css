'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    if(_.isUndefined(config.sources.css)) {
        throw new $.utils.RecipeError('Mandatory config field `config.sources.css` is missing.');
    }

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