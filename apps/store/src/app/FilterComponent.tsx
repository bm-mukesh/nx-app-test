import React, { ChangeEvent } from 'react';

interface FilterComponentProps {
  onFilter: (value: string) => void;
  onClear: () => void;
  filterText: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onClear, filterText }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFilter(event.target.value);
    console.log("SEARCH TEXT", event.target);

  };
  return (
    <div>
      <input type="text" value={filterText} onChange={handleInputChange} />
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default FilterComponent;
