import React from 'react';
import ErrorSite from './error-site';
import Navigation from './navigation';
import ProjectOverview from './project-overview';
import Project from './project';
import Team from './team';
import Contact from './contact';
import Disclaimer from './disclaimer';
import style from '../style/content-provider.css';

export default function ContentProvider() {
  if (!rsscContent) return <ErrorSite text="Daten konnten nicht geladen werden." />;
  const { title, projects, projectOverview, team, contact, disclaimer } = rsscContent;
  return (
    <div className={style.contentProvider}>
      <Navigation
        title={title}
        navigation={[projectOverview, team, contact, disclaimer]
          .filter(section => Boolean(section.navigationTitle))
          .map(section => ({ title: section.navigationTitle, anchor: section.anchor }))}
      />
      <ProjectOverview
        anchor={projectOverview.anchor}
        projects={projects.map(project => ({
          thumbnail: project.thumbnailSource,
          thumbnailHover: project.thumbnailHoverSource,
          title: project.title,
          anchor: project.anchor,
        }))}
      />
      {projects.map((project, i) => (
        <Project
          key={i}
          anchor={project.anchor}
          title={project.title}
          images={project.imageSources}
          summary={project.summary}
          specification={Object.keys(project.specification).map(key => ({
            id: key,
            value: project.specification[key],
          }))}
        />
      ))}
      <Team
        anchor={team.anchor}
        portrait={team.portrait}
        biography={team.biography}
        employees={team.employees}
      />
      <Contact
        anchor={contact.anchor}
        types={[
          { type: 'Telefon', value: contact.phone },
          { type: 'Email', value: contact.email },
          { type: 'Adresse', value: contact.address },
        ]}
      />
      <Disclaimer anchor={disclaimer.anchor}>{disclaimer.text}</Disclaimer>
    </div>
  );
}
