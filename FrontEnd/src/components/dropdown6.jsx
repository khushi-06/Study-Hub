import React, { useState } from 'react';

function DropdownComponent6() {
  const options = [
    { value: 'option1', label: 'Software Enginering' },
    { value: 'option2', label: 'Cryptographic Security System ' },
    { value: 'option3', label: 'System programming compiler construction' },
    { value: 'option4', label: 'Internet Programming' },
    { value: 'option5', label: 'Digital Marketing' },
    // Add more options as needed
  ];

  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionSelect = (value) => {
      setSelectedValue(value);
      setIsOpen(false);
    };

    return (
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedValue ? selectedValue : 'Semester 06'}
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="dd">
      <Dropdown />
    </div>
  );
}

export default DropdownComponent6;
