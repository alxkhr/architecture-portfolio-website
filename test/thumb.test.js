import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Thumb from '../src/thumb';

const requiredProps = {
  title: 't',
  image: 'i',
  anchor: 'a',
};

test('Dont render the given title.', t => {
  const wrapper = shallow(<Thumb {...requiredProps} title="foo title" />);
  t.false(wrapper.containsMatchingElement(<h2>foo title</h2>));
});

test('Render the given image.', t => {
  const wrapper = shallow(<Thumb {...requiredProps} image="foo-image.jpg" />);
  t.true(wrapper.containsMatchingElement(<img src="foo-image.jpg" />));
});

test('Link to the the given anchor.', t => {
  const wrapper = shallow(<Thumb {...requiredProps} anchor="foo-anchor" />).find('a');
  t.is(wrapper.length, 1);
  t.is(wrapper.prop('href'), '#foo-anchor');
});

test('Render the title on entering (with the mouse).', t => {
  const wrapper = shallow(
    <Thumb
      {...requiredProps}
      title="foo title"
      image="foo-image.jpg"
    />,
  );
  wrapper.find('a').simulate('mouseEnter');
  t.true(wrapper.containsMatchingElement(<h2>foo title</h2>));
});

test('Revert changes on leaving.', t => {
  const wrapper = shallow(
    <Thumb
      {...requiredProps}
      title="foo title"
      image="foo-image.jpg"
      hoverImage="foo-hover-image.jpg"
    />,
  );
  wrapper.find('a').simulate('mouseEnter');
  wrapper.find('a').simulate('mouseLeave');
  t.false(wrapper.containsMatchingElement(<h2>foo title</h2>));
});
