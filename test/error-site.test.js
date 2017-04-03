import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ErrorSite from '../src/error-site';

test('Render the given text', t => {
  const wrapper = shallow(<ErrorSite>foo error message</ErrorSite>);
  t.true(wrapper.containsMatchingElement(<p>foo error message</p>));
});
