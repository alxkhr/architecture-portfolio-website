import React, { PropTypes } from 'react';

export default function Navigation({ title, navigation }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {navigation.map(({ title, anchor }, i) => (
          <li key={i}><a href={`#${anchor}`}>{title}</a></li>
        ))}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      anchor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
