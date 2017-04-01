import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../src/navigation';

const requiredProps = {
  title: 't',
  navigation: [],
};

test('Render the given title.', t => {
  const wrapper = shallow(<Navigation {...requiredProps} title="foo title" />);
  t.true(wrapper.containsMatchingElement(<h1>foo title</h1>));
});

test('Render a list item for every given anchor/title pair.', t => {
  const wrapper = shallow(
    <Navigation
      {...requiredProps}
      navigation={[
        { anchor: 'foo', title: 'one' },
        { anchor: 'bar', title: 'two' },
        { anchor: 'baz', title: 'three' },
      ]}
    />,
  );
  t.true(
    wrapper.containsMatchingElement(
      <ul>
        <li><a href="#foo">one</a></li>
        <li><a href="#bar">two</a></li>
        <li><a href="#baz">three</a></li>
      </ul>,
    ),
  );
});
