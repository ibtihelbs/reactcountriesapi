import React from 'react'
import { Link } from 'react-router-dom';


const SingleCard = ({country}) => {
  return (
    <Link to={`/Country/${country.name.common}`} className="flex-[1_1_180px] shadow-md">
      <img className="w-full h-1/2" src={country.flags.png} alt={country.name.common}/>
      <ul className="p-4">
      <li  className="text-[20px]">{country.name.common}</li>
      <li><span  className="text-[18px]">population:</span><span className="text-[14px]"> {country.population}</span></li>
      <li><span  className="text-[14px]">capital:</span><span className="text-[14px]">{country.capital}</span> </li>
      <li><span  className="text-[14px]">Region:</span><span className="text-[14px]">{country.region}</span></li>
      </ul>
    </Link>
  )
}

export default SingleCard;
