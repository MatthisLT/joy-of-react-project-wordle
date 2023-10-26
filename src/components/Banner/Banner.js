import React from 'react';

function Banner({ status, children }) {
  const classes = ['banner', status].join(' ');

  return <div className={classes}>{children}</div>;
}

export default Banner;
