import React from 'react';

export type StateProviderProps = {
  children?: React.ReactNode;
};

export type StateConsumerProps = {
  name: string;
  // tslint:disable-next-line:no-any
  children?: (value: any, update: (f: any) => void) => React.ReactNode;
};

export type StateItemUpdater<T> = (f: ((v: T) => T) | T) => void;

export type StateItemConsumerProps<T> = {
  children?: (value: T, update: StateItemUpdater<T>) => React.ReactNode;
};

export const createGlobalState: <S extends {}>(initialState: S) => {
  StateProvider: React.ComponentType<StateProviderProps>,
  StateConsumer: React.ComponentType<StateConsumerProps>,
  stateItemConsumers: { [K in keyof S]: React.ComponentType<StateItemConsumerProps<S[K]>> },
  stateItemUpdaters: { [K in keyof S]: StateItemUpdater<S[K]> | undefined },
};
