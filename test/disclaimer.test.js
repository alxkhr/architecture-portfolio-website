import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Disclaimer from '../src/disclaimer';

test('Render the given disclaimer text.', t => {
  const wrapper = shallow(<Disclaimer>foo disclaimer</Disclaimer>);
  t.true(wrapper.containsMatchingElement(<p>foo disclaimer</p>));
});
