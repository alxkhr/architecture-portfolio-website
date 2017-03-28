import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Team from '../src/team';

test('Render the given portrait, biography and list of employees.', t => {
  const wrapper = shallow(
    <Team
      portrait="foo-image.jpg"
      biography="foo bar test bla."
      employees={['foo', 'bar', 'foobar']}
    />,
  );
  t.true(wrapper.containsMatchingElement(<img src="foo-image.jpg" />));
  t.true(wrapper.containsMatchingElement(<p>foo bar test bla.</p>));
  t.true(wrapper.containsMatchingElement(<ul><li>foo</li><li>bar</li><li>foobar</li></ul>));
});