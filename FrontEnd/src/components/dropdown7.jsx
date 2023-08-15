import React, { useState } from 'react';

function DropdownComponent7() {
  const options = [
    { value: 'option1', label: ' Software Architecture' },
    { value: 'option2', label: 'Financial Management' },
    { value: 'option3', label: 'PE - DA/HCI' },
    { value: 'option4', label: 'OE - HRM/MIS' },
    { value: 'option5', label: 'ERP' },
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
          {selectedValue ? selectedValue : 'Semester 07'}
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

export default DropdownComponent7;
