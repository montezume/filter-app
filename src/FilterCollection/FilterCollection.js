import { Component } from 'react';

class FilterCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: [],
      filters: this.props.filters
    };
  }

  render() {
    const { activeFilters, filters } = this.state;

    return this.props.render({
      activeFilters,
      filters,
      add: this.add,
      query: this.query,
      remove: this.remove,
      update: this.update
    });
  }

  add = filter => {
    // add to applied filters
    this.setState(prevState => {
      const { activeFilters } = prevState;

      return {
        activeFilters: activeFilters.filter(activeFilter => activeFilter.type !== filter.type).concat(filter)
      };
    });
  }

  remove = filter => {
    // remove from applied filters
    this.setState(prevState => {
      const { activeFilters } = prevState;

      return {
        activeFilters: activeFilters.filter(activeFilter => activeFilter.type !== filter.type)
      };
    });
  }

  update = filter => {
    // update a filter
    this.setState(prevState => {
      return {
        filters: {
          [filter.type]: filter
        }
      }
    })
  }

  query = () => {
    const { activeFilters } = this.state;
    activeFilters.map(activeFilter => activeFilter.query(activeFilter.value))
  }
};

export default FilterCollection;
