import React, { useState } from 'react';

function DropdownComponent3() {
  const options = [
    { value: 'option1', label: 'Data Structures' },
    { value: 'option2', label: 'Mathematics 3' },
    { value: 'option3', label: 'Database Management System ' },
    { value: 'option4', label: 'Digital Logic Design and Analysis' },
    { value: 'option5', label: 'Computer Organisation and Architecture' },
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
          {selectedValue ? selectedValue : 'Semester 03'}
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

export default DropdownComponent3;
