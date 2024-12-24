import React, { useState } from 'react';
import { NavLink } from '@remix-run/react';

export function DropdownMenu({ items, className, buttonName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={{className}}>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonName}</button>
      {isOpen && (
        <ul className={`${className}-menu-list`}>
          {items.map(({ name, href }) => (
            <li key={href}>
              <a href={href} className="block px-4 py-2 hover:bg-gray-100">
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
