import React, { Component } from 'react';
import './App.css';
import FilterItem from './FilterItem/FilterItem';
import FilterContainer from './FilterContainer/FilterContainer';
import Filter from './Filter/Filter'
import Person from './Person/Person'
import './Person/Person.css'
import './Pagination/Pagination.css'
import Pagination from './Pagination/Pagination'
import Dropdown from './Dropdown/Dropdown'


class App extends Component {

  constructor() {
    super();
    this.state = {
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
      filterNameArea: [],
      persons: [
        { companyName: "H&R Block Inc.", retail1: "Retail.", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Pricewaterhousecoopers", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Home Decor Wholesalers", retail1: "Accounting", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Century 21 Real Estate", retail1: "Real Estate", retail2: "", city: "Madison", state: "United States" },
        { companyName: "Exit Realty 21", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Evergrande Real Estate", retail1: "Real Estate", retail2: "", city: "Hyderabad", state: "India" },
        { companyName: "H&R Block Inc.", retail1: "Retail.", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Pricewaterhousecoopers", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Home Decor Wholesalers", retail1: "Accounting", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Century 21 Real Estate", retail1: "Real Estate", retail2: "", city: "Madison", state: "United States" },
        { companyName: "Exit Realty 21", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Evergrande Real Estate", retail1: "Real Estate", retail2: "", city: "Hyderabad", state: "India" },
        { companyName: "H&R Block Inc.", retail1: "Retail.", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Pricewaterhousecoopers", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Home Decor Wholesalers", retail1: "Accounting", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Century 21 Real Estate", retail1: "Real Estate", retail2: "", city: "Madison", state: "United States" },
        { companyName: "Exit Realty 21", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Evergrande Real Estate", retail1: "Real Estate", retail2: "", city: "Hyderabad", state: "India" },
        { companyName: "H&R Block Inc.", retail1: "Retail.", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Pricewaterhousecoopers", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Home Decor Wholesalers", retail1: "Accounting", retail2: "Professional Services", city: "Kansas City", state: "United States" },
        { companyName: "Century 21 Real Estate", retail1: "Real Estate", retail2: "", city: "Madison", state: "United States" },
        { companyName: "Exit Realty 21", retail1: "Accounting", retail2: "Professional Services", city: "New York", state: "United States" },
        { companyName: "Evergrande Real Estate", retail1: "Real Estate", retail2: "", city: "Hyderabad", state: "India" }
      ],
      colours: [{
        name: "Red",
        hex: "#F21B1B"
      }, {
        name: "Blue",
        hex: "#1B66F2"
      }, {
        name: "Green",
        hex: "#07BA16"
      }],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  // Call to GET the filters here
  // Assign filters to state variables
  // Expecting a JSON object
  // Call setState to set the filers as well as other data

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }



  render() {
    let aFilterTitles = Object.keys(this.state.filters);
    return (
      <Filter filter={this.state.filters} />
      
    );
  }
}

export default App;
