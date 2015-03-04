# [gulp-recipe](https://github.com/PGS-dev/gulp-recipe-loader)-css [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Css transforming pipe provider.

## Tasks
#### css

Run all hooked actions on all css files and save to temp

#### watch:css

Watches all css files and runs hooked actions only on changed files

## Configuration
### Sources
#### sources.css
> default: 'css'

Raw css files to be compiled by all css transformers.

### Paths
> paths.tmp
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

[depstat-url]: https://david-dm.org/PGS-dev/gulp-recipe-css
[depstat-image]: http://img.shields.io/david/PGS-dev/gulp-recipe-css.svg?style=flat