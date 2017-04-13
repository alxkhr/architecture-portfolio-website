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
        images: [{ source: 'assets/example1-image.jpg', photographer: 'anybody1' }],
        thumbnailSource: 'example1-thumb.jpg',
        summary: 'some *description* about the project',
        specification: { one: 'foo', two: 'bar', three: 'baz' },
      },
      {
        anchor: 'project2',
        title: 'some other title',
        images: [
          { source: 'assets/example2a-image.jpg', photographer: 'anybody2' },
          { source: 'assets/example2b-image.jpg', photographer: 'anybody3' },
          { source: 'assets/example2c-image.jpg', photographer: 'anybody4' },
        ],
        thumbnailSource: 'example2-thumb.jpg',
        summary: 'some _other_ description about the project',
        specification: { foo: 'barbaz' },
      },
      {
        anchor: 'project3',
        title: 'some third title',
        images: [
          { source: 'assets/example3a-image.jpg', photographer: 'anybody5' },
          { source: 'assets/example3b-image.jpg', photographer: 'anybody6' },
        ],
        thumbnailSource: 'example3-thumb.jpg',
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
      biografies: [
        {
          name: 'foo name',
          portrait: 'portrait-image.jpg',
          resume: [
            { date: 'foo date', event: 'foo event' },
            { date: 'bar date', event: 'bar event' },
            { date: 'baz date', event: 'baz event' },
          ],
        },
      ],
      employees: ['personFoo', 'personBar', 'personBaz'],
    },
    contact: {
      navigationTitle: 'Kontakt',
      anchor: 'contact',
      phone: 'foo-number',
      fax: 'foo-fax',
      email: 'foo.email@address.bar',
      address: 'foo, address',
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

test('Provide an own anchor and the thumbnail, title and anchor of every project for the ProjectOverview.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('ProjectOverview').prop('anchor'), 'overview');
  t.deepEqual(wrapper.find('ProjectOverview').prop('projects'), [
    {
      title: 'some title',
      anchor: 'project1',
      thumbnail: 'example1-thumb.jpg',
    },
    {
      title: 'some other title',
      anchor: 'project2',
      thumbnail: 'example2-thumb.jpg',
    },
    {
      title: 'some third title',
      anchor: 'project3',
      thumbnail: 'example3-thumb.jpg',
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
  t.deepEqual(wrapper.find('Project').at(0).prop('images'), [
    { source: 'assets/example1-image.jpg', photographer: 'anybody1' },
  ]);
  t.is(wrapper.find('Project').at(0).prop('summary'), 'some *description* about the project');
  t.deepEqual(wrapper.find('Project').at(0).prop('specification'), [
    { id: 'one', value: 'foo' },
    { id: 'two', value: 'bar' },
    { id: 'three', value: 'baz' },
  ]);
  t.is(wrapper.find('Project').at(1).prop('anchor'), 'project2');
  t.is(wrapper.find('Project').at(1).prop('title'), 'some other title');
  t.deepEqual(wrapper.find('Project').at(1).prop('images'), [
    { source: 'assets/example2a-image.jpg', photographer: 'anybody2' },
    { source: 'assets/example2b-image.jpg', photographer: 'anybody3' },
    { source: 'assets/example2c-image.jpg', photographer: 'anybody4' },
  ]);
  t.is(wrapper.find('Project').at(1).prop('summary'), 'some _other_ description about the project');
  t.deepEqual(wrapper.find('Project').at(1).prop('specification'), [
    { id: 'foo', value: 'barbaz' },
  ]);
  t.is(wrapper.find('Project').at(2).prop('anchor'), 'project3');
  t.is(wrapper.find('Project').at(2).prop('title'), 'some third title');
  t.deepEqual(wrapper.find('Project').at(2).prop('images'), [
    { source: 'assets/example3a-image.jpg', photographer: 'anybody5' },
    { source: 'assets/example3b-image.jpg', photographer: 'anybody6' },
  ]);
  t.is(
    wrapper.find('Project').at(2).prop('summary'),
    'some **third** description about the project',
  );
  t.deepEqual(wrapper.find('Project').at(2).prop('specification'), [
    { id: 'one', value: 'foo' },
    { id: 'two', value: 'bar' },
  ]);
});

test('Render a Team.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Team').length, 1);
});

test('Provide the anchor, the biografies and the list of employees for the Team.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Team').prop('anchor'), 'team');
  t.deepEqual(wrapper.find('Team').prop('biografies'), [
    {
      name: 'foo name',
      portrait: 'portrait-image.jpg',
      resume: [
        { date: 'foo date', event: 'foo event' },
        { date: 'bar date', event: 'bar event' },
        { date: 'baz date', event: 'baz event' },
      ],
    },
  ]);
  t.deepEqual(wrapper.find('Team').prop('employees'), ['personFoo', 'personBar', 'personBaz']);
});

test('Render a Contact.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Contact').length, 1);
});

test('Provide the anchor and the address, email, fax and phone number as type/value pair for the Contact.', t => {
  const wrapper = shallow(<ContentProvider />);
  t.is(wrapper.find('Contact').prop('anchor'), 'contact');
  t.deepEqual(wrapper.find('Contact').prop('types'), [
    { value: 'foo, address' },
    { type: 'Telefon', value: 'foo-number' },
    { type: 'Fax', value: 'foo-fax' },
    { type: 'Email', value: 'foo.email@address.bar' },
  ]);
});
