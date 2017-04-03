import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ProjectOverview from '../src/project-overview';
import Thumb from '../src/thumb';

const projects = [
  {
    thumbnail: 'foo1-thumb.jpg',
    thumbnailHover: 'foo1-hover.jpg',
    title: 'foo1-title',
    anchor: 'foo1-anchor',
  },
  {
    thumbnail: 'foo2-thumb.jpg',
    thumbnailHover: 'foo2-hover.jpg',
    title: 'foo2-title',
    anchor: 'foo2-anchor',
  },
  {
    thumbnail: 'foo3-thumb.jpg',
    thumbnailHover: 'foo3-hover.jpg',
    title: 'foo3-title',
    anchor: 'foo3-anchor',
  },
];

test('Render the given anchor and a Thumb for every given project.', t => {
  const wrapper = shallow(<ProjectOverview anchor="foo-anchor" projects={projects} />);
  t.is(wrapper.prop('id'), 'foo-anchor');
  t.is(wrapper.find('Thumb').length, 3);
});

test('Pass the thumbnail, the title and the anchor of the project to the Thumb.', t => {
  const wrapper = shallow(<ProjectOverview anchor="foo-anchor" projects={projects} />);
  t.true(
    wrapper.containsMatchingElement(
      <Thumb
        image="foo1-thumb.jpg"
        hoverImage="foo1-hover.jpg"
        title="foo1-title"
        anchor="foo1-anchor"
      />,
    ),
  );
  t.true(
    wrapper.containsMatchingElement(
      <Thumb
        image="foo2-thumb.jpg"
        hoverImage="foo2-hover.jpg"
        title="foo2-title"
        anchor="foo2-anchor"
      />,
    ),
  );
  t.true(
    wrapper.containsMatchingElement(
      <Thumb
        image="foo3-thumb.jpg"
        hoverImage="foo3-hover.jpg"
        title="foo3-title"
        anchor="foo3-anchor"
      />,
    ),
  );
});
