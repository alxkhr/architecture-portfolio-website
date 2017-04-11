import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Team from '../src/team';

test('Render the given anchor, brearer portrait, resume and list of employees.', t => {
  const wrapper = shallow(
    <Team
      anchor="foo-anchor"
      bearer="foo bearer"
      portrait="foo-image.jpg"
      resume={[
        { date: 'foo date', event: 'foo event' },
        { date: 'bar date', event: 'bar event' },
        { date: 'baz date', event: 'baz event' },
      ]}
      employees={['foo', 'bar', 'foobar']}
    />,
  );
  t.is(wrapper.prop('id'), 'foo-anchor');
  t.true(wrapper.containsMatchingElement(<img src="foo-image.jpg" />));
  t.true(
    wrapper.containsMatchingElement(
      <ul>
        <li><h2>foo bearer</h2></li>
        <li><span>foo date</span><span>foo event</span></li>
        <li><span>bar date</span><span>bar event</span></li>
        <li><span>baz date</span><span>baz event</span></li>
      </ul>,
    ),
  );
  t.true(wrapper.containsMatchingElement(<ul><li>foo</li><li>bar</li><li>foobar</li></ul>));
});
