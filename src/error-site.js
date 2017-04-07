import React, { PropTypes } from 'react';

export default function ErrorSite({ children = 'An unknown error has occurred.' }) {
  return <section><p>{children}</p></section>;
}

ErrorSite.propTypes = {
  children: PropTypes.node,
};
