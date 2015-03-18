'use strict';

/**
 * Css transforming hook provider.
 *
 * Provides hook for css processing and watcher firing only on changed files in development environment.
 * Provides source maps as data urls inside compiled files.
 * Works well with recipes like [gulp-recipe-autoprefixer](https://github.com/PGS-dev/gulp-recipe-autoprefixer).
 *
 * @config paths.tmp temp folder path
 */
module.exports = function ($, config, sources) {

    /* Tasks
     ********/

    /**
     * Runs all hooked actions on all css files and saves them to configured temp directory.
     *
     * @task css
     * @config tasks.css css task name
     */
    function cssTask() {
        return sources.css
            .pipe($.sourcemaps.init)
            .pipe(devProcessCssHook())
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    }

    /**
     * Starts Watching all css files and runs hooked actions only on changed files.
     *
     * @task watch:css
     * @config tasks.watchCss watch:css task name
     * @deps css
     */
    function watchCssTask() {
        var path = require('path');
        var fs = require('fs');

        $.utils.watchSource(sources.css, function (vinyl) {
            if(vinyl.event === 'unlink') {
                fs.unlink(path.join(config.paths.tmp, path.relative(vinyl.base, vinyl.path)));
            }
        })
            .pipe($.sourcemaps.init)
            .pipe(devProcessCssHook())
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    }

    // register tasks
    $.utils.maybeTask(config.tasks.watchCss, [config.tasks.css], watchCssTask);
    $.utils.maybeTask(config.tasks.css, cssTask);

    /* Provided hooks
     *****************/

    /**
     * Sequential tasks for css processing.
     *
     * @hook pipes.devProcessCss*
     * @hookType sequential
     */
    function devProcessCssHook() {
        return $.utils.sequentialLazypipe($.utils.getPipes('devProcessCss'));
    }

    /* Used hooks
     *************/
    return {
        /**
         * Exports watch:css task to watch combiner.
         *
         * @hooks watch
         */
        watch: config.tasks.watchCss,
        pipes: {
            assetCss: sources.css
        }
    }
};