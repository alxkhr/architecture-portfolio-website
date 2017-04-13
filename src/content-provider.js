import React from 'react';
import ErrorSite from './error-site';
import Navigation from './navigation';
import ProjectOverview from './project-overview';
import Project from './project';
import Team from './team';
import Contact from './contact';
import Footer from './footer';
import style from '../style/content-provider.css';

export default function ContentProvider() {
  if (!rsscContent) return <ErrorSite text="Daten konnten nicht geladen werden." />;
  const { title, projects, projectOverview, team, contact } = rsscContent;
  return (
    <div className={style.contentProvider}>
      <Navigation
        title={title}
        navigation={[projectOverview, team, contact]
          .filter(section => Boolean(section.navigationTitle))
          .map(section => ({ title: section.navigationTitle, anchor: section.anchor }))}
      />
      <ProjectOverview
        anchor={projectOverview.anchor}
        projects={projects.map(project => ({
          thumbnail: project.thumbnailSource,
          title: project.title,
          anchor: project.anchor,
        }))}
      />
      {projects.map((project, i) => (
        <Project
          key={i}
          anchor={project.anchor}
          title={project.title}
          images={project.images}
          summary={project.summary}
          specification={Object.keys(project.specification).map(key => ({
            id: key,
            value: project.specification[key],
          }))}
        />
      ))}
      <Team
        anchor={team.anchor}
        biografies={team.biografies}
        employees={team.employees}
        partners={team.partners}
        formerEmployees={team.formerEmployees}
      />
      <Contact
        anchor={contact.anchor}
        map={contact.map}
        types={[
          { value: contact.address },
          { type: 'Telefon', value: contact.phone },
          { type: 'Fax', value: contact.fax },
          { type: 'Email', value: contact.email },
        ]}
      />
      <Footer
        anchor="credits"
        credits="[Webdesign &amp; Programmierung von Alexander Kehr](http://alexanderkehr.de)"
      />
    </div>
  );
}
