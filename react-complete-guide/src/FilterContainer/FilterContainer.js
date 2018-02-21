import React from 'react'
import FilterItem from '../FilterItem/FilterItem'

const FilterContainer = (props) => {

    return (
        <div >
            <h4 className="FilterHeading">{props.filterName}
                <span className="FilterAdd">+</span>
            </h4>
            <div className="Wrapper">
                {props.children.map(filterItem => {
                    return (
                        <FilterItem area={filterItem.area} />
                    )
                })}
            </div>
            <div>
                <hr className="FilterSeperator"/>
            </div>
        </div>
    );
}

export default FilterContainer;