import React from 'react';
import { BuilderComponent } from '@builder.io/react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <BuilderComponent model="navigation-links" />
      </div>
    </header>
  );
};

export default Header;