import React, { useState } from 'react';
import { NavCategory } from '../../../Types';

const NavItem: React.FC<NavCategory> = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const displayCategories = () => {
    return subCategories.map((cat: string, i: number) => {
      return (
        <li key={i}>
          <a>{cat}</a>
        </li>
      );
    });
  };

  return (
    <li>
      <button className='navCategory' onClick={() => toggleOptions()}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <ul className='subCategories'>{displayCategories()}</ul>}
    </li>
  );
};

export default NavItem;

