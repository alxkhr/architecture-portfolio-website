import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Project from '../src/project';
import Gallery from '../src/gallery';

const requiredProps = {
  title: 't',
  summary: 's',
  anchor: 'a',
  images: [],
};

test('Render the given title and summary.', t => {
  const wrapper = shallow(<Project {...requiredProps} title="foo title" summary="foo summary" />);
  t.true(wrapper.containsMatchingElement(<h1>foo title</h1>));
  t.true(wrapper.containsMatchingElement(<p>foo summary</p>));
});

test('Render no Gallery, if no image is given.', t => {
  const wrapper = shallow(<Project {...requiredProps} images={[]} />);
  t.is(wrapper.find('Gallery').length, 0);
});

test('Render a Gallery, if at least one image is given.', t => {
  const wrapper = shallow(<Project {...requiredProps} images={[{ source: 'foo1.jpg' }]} />);
  t.is(wrapper.find('Gallery').length, 1);
});

test('Pass the images to the Gallery.', t => {
  const images = [{ source: 'foo1.jpg'}, { source: 'foo2.jpg' }, { source: 'foo3.jpg' }];
  const wrapper = shallow(<Project {...requiredProps} images={images} />);
  t.deepEqual(wrapper.find('Gallery').props('images'), { images });
});

test('Render the specification, if given. Render a list item for every key/value pair.', t => {
  const specification = [
    { id: 'one', value: 'foo' },
    { id: 'two', value: 'bar' },
    { id: 'three', value: 'baz' },
  ];
  const wrapper = shallow(<Project {...requiredProps} specification={specification} />);
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

test('Set the given anchor', t => {
  const wrapper = shallow(<Project {...requiredProps} anchor="foo-anchor" />);
  t.is(wrapper.prop('id'), 'foo-anchor');
});
