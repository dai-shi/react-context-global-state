import React, { createElement as h } from 'react';

const isFunction = fn => (typeof fn === 'function');

export const createGlobalState = (initialState) => {
  const stateItemConsumers = {};
  const stateItemUpdateListeners = {};
  const stateItemUpdaters = {};
  const stateItemValues = initialState;
  let StateProvider = ({ children }) => h(React.Fragment, null, children);
  Object.keys(initialState).forEach((name) => {
    const { Provider, Consumer } = React.createContext({
      value: initialState[name],
      update: () => { throw new Error('cannot update initial value'); },
    });
    stateItemConsumers[name] = ({ children }) => h(Consumer, null,
      ({ value, update }) => children(value, update));
    stateItemUpdateListeners[name] = [];
    stateItemUpdaters[name] = (func) => {
      stateItemUpdateListeners[name].forEach(listener => listener(func));
    };
    const InnerProvider = StateProvider;
    StateProvider = class extends React.PureComponent {
      constructor() {
        super();
        stateItemUpdateListeners[name].push((funcOrValue) => {
          let newValue;
          if (isFunction(funcOrValue)) {
            const { value: oldValue } = this.state;
            newValue = funcOrValue(oldValue);
          } else {
            newValue = funcOrValue;
          }
          this.setState({ value: newValue });
          stateItemValues[name] = newValue;
        });
        this.state = { value: initialState[name], update: stateItemUpdaters[name] };
      }

      render() {
        const { children } = this.props;
        return h(Provider, { value: this.state },
          h(InnerProvider, null, children));
      }
    };
  });
  const StateConsumer = ({ name, children }) => stateItemConsumers[name]({ children });
  return {
    StateProvider,
    StateConsumer,
    setGlobalState: (name, update) => stateItemUpdaters[name](update),
    getGlobalState: name => stateItemValues[name],
  };
};
