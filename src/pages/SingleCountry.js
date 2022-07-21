import { useEffect, useState } from 'react'
import {useParams} from 'react-router';
import {FetchData} from '../utils/FetchData';
import { Link } from 'react-router-dom';
import Info from '../componants/Info';
import InfoArray from '../componants/InfoArray';
import Flag from '../componants/Flag'
import Loader from '../componants/Loader'
const SingleCountry = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [borederC, setBorederC] = useState([]);
  
  useEffect(() =>{ 
    console.log('triggered')
    const urlAll = `https://restcountries.com/v2/all`;
    const url = `https://restcountries.com/v2/name/${name}`;
    const getCountry = async() => {
    const fetchAllCountriesFn = await FetchData(url);
    setCountryData(fetchAllCountriesFn[0]);
    const namesData = await FetchData(urlAll);
    console.log(namesData);
    setBorederC(namesData.map(country => {return{ name : country.name, code: country.alpha3Code}}));
}
getCountry();
},[name])
const getLink =(c)=>{
  const index = borederC.findIndex(f => f.code.includes(c));
  const name = borederC[index].name;
  return  <Link key={index} to={`/Country/${name}`} className="text-[14px] px-5 py-3 flex self-start shadow-md">{name}</Link>
}
console.log("app is doing !", countryData.name, borederC.length)
  return (
    <div className="px-4 h-screen">
      <Link className="flex gap-2 px-4 py-1 shadow-md w-36" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg> 
        <span>go back</span></Link>
      { countryData.length !== 0 && borederC.length !== 0 ? 
      <div className='h-screen flex justify-center flex items-center'>
        <div className="h-96 gap-4 py-8 flex flex-col md:flex md:flex-row  shadow-md">
        <Flag countryData={countryData}  />
        <div  className="grid grid-cols-2 gap-1 flex align-center w-1/2">
       <Info countryData={countryData} />
       <InfoArray countryData={countryData} getLink={getLink} />
       <div className="flex gap-4">border: {countryData.borders ? countryData.borders.map(c => getLink(c)) : "it's an island"}
       </div>
      </div>
      </div>
      </div> : <Loader/>}
    </div>
  )
}
export default SingleCountry
/**
 *   <div className="gap-4 flex justify-center flex align-center">
          <img className='self-start' src={countryData.flags.png} alt={countryData.name}/>
        <div  className="grid grid-cols-2 gap-1">
        
            <h1>{countryData.name}</h1>
            <h5>{countryData.nativeName}</h5>
            <h5>region :{countryData.region}</h5>
            <h5>subregion: {countryData.subregion}</h5>
            <h5>capital: {countryData.capital}</h5>
           
           
           <h5>top domain level: {countryData.topLevelDomain}</h5>
           <h5>currencies: {countryData.currencies[0].code}</h5>
           <h5>Languages: {countryData.languages.map(c => c.name).join(', ')}</h5>
           
      
       </div>
      </div> */
      /**<h5 className='col-span-2'>borders:</h5> {countryData.borders.map(c => {const index = borederC.findIndex(c);
                                                                                    const name = borederC[index];
                                                                                    return  <Link to={`/Country/${name}`} className="flex-[1_1_20%]">{name}</Link>
          } )}
            */