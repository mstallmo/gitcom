import App from './App.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe('Root App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('it should render the app', () => {
    expect(component.find('HomePage').length).toEqual(1);
  });
});
