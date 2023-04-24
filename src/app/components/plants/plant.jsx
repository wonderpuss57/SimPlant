import React from 'react';
 import './plantStyle.scss'

const Plant = (props) => {
  const { species, 
          watering_frequency_per_week, 
          humidity, 
          light 
        } = props.plant;
  return(
    <div id="plant" className='plants'>
      <img className= "plant-img" src="https://em-content.zobj.net/thumbs/160/apple/271/potted-plant_1fab4.png"></img>
      <p>Species: {species}</p>
      <p>Watering Frequency: {watering_frequency_per_week}</p>
      <p>Humidity: {humidity}%</p>
      <p>Light: {light}</p>
    </div>
  );
}

export default Plant;