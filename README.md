# http-server-pkg

Bundle your project together with a http-server in a single executable (macOS / Windows / Linux).

Build a simple double click executable that will start a web server, open Google Chrome, and run your project.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Node.js Version](https://img.shields.io/badge/Node.js-14.x-green)
[![Build](https://github.com/fwalzel/http-server-pkg/actions/workflows/node.js.yml/badge.svg)](https://github.com/fwalzel/http-server-pkg/actions/workflows/node.js.yml/badge.svg)

## License

Copyright (c) 2023 Florian Walzel,
MIT License

## Install[](https://)

```sh
npm install http-server-pkg
```

## Build Executable

Replace the `./dist` folder with your project folder. (If your folder name is not `dist`, you need to change this
configuration in the package.js `"assets": "dist/**/*",` and Line 19 in pkg.js `root: path.join(__dirname, 'dist');`).

Now build your executables:

```sh
pkg .
```

Your executable files (Mac/ Win) will be build to the folder `./executable`, according to the specs given in the package.json.
(This is what the dot '.' argument after the pkg command means: use the configuration as defined in the package.json).

`:clap:` Done! `:clap:`

## Motivation

Some projects or frameworks need a web server in order to run. For local deployment, presentation or testing this can
become a problem, i.e. when third parties are involved (clients, collaborators, …). Explaining someone with no technical
background how to install Node.js and run a local web server just to see our project is very inconvenient. `:smirk:`
To solve this, *http-server-pkg* creates an executable package that contains a web server alongside with your project.
A simple double click on the executable will start the web server, open Google Chrome, and run your project.

## The Executables

For your build options see [PKG Targets](https://www.npmjs.com/package/pkg#targets).

## See the Gist

[Running a Vue.js App as a Stand-alone Executable (Mac / Windows)](https://gist.github.com/fwalzel/9e74d2a6b28abca07270d6376cb00949#file-pkg-js)
