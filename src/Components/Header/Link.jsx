import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '');

  const handleLinkClick = () => {
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? 'text-primary border-b-2 mt-0.5 border-[#2c84f7]'
          : 'text-[#FFFFFF]'
      } transition font-bold text-lg duration-500 hover:text-[#FFFFFF]`}
      href={`#${lowerCasePage}`}
      onClick={handleLinkClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
