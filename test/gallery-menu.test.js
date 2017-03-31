import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GalleryMenu from '../src/gallery-menu';

test('Render a button for "next" and "previous", if callbacks are given', t => {
  function onClickNext() { return 'next foo'; }
  function onClickPrevious() { return 'previous foo'; }
  const wrapperBoth = shallow(<GalleryMenu {...{ onClickNext, onClickPrevious }} />).find('a');
  const wrapperNext = shallow(<GalleryMenu {...{ onClickNext }} />).find('a');
  const wrapperPrevious = shallow(<GalleryMenu {...{ onClickPrevious }} />).find('a');
  const wrapperNone = shallow(<GalleryMenu />).find('a');
  t.is(wrapperBoth.length, 2);
  t.is(wrapperNext.length, 1);
  t.is(wrapperPrevious.length, 1);
  t.is(wrapperNone.length, 0);
});

test('Trigger the callback for "next" on clicking the button', t => {
  const onClickNext = sinon.spy();
  const wrapper = shallow(<GalleryMenu {...{ onClickNext }} />).find('a');
  wrapper.simulate('click');
  t.true(onClickNext.calledOnce);
});

test('Trigger the callback for "previous" on clicking the button', t => {
  const onClickPrevious = sinon.spy();
  const wrapper = shallow(<GalleryMenu {...{ onClickPrevious }} />).find('a');
  wrapper.simulate('click');
  t.true(onClickPrevious.calledOnce);
});
