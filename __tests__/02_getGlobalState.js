/* eslint-env jest */

import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { createGlobalState } from '../src/index';

configure({ adapter: new Adapter() });

describe('getGlobalState', () => {
  it('should update state', () => {
    const initialState = {
      count1: 0,
    };
    const { StateProvider, StateConsumer, getGlobalState } = createGlobalState(initialState);
    const Counter = () => (
      <StateConsumer name="count1">
        {(value, update) => (
          <div>
            <span>{value}</span>
            <button type="button" onClick={() => update(value + 1)}>+1</button>
          </div>
        )}
      </StateConsumer>
    );
    const App = () => (
      <StateProvider>
        <div>
          <Counter />
        </div>
      </StateProvider>
    );
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(getGlobalState('count1')).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(getGlobalState('count1')).toMatchSnapshot();
  });
});
