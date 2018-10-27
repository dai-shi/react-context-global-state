import React, { useState, useEffect, useContext } from 'react';

export const createGlobalState = (initialState) => {
  const stateItemConsumers = {};
  const stateItemUpdateListeners = {};
  const stateItemUpdaters = {};
  const stateItemHooks = {};
  let StateProvider = ({ children }) => <React.Fragment>{children}</React.Fragment>;
  Object.keys(initialState).forEach((name) => {
    const context = React.createContext({
      value: initialState[name],
      update: () => { throw new Error('cannot update initial value'); },
    });
    const { Provider, Consumer } = context;
    stateItemConsumers[name] = ({ children }) => (
      <Consumer>
        {({ value, update }) => children(value, update)}
      </Consumer>
    );
    stateItemUpdateListeners[name] = [];
    stateItemUpdaters[name] = (func) => {
      stateItemUpdateListeners[name].forEach(listener => listener(func));
    };
    stateItemHooks[name] = () => {
      const { value } = useContext(context);
      return value;
    };
    const InnerProvider = StateProvider;
    StateProvider = ({ children }) => {
      const [value, setValue] = useState(initialState[name]);
      useEffect(() => {
        stateItemUpdateListeners[name].push((func) => {
          setValue(func);
        });
      }, []);
      return (
        <Provider value={{ value, update: stateItemUpdaters[name] }}>
          <InnerProvider>
            {children}
          </InnerProvider>
        </Provider>
      );
    };
  });
  const StateConsumer = ({ name, children }) => stateItemConsumers[name]({ children });
  Object.freeze(stateItemConsumers);
  Object.freeze(stateItemUpdaters);
  Object.freeze(stateItemHooks);
  return {
    StateProvider,
    StateConsumer,
    stateItemConsumers,
    stateItemUpdaters,
    stateItemHooks,
  };
};
