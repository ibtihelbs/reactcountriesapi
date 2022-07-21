import React, { useState, useEffect } from 'react'
import SingleCard from '../componants/SingleCard';
import Filters from '../componants/Filters';
import {FetchData} from '../utils/FetchData';

const Home = () => {
  const [urlCountries, setUrlCountries] = useState('https://restcountries.com/v3.1/all')
  const [countries, setCountries] = useState([]);
  useEffect(() =>{ 
    const fetchAllCountries = async() => {
    //const urlAll = 'https://restcountries.com/v3.1/all';
    const fetchAllCountriesFn = await FetchData(urlCountries);
    setCountries(fetchAllCountriesFn);
}
fetchAllCountries();
},[urlCountries])

 return (
    <div className="px-4  self-stretch">
      <Filters setUrlCountries={setUrlCountries} setCountries={setCountries} countries={countries}/>
      <div className="flex flex-wrap gap-6 py-5">
       {countries.map((country, index) => (
         <SingleCard key={index}  country={country}/>
       ))}
      </div>
    </div>
  )
}

export default Home
