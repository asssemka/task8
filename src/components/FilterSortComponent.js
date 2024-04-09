// FilterSortComponent.js
import React from 'react';

const FilterSortComponent = ({ filter, sort, onFilterChange, onSortChange }) => {
  return (
    <div>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="category">Category</option>
        <option value="date">Date</option>
        {/* Add other filter options */}
      </select>
      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        {/* Add other sort options */}
      </select>
    </div>
  );
};

export default FilterSortComponent;
