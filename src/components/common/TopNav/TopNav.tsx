import React, { useState } from 'react';
import NavItem from './NavItem';
import logo from '../../../assets/images/RP-logo-bg.png';
import { NavCategory } from '../../../Types';

function TopNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  //mock data//
  const categories = [
    {
      id: 1,
      title: 'JS Fundamentals',
      subCategories: [
        'Basics',
        'Asynchronous Operations',
        "DOM/Browser API's",
        'Array/Object Methods',
        'Misc.',
      ],
    },
    {
      id: 2,
      title: 'Accessibility',
      subCategories: [
        'Basics',
        'Standards',
        'WAI-ARIA',
        'Site Navigation',
        'Screen Readers',
        'Reference Materials',
        'Demonstrable Skills',
      ],
    },
    {
      id: 3,
      title: 'React',
      subCategories: [
        'Core React',
        'State Management',
        'Vite',
        'Advanced React',
        'Testing',
        'Nice to Have',
        'Demonstrable Skills',
      ],
    },
    {
      id: 4,
      title: 'Angular',
      subCategories: [
        'Core Angular',
        'RxJS',
        'Ngrx',
        'Developer Workflow',
        'Advanced Angular',
        'Testing',
        'Demonstrable Skills',
      ],
    },
    {
      id: 5,
      title: 'CSS',
      subCategories: [
        'Basic Concepts',
        'Selectors',
        'Layouts',
        'Responsive',
        'Functions',
        'Misc.',
        'Sass',
        'Tooling',
        'Demonstrable Skills',
      ],
    },
    {
      id: 6,
      title: 'Web Animations',
      subCategories: [
        'CSS Animations',
        'JS Animations',
        'Animation Tools & Libraries',
        'Demonstrable Skills',
      ],
    },
    {
      id: 7,
      title: 'TypeScript',
      subCategories: [
        'The Basics',
        'Intermediate',
        'Advanced',
        'Tooling and Best Practices',
        'Demonstrable Skills',
      ],
    },
  ];

  const navItems = () => {
    return categories.map((cat: NavCategory) => {
      return (
        <NavItem
          key={cat.id}
          id={cat.id}
          title={cat.title}
          subCategories={cat.subCategories}
        />
      );
    });
  };

  return (
    <div className='topNav'>
      <div className='headerBar'>
        <a className='logoWrap' href='/'>
          <img
            className='logo'
            src={logo}
            alt='Rightpoint logo link to dashboard'
          />
        </a>
        <button
          className={isOpen ? 'hamburger open' : 'hamburger'}
          onClick={() => toggleNav()}
        >
          <i className={isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
        </button>
      </div>
      {isOpen && (
        <div className='mobileNav'>
          <div className='welcomeMsg'>
            <h2>Welcome, Beyonce</h2>
            <h3>Click a subject to edit/add scores</h3>
          </div>
          <ul className='navList'>{navItems()}</ul>
        </div>
      )}
    </div>
  );
}

export default TopNav;

