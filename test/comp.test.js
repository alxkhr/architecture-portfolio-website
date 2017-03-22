import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Comp from '../src/comp';

global.rsscContent = {
  title: 'foo title',
  projects: [
    {
      year: '2001',
      title: 'some title',
      imageSource: 'example-image.jpg',
      thumbnailSource: 'example-thumb.jpg',
      description: 'some *description* about the project',
    },
    {
      year: '2007',
      title: 'some other title',
      imageSource: 'example-image.jpg',
      thumbnailSource: 'example-thumb.jpg',
      description: 'some other description about the project',
    },
  ],
};

test('foo', t => {
  const wrapper = shallow(<Comp />);
  console.log('comp', wrapper.html());
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
