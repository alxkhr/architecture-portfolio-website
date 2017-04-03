import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Introduction from '../src/introduction';

test('Render the given anchor and introduction text.', t => {
  const wrapper = shallow(<Introduction anchor="foo-anchor">foo intro</Introduction>);
  t.is(wrapper.prop('id'), 'foo-anchor');
  t.true(wrapper.containsMatchingElement(<p>foo intro</p>));
});
