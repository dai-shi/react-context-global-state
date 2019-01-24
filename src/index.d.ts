import * as React from 'react';

export type StateProviderProps = {
  children?: React.ReactNode;
};

export type Update<T> = ((v: T) => T) | T;

export type StateConsumerProps<S, N extends keyof S> = {
  name: N;
  children?: (value: S[N], updater: (u: Update<S[N]>) => void) => React.ReactNode;
};

export type StateConsumerType<S, N extends keyof S> = React.ComponentType<StateConsumerProps<S, N>>;

export type SetGlobalState<S> = <N extends keyof S>(
  name: N,
  update: Update<S[N]>,
) => void;

export type GetGlobalState<S> = <N extends keyof S>(
  name: N,
) => S[N];

export const createGlobalState: <S extends {}, N extends keyof S>(initialState: S) => {
  StateProvider: React.ComponentType<StateProviderProps>;
  StateConsumer: StateConsumerType<S, N>;
  setGlobalState: SetGlobalState<S>;
  getGlobalState: GetGlobalState<S>;
};
