import React, { useState } from 'react';

function DropdownComponent2() {
  const options = [
    { value: 'option1', label: 'Chemistry' },
    { value: 'option2', label: 'Mathematics 2' },
    { value: 'option3', label: 'Programming for Problem Solving' },
    { value: 'option4', label: 'Engineering Mechanics' },
    { value: 'option5', label: 'Workshop Manufacturing-2' },
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
          {selectedValue ? selectedValue : 'Semester 02'}
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

export default DropdownComponent2;
