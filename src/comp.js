import React from 'react';
import { markdown } from 'markdown';
import style from '../style/comp.css';

export default function Comp() {
  return (
    <div className={style.comp}>
      <h1>{rsscContent.title}</h1>
      <div>
        {rsscContent.projects.map(
          ({ year, title, description, imageSource }, i) => (
            <div key={i}>
              <img src={`assets/${imageSource}`} />
              <h2>{year} - {title}</h2>
              <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(description) }} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
