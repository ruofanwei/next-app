import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <>
      <div className="main_container">
        {children}
        <div className="footer">
          <p>Created by Carl Nolan</p>
          <p>devChallenges.io</p>
        </div>
      </div>
    </>
  );
};

export default Container;
