import React from 'react'

const Info = ({countryData}) => {
  return (
    <div>
            <h1  className="text-[20px]">{countryData.name}</h1>
            <h5>{countryData.nativeName}</h5>
            <h5>region :{countryData.region}</h5>
            <h5>subregion: {countryData.subregion}</h5>
            <h5>capital: {countryData.capital}</h5>
    </div>
  )
}

export default Info
