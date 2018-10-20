import HomePage from './HomePage.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe('HomePage', () => {
  let component;
  beforeEach(() => {
    component = shallow(<HomePage />);
  });

  it('should render the HomePage with a h1', () => {
      expect(component.find('h1').length).toEqual(1);
  });
});