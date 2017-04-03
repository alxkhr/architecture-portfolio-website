import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ContentProvider from '../src/content-provider';

test('Render an error instead of any content if the global Content object cannot be accessed', t => {
  global.rsscContent = undefined;
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('ErrorSite').length, 1);
  t.is(wrapper.find('Navigation').length, 0);
  t.is(wrapper.find('ProjectOverview').length, 0);
  t.is(wrapper.find('Project').length, 0);
  t.is(wrapper.find('Team').length, 0);
  t.is(wrapper.find('Contact').length, 0);
  t.is(wrapper.find('Disclaimer').length, 0);
});

test.beforeEach(t => {
  global.rsscContent = {
    title: 'foo title',
    projects: [
      {
        anchor: 'project1',
        title: 'some title',
        imageSources: ['example1-image.jpg'],
        thumbnailSource: 'example1-thumb.jpg',
        thumbnailHoverSource: 'example1-hover-thumb.jpg',
        summary: 'some *description* about the project',
        specification: { one: 'foo', two: 'bar', three: 'baz' },
      },
      {
        anchor: 'project2',
        title: 'some other title',
        imageSources: ['example2a-image.jpg', 'example2b-image.jpg', 'example2c-image.jpg'],
        thumbnailSource: 'example2-thumb.jpg',
        thumbnailHoverSource: 'example2-hover-thumb.jpg',
        summary: 'some _other_ description about the project',
        specification: { foo: 'barbaz' },
      },
      {
        anchor: 'project3',
        title: 'some third title',
        imageSources: ['example3a-image.jpg', 'example3b-image.jpg'],
        thumbnailSource: 'example3-thumb.jpg',
        thumbnailHoverSource: 'example3-hover-thumb.jpg',
        summary: 'some **third** description about the project',
        specification: { one: 'foo', two: 'bar' },
      },
    ],
    projectOverview: {
      navigationTitle: 'Projekte',
      anchor: 'overview',
    },
    team: {
      navigationTitle: 'Team',
      anchor: 'team',
      portrait: 'portrait-image.jpg',
      biography: 'some foo biography',
      employees: ['personFoo', 'personBar', 'personBaz'],
    },
    contact: {
      navigationTitle: 'Kontakt',
      anchor: 'contact',
      phone: 'foo-number',
      email: 'foo.email@address.bar',
      address: 'foo, address',
    },
    disclaimer: {
      anchor: 'disclaimer',
      text: 'some foo disclaimer',
    },
  };
});

test('Render a Navigation.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Navigation').length, 1);
});

test('Provide the site title and links to the team, the project and the contact section as anchor/title pairs for the Navigation.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Navigation').prop('title'), 'foo title');
  t.deepEqual(wrapper.find('Navigation').prop('navigation'), [
    { title: 'Projekte', anchor: 'overview' },
    { title: 'Team', anchor: 'team' },
    { title: 'Kontakt', anchor: 'contact' },
  ]);
});

test('Render a ProjectOverview.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('ProjectOverview').length, 1);
});

test('Provide an own anchor and the thumbnail, thumbnailHover title and anchor of every project for the ProjectOverview.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('ProjectOverview').prop('anchor'), 'overview');
  t.deepEqual(wrapper.find('ProjectOverview').prop('projects'), [
    {
      title: 'some title',
      anchor: 'project1',
      thumbnail: 'example1-thumb.jpg',
      thumbnailHover: 'example1-hover-thumb.jpg',
    },
    {
      title: 'some other title',
      anchor: 'project2',
      thumbnail: 'example2-thumb.jpg',
      thumbnailHover: 'example2-hover-thumb.jpg',
    },
    {
      title: 'some third title',
      anchor: 'project3',
      thumbnail: 'example3-thumb.jpg',
      thumbnailHover: 'example3-hover-thumb.jpg',
    },
  ]);
});

test('Render a Project for every project.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Project').length, 3);
});

test('Provide the anchor, the title, the images, the summary and the specification list as key/value pairs for every Project.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Project').at(0).prop('anchor'), 'project1');
  t.is(wrapper.find('Project').at(0).prop('title'), 'some title');
  t.deepEqual(wrapper.find('Project').at(0).prop('images'), ['example1-image.jpg']);
  t.is(wrapper.find('Project').at(0).prop('summary'), 'some *description* about the project');
  t.deepEqual(wrapper.find('Project').at(0).prop('specification'), [
    { id: 'one', value: 'foo' },
    { id: 'two', value: 'bar' },
    { id: 'three', value: 'baz' },
  ]);
  t.is(wrapper.find('Project').at(1).prop('anchor'), 'project2');
  t.is(wrapper.find('Project').at(1).prop('title'), 'some other title');
  t.deepEqual(wrapper.find('Project').at(1).prop('images'), [
    'example2a-image.jpg',
    'example2b-image.jpg',
    'example2c-image.jpg',
  ]);
  t.is(wrapper.find('Project').at(1).prop('summary'), 'some _other_ description about the project');
  t.deepEqual(wrapper.find('Project').at(1).prop('specification'), [{ id: 'foo', value: 'barbaz' }]);
  t.is(wrapper.find('Project').at(2).prop('anchor'), 'project3');
  t.is(wrapper.find('Project').at(2).prop('title'), 'some third title');
  t.deepEqual(wrapper.find('Project').at(2).prop('images'), [
    'example3a-image.jpg',
    'example3b-image.jpg',
  ]);
  t.is(wrapper.find('Project').at(2).prop('summary'), 'some **third** description about the project');
  t.deepEqual(wrapper.find('Project').at(2).prop('specification'), [
    { id: 'one', value: 'foo' },
    { id: 'two', value: 'bar' },
  ]);
});

test('Render a Team.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Team').length, 1);
});

test('Provide the anchor, the portrait, the biography and the list of employees for the Team.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Team').prop('anchor'), 'team');
  t.is(wrapper.find('Team').prop('portrait'), 'portrait-image.jpg');
  t.is(wrapper.find('Team').prop('biography'), 'some foo biography');
  t.deepEqual(wrapper.find('Team').prop('employees'), ['personFoo', 'personBar', 'personBaz']);
});

test('Render a Contact.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Contact').length, 1);
});

test('Provide the anchor and the address, email and phone number as type/value pair for the Contact.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Contact').prop('anchor'), 'contact');
  t.deepEqual(wrapper.find('Contact').prop('types'), [
    { type: 'Telefon', value: 'foo-number' },
    { type: 'Email', value: 'foo.email@address.bar' },
    { type: 'Adresse', value: 'foo, address' },
  ]);
});

test('Render a Disclaimer.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Disclaimer').length, 1);
});

test('Provide the anchor and the text for the Disclaimer.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Disclaimer').prop('anchor'), 'disclaimer');
  t.is(wrapper.find('Disclaimer').prop('children'), 'some foo disclaimer');
});
