import React from 'react'

const FilterItem = (params) => {
    return (
        <div className="Container">
            <div className="Box">
                <span className="Text">{params.area}</span>
            </div>
            <div className="Close1">
                <span className="Close2">&times;</span>
            </div>
        </div>
    );
}

export default FilterItem;