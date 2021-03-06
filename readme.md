# Radiant.JS

[![Gitter](https://badges.gitter.im/apolaskey/radiant-js.svg)](https://gitter.im/apolaskey/radiant-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependencies](https://david-dm.org/apolaskey/radiant-js.svg)](https://david-dm.org/apolaskey/radiant-js#info=dependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/dev-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=devDependencies)
[![img](https://david-dm.org/apolaskey/radiant-js/peer-status.svg)](https://david-dm.org/apolaskey/radiant-js/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/apolaskey/radiant-js/badge.svg)](https://snyk.io/test/github/apolaskey/radiant-js)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Unix Status](https://travis-ci.org/apolaskey/radiant-js.svg?branch=master)](https://travis-ci.org/apolaskey/radiant-js)
[![Windows Status](https://ci.appveyor.com/api/projects/status/4fnobuo3n4adrkit?svg=true&retina=true&branch=master)](https://ci.appveyor.com/project/AndrewPolaskey/radiant-js)

# Motivation
To create a game editor utilizing Javascript and Electron; building ontop of the shoulders of giants.

# Completed / Planned Feature List
- [x] Electron Installation and Setup
- [x] Mithril Framework w/JSX support 
- [x] Babel w/ES6 + 7 support
- [ ] Spectron (Electron Functional Testing)
- [x] Ava (Concurrent Test Runner)
- [x] Windows Releases Automated (Appveyor CI)
- [x] Unix (Linux / OSX) Releases Automated (Travis CI)
- [ ] Yeoman Scaffolding Support (On Hold)
- [x] Webpack Integration
- [x] Winston Logger Support


## Developing
The below should over a no bullshit setup experience if followed; otherwise open an issue and let me know what you encountered.

### First Time Setup

The below are global tools that must be installed to build / package this application

[NodeJS](https://nodejs.org/en/download/) :: ``version must be >= 6.6.0``

[Electron Setup](https://electron.atom.io/) :: ``npm install -g electron``

[Ava](https://github.com/avajs/ava) :: ``npm install -g ava``

[Run-All](https://github.com/mysticatea/npm-run-all/blob/master/docs/run-p.md) :: ``npm install -g npm-run-all``

Project Setup :: ``npm install``

### Build Scripts
Start application in prod mode :: ``npm start``

Start application in dev mode :: ``npm run-script start-dev``

Build application :: ``npm run-script build``

Deploy application :: ``npm run-script deploy``

## Patterns and Practices
Below are the basic towards how the project is setup and in general just how things work.

### Project Directory Structure Overview

All test scripts are to go to ``tests/**`` and be suffixed with ``.test.js`` ie. ``FooBar.test.js``

Anything related to UI for the application goes into ``app/renderer/**``

Anything related to just general purpose work goes into ``app/main/**``

Branching / Merging is Gitflow with two defined core branches

* ``master`` :: Stable Release (Build that passed everything)

* ``stable`` :: Nightly Release (Build that passed automated tests)

* ``latest`` :: Unstable Release (Purely staged work; might work, might not)

Application "Main" is at ``app/index.js``

Application routing is configured at ``app/renderer/editor-routes.js``

# Known Issues

Warning like: ``MaxListenersExceededWarning: Possible EventEmitter memory leak detected. `` is displayed
* To fix the above issue update NPM to ``>= 4.4.4`` can be done by doing ``npm update -g npm``