import React from 'react'

const dropdown = (props) =>{
  return(
    <select>
    {
      props.list.map(options =>{return <option value={options.name}>{options.hex}</option>})
    }
    </select>
    );
}

export default dropdown;