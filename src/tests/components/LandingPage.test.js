import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

describe('LandingPage Component', () => {
  it('should render the Landing Page', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
