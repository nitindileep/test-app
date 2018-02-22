import React from 'react';
import FilterContainer from '../FilterContainer/FilterContainer';

const Filter = (props) => {
    let aFilters = props.filter;
    let aFilterTitles = Object.keys(aFilters);
    return (

        <div className="TopContainer">
            <div>
                <span class="FilterTitle">Filters</span>
                <span class="ResetLink">Reset</span>
            </div>
            <hr/>
            {aFilterTitles.map(filterTitle => {
                return (
                    <FilterContainer filterName={filterTitle}>
                        {aFilters[filterTitle]}
                    </FilterContainer>
                )
            }
            )}
        </div>
    );
}

export default Filter;