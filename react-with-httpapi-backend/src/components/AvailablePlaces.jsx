import Places from './Places.jsx';
import ErrorPage  from './Error.jsx';

import { useState,useEffect } from 'react';



export default function AvailablePlaces({ onSelectPlace }) {



  const[availablePlaces, setAvailablePlaces] = useState([]);
  const [error,setError]= useState();

  useEffect(() => {
    async function fetchPlaces(){

      try {
      const response = await fetch('http://localhost:3000/placesBAD');
      const resData = await response.json();

      if(!response.ok) {
        throw new Error('Failed bhai')
      }
      setAvailablePlaces(resData.places);

      } catch(error){
        setError(error);
      }
      
    }
    fetchPlaces();

  },[]);

  if(error){
    return <ErrorPage title="An error occured" message={error.message }/>
  }

  async function fetchPlaces(){
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    setAvailablePlaces(resData.places);
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
