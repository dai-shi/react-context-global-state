import React from 'react';

const isFunction = fn => (typeof fn === 'function');

export const createGlobalState = (initialState) => {
  const stateItemConsumers = {};
  const stateItemUpdaters = {};
  let StateProvider = ({ children }) => <React.Fragment>{children}</React.Fragment>;
  Object.keys(initialState).forEach((name) => {
    const { Provider, Consumer } = React.createContext({
      value: initialState[name],
      update: () => { throw new Error('cannot update initial value'); },
    });
    stateItemConsumers[name] = ({ children }) => (
      <Consumer>
        {({ value, update }) => children(value, update)}
      </Consumer>
    );
    const InnerProvider = StateProvider;
    StateProvider = class extends React.PureComponent {
      constructor() {
        super();
        stateItemUpdaters[name] = (func) => {
          if (isFunction(func)) {
            this.setState(state => Object.assign({}, state, { value: func(state.value) }));
          } else {
            this.setState({ value: func });
          }
        };
        this.state = { value: initialState[name], update: stateItemUpdaters[name] };
      }

      render() {
        const { children } = this.props;
        return (
          <Provider value={this.state}>
            <InnerProvider>
              {children}
            </InnerProvider>
          </Provider>
        );
      }
    };
  });
  const StateConsumer = ({ name, children }) => stateItemConsumers[name]({ children });
  return {
    StateProvider,
    StateConsumer,
    stateItemConsumers,
    stateItemUpdaters,
  };
};
