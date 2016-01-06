### react-template
Copyright &copy; 2015-2016 by Dan Mascenik

A starting point for React/Flux apps with web services, authentication, routing and unit testing.

## Read How It Was Made

Curious how any part of this project works? Why I chose one framework over another? Read the whole story of my transformation into a web UI developer on my blog: [Intro to Web UI Development](http://danmascenik.com/j0)

Follow me on [LinkedIn](http://linkedin.com/in/danmascenik) and [@DanInTheCloud](https://twitter.com/daninthecloud) for updates on this and any of my other projects.


## Requires

- node (tested with v4.2.1)
- npm (tested with v2.14.7)
- gradle (tested with v2.7)

## Building

**Compile:** `gradle compile`

Transpiles all ES6 and JSX code into plain JavaScript.


**Test:** `gradle test`

Runs all the unit tests and generates test coverage reports


**Check Test Coverage:** `gradle check`

Same as `gradle test`, but also checks test coverage against the global threshold in `.istanbul.yml`


**Quick Test:** `gradle devtest`

Runs all the unit tests without coverage analysis.


**Run:** `gradle run`

Launches a server on localhost:8080 with hot-loading enabled.
