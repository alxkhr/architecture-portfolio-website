import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../src/contact';

test('Render the given anchor and a list item for every given type/value pair.', t => {
  const wrapper = shallow(
    <Contact
      anchor="foo-anchor"
      types={[
        { type: 'one', value: 'foo' },
        { type: 'two', value: 'bar' },
        { type: 'three', value: 'baz' },
      ]}
    />,
  );
  t.is(wrapper.prop('id'), 'foo-anchor');
  t.true(
    wrapper.containsMatchingElement(
      <ul>
        <li><span>one</span><span>foo</span></li>
        <li><span>two</span><span>bar</span></li>
        <li><span>three</span><span>baz</span></li>
      </ul>,
    ),
  );
});
