'use strict';

/**
 * Handle hooks for css processing in development with watcher firing only on changed files
 * @sequential devProcessCss
 */
module.exports = function ($, config, sources) {
    /**
     * Run all hooked actions on all css files and save to temp
     *
     * @task css
     * @config tasks.css
     */
    $.gulp.task(config.tasks.css, function () {
        var processCssPipe = $.lazypipe()
            .pipe($.utils.sequentialLazypipe($.utils.getPipes('devProcessCss')));

        return sources.css
            .pipe($.sourcemaps.init)
            .pipe(processCssPipe)
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    });

    /**
     * watches all css files and runs hooked actions only on changed files
     *
     * @task watch:css
     * @config tasks.watchCss
     * @deps css
     */
    $.gulp.task(config.tasks.watchCss, [config.tasks.css], function () {
        var processCssPipe = $.utils.sequentialLazypipe($.utils.getPipes('devProcessCss'));
        $.utils.watchSource(sources.css)
            .pipe($.sourcemaps.init)
            .pipe(processCssPipe)
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    });

    return {
        watch: config.tasks.watchCss
    }
};