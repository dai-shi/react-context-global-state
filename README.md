react-context-global-state
==========================

[![Build Status](https://travis-ci.com/dai-shi/react-context-global-state.svg?branch=master)](https://travis-ci.com/dai-shi/react-context-global-state)
[![npm version](https://badge.fury.io/js/react-context-global-state.svg)](https://badge.fury.io/js/react-context-global-state)
[![bundle size](https://badgen.net/bundlephobia/minzip/react-context-global-state)](https://bundlephobia.com/result?p=react-context-global-state)

Simple global state for React with Context API

Background
----------

React v16.3 introduces a new Context API.
Context API allows to pass values down to a component tree
without explicit props.

In favor of writing all components stateless in "thisless" JavaScript,
this package is developed.
This package provides a simple way to define a global state
with Context API.

Install
-------

```bash
npm install react-context-global-state
```

Usage
-----

```javascript
import React from 'react';
import { createGlobalState } from 'react-context-global-state';

const initialState = { counter: 0 };
const { StateProvider, StateConsumer } = createGlobalState(initialState);

const Counter = () => (
  <StateConsumer name="counter">
    {(value, update) => (
      <div>
        <span>Counter: {value}</span>
        <button onClick={() => update(v => v + 1)}>Click</button>
      </div>
    )}
  </StateConsumer>
);

const App = () => (
  <StateProvider>
    <Counter />
  </StateProvider>
);
```

Example
-------

The [examples](examples) folder contains working examples.
You can run one of them with

```bash
PORT=8080 npm run examples:minimal
```

and open <http://localhost:8080> in your web browser.

You can also try them in codesandbox.io:
[01](https://codesandbox.io/s/github/dai-shi/react-context-global-state/tree/master/examples/01_minimal)
[02](https://codesandbox.io/s/github/dai-shi/react-context-global-state/tree/master/examples/02_typescript)
[03](https://codesandbox.io/s/github/dai-shi/react-context-global-state/tree/master/examples/03_actions)
[04](https://codesandbox.io/s/github/dai-shi/react-context-global-state/tree/master/examples/04_fetch)
[05](https://codesandbox.io/s/github/dai-shi/react-context-global-state/tree/master/examples/05_onmount)

Reference
---------

### Syntax
```
createGlobalState(initialState)
```

### Parameters
`initialState`: an object like `{ name1: value1, name2: value2, ... }`

### Return value
An object of `{ StateProvider, StateConsumer, setGlobalState }`

`StateProvider`: a component to provide entire state

`StateConsumer`: a component that receives a required `name` prop and invokes a child function prop whose signature is `(value, update) => {}` where `value` is the state value specified by the `name` and `update` is a function to update the value

The `update` function above is similar to `Component.prototype.setState`, and accepts either an updating function or a new value itself.

`setGlobalState`: a function to update a value in global state from outside of components. It recevies a `name` and a `update` value (or function).

`getGlobalState`: a function to get a value in global state from outside of components. It recevies a `name`.

Blogs
-----

- [React global state by Context API](https://medium.com/@dai_shi/react-global-state-by-context-api-5b3efa8acc6b)
- [React global state by Context API for TypeScript](https://medium.com/@dai_shi/react-global-state-by-context-api-for-typescript-eaf9f4cf1381)
