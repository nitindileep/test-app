import React from 'react';
import '../Person/Person.css'
import '../Pagination/Pagination.css'
import Pagination from '../Pagination/Pagination'
import Dropdown from '../Dropdown/Dropdown'

const Main = () => {
    <div className="App">

        <Dropdown list={this.state.colours} />
        {this.state.pageOfItems.map(person => {
            return <Person companyName={person.companyName} retail1={person.retail1} retail2={person.retail2} city={person.city} state={person.state} />
        })};
         <Pagination items={this.state.persons} onChangePage={this.onChangePage} />
    </div>
}

export default Main;