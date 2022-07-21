import React from 'react'

const InfoArray = ({getLink, countryData}) => {
  
  return (
    <div>
      
           <h5>top domain level: {countryData.topLevelDomain}</h5>
           <h5>currencies: {countryData.currencies[0].code}</h5>
           <h5>Languages: {  countryData.languages.map(c => c.name).join(', ')}</h5>
           
    </div>
  )
}

export default InfoArray
