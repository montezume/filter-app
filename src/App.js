import React, { Component } from 'react';

import FilterCollection from './FilterCollection';

import SearchFilter, { defaultSearchFilter } from './SearchFilter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterCollection
          filters={{
           search: defaultSearchFilter
          }}
          render={({
            activeFilters,
            filters,
            add,
            remove,
            update
          }) => {

            return (
              <div>

                <div>
                  Active Filters:
                  <ul>
                    { activeFilters.map((activeFilter, index) => (
                      <li key={index}>
                        {activeFilter.value}
                      </li>
                      )
                    )}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => add(filters.search)}
                  >
                  {
                    activeFilters.filter(filter => filter.type === filters.search.type).length === 0 ? (
                      <span>Add filter</span>
                    ) : (
                      <span>Update filter</span>
                    )
                  }
                </button>
                { activeFilters.filter(filter => filter.type === filters.search.type).length !== 0 &&
                  <button
                    type="button"
                    onClick={() => remove(filters.search)}
                    >
                      Remove filter
                  </button>
                }

                <SearchFilter
                  filter={filters.search}
                  onUpdate={update}
                />
              </div>
            )
          }}
        />
      </div>
    );
  }
}

export default App;
