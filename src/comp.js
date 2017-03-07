import React from 'react';
import { markdown } from 'markdown';

export default function Comp() {
  return (
    <div>
      <h1>{rsscContent.title}</h1>
      <div>
        {rsscContent.projects.map(
          ({ year, title, description }, i) => <div key={i}><h2>{year} - {title}</h2><div dangerouslySetInnerHTML={{ __html: markdown.toHTML(description) }} /></div>
        )}
      </div>
    </div>
  );
}
