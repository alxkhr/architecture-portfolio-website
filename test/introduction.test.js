import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Introduction from '../src/introduction';

test('Render the given introduction text.', t => {
  const wrapper = shallow(<Introduction>foo intro</Introduction>);
  t.true(wrapper.containsMatchingElement(<p>foo intro</p>));
});
