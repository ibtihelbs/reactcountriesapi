import React from 'react'

const Flag = ({countryData}) => {
  const flag = countryData.flags.png;
  return (
    <div>
      <img className='w-full' src={flag} alt={countryData.name}/>
    </div>
  )
}

export default Flag
