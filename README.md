# [gulp-recipe](https://github.com/PGSSoft/gulp-recipe-loader)-css [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Css transforming hook provider.

Provides hook for css processing and watcher firing only on changed files in development environment.
Includes source maps as data urls into compiled files.
Works well with recipes like [gulp-recipe-autoprefixer](https://github.com/PGSSoft/gulp-recipe-autoprefixer).

## Tasks
#### css
Runs all hooked actions on all css files and saves them to configured temp directory.

#### watch:css
Starts Watching all css files and runs hooked actions only on changed files.

## Configuration
### [Sources](https://github.com/PGSSoft/gulp-recipe-loader#sources-configuration-syntax)
#### sources.css
> mandatory

Raw css files to be compiled by all css transformers.

### Paths
#### paths.tmp
> default: 'tmp/'

Compiled css output directory.

### Tasks
#### tasks.css
> default: 'css'

_css_ task name.

#### tasks.watchCss
> default: 'watch:css'

_watch:css_ task name.

## Api
### Provided Hooks
#### pipes.devProcessCss*
> type: sequential

Sequential tasks for css processing.

### Used Hooks
#### watch

Exports watch:css task to watch combiner.

[npm-url]: https://npmjs.org/package/gulp-recipe-css
[npm-image]: https://nodei.co/npm/gulp-recipe-css.png?downloads=true

[depstat-url]: https://david-dm.org/PGSSoft/gulp-recipe-css
[depstat-image]: https://img.shields.io/david/PGSSoft/gulp-recipe-css.svg?style=flat