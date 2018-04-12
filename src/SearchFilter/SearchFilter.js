import React from 'react';

export const defaultSearchFilter = {
  type: 'search',
  value: '',
  default: '',
  query: value => `seachTerm=${value}`
};

const onChange = (evt, filter, onUpdate) => {
  const { value } = evt.target;
  onUpdate({
    ...filter,
    value
  });
}

const SearchFilter = ({filter, onUpdate}) => {
  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={filter.value}
        onChange={evt => onChange(evt, filter, onUpdate)}
        />
    </div>
  )
}

export default SearchFilter;
