import React, { PropTypes } from 'react';

export default function ErrorSite({ children = 'An unknown error has occurred.' }) {
  return <div><p>{children}</p></div>;
}

ErrorSite.propTypes = {
  children: PropTypes.node,
};
