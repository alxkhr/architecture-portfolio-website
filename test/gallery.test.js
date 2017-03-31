import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../src/gallery';
import GalleryMenu from '../src/gallery-menu';

test('Render the first of the given images.', t => {
  const wrapper = shallow(<Gallery images={['foo1.jpg', 'foo2.jpg', 'foo3.jpg']} />);
  t.true(wrapper.containsMatchingElement(<img src="foo1.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo2.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo3.jpg" />));
});

test('Render a GalleryMenu on entering the image (with the mouse).', t => {
  const wrapper = shallow(<Gallery images={['foo1.jpg', 'foo2.jpg', 'foo3.jpg']} />);
  t.false(wrapper.containsMatchingElement(<GalleryMenu />));
  wrapper.find('img').simulate('mouseEnter');
  t.true(wrapper.containsMatchingElement(<GalleryMenu />));
});

test('Dont render the GalleryMenu anymore on leaving.', t => {
  const wrapper = shallow(<Gallery images={['foo1.jpg', 'foo2.jpg', 'foo3.jpg']} />);
  wrapper.find('img').simulate('mouseEnter');
  wrapper.find('img').simulate('mouseLeave');
  t.false(wrapper.containsMatchingElement(<GalleryMenu />));
});

test('Pass a callback to the GalleryMenu that cycles through the given images', t => {
  const wrapper = shallow(<Gallery images={['foo1.jpg', 'foo2.jpg', 'foo3.jpg']} />);
  wrapper.find('img').simulate('mouseEnter');
  t.truthy(wrapper.find('GalleryMenu').prop('onClickNext'));
  wrapper.find('GalleryMenu').prop('onClickNext')();
  t.false(wrapper.containsMatchingElement(<img src="foo1.jpg" />));
  t.true(wrapper.containsMatchingElement(<img src="foo2.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo3.jpg" />));
  wrapper.find('GalleryMenu').prop('onClickNext')();
  wrapper.find('GalleryMenu').prop('onClickNext')();
  t.true(wrapper.containsMatchingElement(<img src="foo1.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo2.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo3.jpg" />));
});

test('Pass a callback to the GalleryMenu that cycles backwards through the given images', t => {
  const wrapper = shallow(<Gallery images={['foo1.jpg', 'foo2.jpg', 'foo3.jpg']} />);
  wrapper.find('img').simulate('mouseEnter');
  t.truthy(wrapper.find('GalleryMenu').prop('onClickPrevious'));
  wrapper.find('GalleryMenu').prop('onClickPrevious')();
  t.false(wrapper.containsMatchingElement(<img src="foo1.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo2.jpg" />));
  t.true(wrapper.containsMatchingElement(<img src="foo3.jpg" />));
  wrapper.find('GalleryMenu').prop('onClickPrevious')();
  t.false(wrapper.containsMatchingElement(<img src="foo1.jpg" />));
  t.true(wrapper.containsMatchingElement(<img src="foo2.jpg" />));
  t.false(wrapper.containsMatchingElement(<img src="foo3.jpg" />));
});

test.todo('Render a indicator for the index of the active image and the quantity of all images.');
