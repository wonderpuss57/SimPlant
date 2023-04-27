import React, { useState, useEffect } from 'react';
import './plantStyle.scss'

const Plant = (props) => {
  // state for modal functionality
  const [isDropdown, setIsDropdown] = useState(false);
 
let common_name;
let watering_frequency_per_week;
let light;
let species;


if (props?.plant){
  ({ species, 
    common_name,
    watering_frequency_per_week, 
    light 
  } = props.plant);
}
// state tells div what to render

  function openDropdown(e) {
    e.target.focus();
    setIsDropdown(true);
  }

  function closeDropdown() {
    setIsDropdown(false);
  }


  return(
    <div className={`plant ${isDropdown ? 'plant-dropdown' : ''}`} onClick={openDropdown} tabIndex="-1" onBlur={closeDropdown}>
      <p className="species">Name: {common_name}</p>
      <img className= "plant-img" src="https://em-content.zobj.net/thumbs/160/apple/271/potted-plant_1fab4.png"></img>
      { isDropdown && 
        <>
          <p>Water {watering_frequency_per_week}x per week</p>
          <p>Light: {light}/10</p>
          <button>Delete</button>
        </>
      }
    </div>
  );
}

export default Plant;