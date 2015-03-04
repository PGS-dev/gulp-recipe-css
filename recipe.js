'use strict';

/**
 * Handle hooks for css processing in development with watcher firing only on changed files
 *
 * @config paths.tmp temp folder path
 */
module.exports = function ($, config, sources) {

    /* Provided hooks
     *****************/

    /**
     * Sequential tasks for css processing.
     *
     * @hook pipes.devProcessCss*
     * @hookType sequential
     */
    function getHook() {
        return $.utils.sequentialLazypipe($.utils.getPipes('devProcessCss'));
    }

    /* Tasks
     ********/

    /**
     * Run all hooked actions on all css files and save to temp
     *
     * @task css
     * @config tasks.css css task name
     */
    function cssTask() {
        return sources.css
            .pipe($.sourcemaps.init)
            .pipe(getHook())
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    }

    /**
     * Watches all css files and runs hooked actions only on changed files
     *
     * @task watch:css
     * @config tasks.watchCss watch:css task name
     * @deps css
     */
    function watchCssTask() {
        $.utils.watchSource(sources.css)
            .pipe($.sourcemaps.init)
            .pipe(getHook())
            .pipe($.sourcemaps.write)
            .pipe($.gulp.dest, config.paths.tmp)();
    }

    // register tasks
    $.utils.maybeTask(config.tasks.watchCss, [config.tasks.css], watchCssTask);
    $.utils.maybeTask(config.tasks.css, cssTask);

    /* Used hooks
     *************/
    return {
        /**
         * Exports watch:css task to watch combiner.
         *
         * @hooks watch
         */
        watch: config.tasks.watchCss
    }
};