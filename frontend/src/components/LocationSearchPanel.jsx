import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
  // Sample array for locations
  const locations = [
    "24B, Near Kapoor's,Bhopal",
    "25A, Near City Center, Bhopal",
    "26C, Opposite to Central Park, Bhopal",
    "27D, Behind the Railway Station, Bhopal",
    "28E, Near the Old Fort, Bhopal",
    "29F, Close to the University Campus, Bhopal"
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div onClick={()=>{
            setVehiclePanel(false);
            setPanelOpen(false);
        }} key={index} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
