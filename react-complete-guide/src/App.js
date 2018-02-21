import React, { Component } from 'react';
import './App.css';
import FilterItem from './FilterItem/FilterItem';
import FilterContainer from './FilterContainer/FilterContainer';


class App extends Component {

  state = {
    filters: {
      "Industry": [
        { area: "Graphic Design" },
        { area: "Accounting" },
        { area: "Online consumer services" },
        { area: "Online travel management" }
      ],
      "Geography": [
        { area: "Spain" },
        { area: "Poland" },
        { area: "Norway" }
      ],
      "Position": [
        { area: "Partner" },
        { area: "CEO" },
        { area: "Art Director" }
      ]

    },
    filterName: [],
    filterNameArea: []
  };
  render() {
    let aFilterTitles = Object.keys(this.state.filters);
    return (
      <div className="TopContainer">
        {aFilterTitles.map(filterTitle => {
          return (
            <FilterContainer filterName={filterTitle}>
              {this.state.filters[filterTitle]}
            </FilterContainer>
          )
        }
        )}
      </div>
    );
  }
}

export default App;
