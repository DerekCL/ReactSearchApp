reactSearchApp
===============================
A short description of the project.

[![cookiecutter-typescript-webpack](https://img.shields.io/badge/built%20with-Cookiecutter%20Typescript%20Webpack-orange.svg)][cookiecutter-typescript-webpack]


Getting Started
---------------

Install npm packages

    $ npm install

Start the server

    $ npm start


Open up http://localhost:8080 in your browser.


Basic Usage
-----------

### Running tests
This project uses [Istanbul][Istanbul] for code coverage with [`mocha`][mocha] for the test framework, [chai][chai] library for assertions and test doubles as well as [enzyme][enzyme] for React compatability.

This will run all tests in the [`./src/test`][test-dir] directory.

### Coverage

A coverage report will be generated by running the `$ npm test` command and outputted into the build directory.

Open the lcov-report for an overview of your code coverage:

    $ open src/dist/reports/coverage/lcov-report/index.html


---------------------------------


React-Redux Project Structure
-----------------------------
Outline the structure of the project.

#### Source `./src/`
Main project source.

#### Components `./src/components/`
React components. Mostly __dumb__ components.

#### Constants `./src/constants/`
Stuff that doesn't change. Redux action types.

#### Containers `./src/containers/`
React components that serve as containers for multiple _dumb_ components. These should connect React components to a Redux store using the [react-redux connect method](https://github.com/reactjs/react-redux/blob/253ce8b3068d9d9bfe55f70a6f18a5fde313b326/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options).

The _connect_ method will __map state to props__ by subscribing to a __store__ that has been passed though the components __context__ and will tell the component to update whenever the state changes.

_Connect_ can also __map dispatch to props__ by connecting _action creators_ to and to the _store dispatch_ method allowing the _props_ to be invoked directly (rather than `store.dispatch({type: 'MY_ACTION', id: 1, other_stuff: 'blah'})`).

#### Ducks `./src/ducks/`
A duck is an isolated module that is self contained, and can even be packaged easily into a library. Each module contains all of its related constants, actions/action creators, and it’s reducer. Normally you would have seperate folders for your reducers and actions, etc... With ducks, rather than split up all this related code, we package it all in redux modules.

When you are creating these modules you generally want to contain the entire logic for handling only ONE concept in your app, ex: product, cart, session, etc. You should also have an index.js file that exports according to the original duck rules.

The rules for creating a duck/module:
* MUST export default a function called reducer()
* MUST export its action creators as functions
* MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
* MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

for additional information: https://github.com/erikras/ducks-modular-redux

#### Store `./src/store/`
Custom store for adding middleware.

---------------------------------


Configuration
-------------

### Settings
There are two setting configurations: _Development_ and _Production_. Both of these settings inherit from the _Common_ settings.

#### Common `webpack.common.js`
* Provide entry endpoints
* Output endpoints
* Common plugins

#### Development `webpack.local.js`
* Local plugins

#### Production `webpack.production.js`
* Minimize code
* Production plugins


-----------------------------------

<!-- references -->
[webpack4]: https://github.com/webpack/webpack/tree/v4.14.0
[awesome-typescript-loader]: https://github.com/s-panferov/awesome-typescript-loader/tree/v5.2.0
[react]: https://facebook.github.io/react/
[redux]: http://redux.js.org/index.html
[Istanbul]: https://istanbul.js.org/
[mocha]: https://github.com/mochajs/mocha
[chai]: https://github.com/chaijs/chai/tree/4.1.2
[enzyme]: https://github.com/airbnb/enzyme/tree/v2.9.1
[cookiecutter-typescript-webpack]: https://github.com/DerekCL/cookiecutter-typescript-webpack

[test-dir]: /src/__tests__/
