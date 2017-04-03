import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Disclaimer from '../src/disclaimer';

test('Render the given anchor and disclaimer text.', t => {
  const wrapper = shallow(<Disclaimer anchor="foo-anchor">foo disclaimer</Disclaimer>);
  t.is(wrapper.prop('id'), 'foo-anchor');
  t.true(wrapper.containsMatchingElement(<p>foo disclaimer</p>));
});
