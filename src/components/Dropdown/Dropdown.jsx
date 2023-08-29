import React, { useState } from 'react';

export default function Dropdown({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {isOpen ? 'Hide Description' : 'Show Description'}
      </button>
      {isOpen && <p>{description}</p>}
    </div>
  );
}
