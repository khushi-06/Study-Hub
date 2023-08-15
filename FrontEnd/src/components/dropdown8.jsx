import React, { useState } from 'react';

function DropdownComponent5() {
  const options = [
    { value: 'option1', label: 'Theory of Computer Science' },
    { value: 'option2', label: 'Introduction to Intelligent System' },
    { value: 'option3', label: 'Microprocessor' },
    { value: 'option4', label: 'Advance Database Management System ' },
    { value: 'option5', label: 'Workshop Manufacturing-1' },
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
          {selectedValue ? selectedValue : 'Semester 05'}
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

export default DropdownComponent5;
