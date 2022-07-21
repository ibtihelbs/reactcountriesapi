import { useState } from 'react';
const Li = ({el}) =>{
  return (<li  className="px-4 py-1 hover:opacity-50">{el}</li>)
}
const Filters = ({setUrlCountries, setCountries, countries}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="gap-4  flex flex-col md:flex md:flex-row md:flex md:justify-between">
      <div className="bg-Element px-4 py-1 flex align-center shadow-md">
        <button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></button>
        <input type="search" className="text-Text bg-Element px-2" placeholder="Search for country ...." onChange={(e)=>setCountries(countries.filter((f)=>f.name.common.toLowerCase().includes(e.target.value.toLowerCase())))}/>
      </div>
      <div className="searchByRegion relative flex flex-col gap-3 bg-Element">
      <label onClick={()=>setOpen(!open)} className="flex justify-between shadow-md px-4 py-1">Filter by Region <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg></label>
      <ul className={`${!open ? 'hidden':'flex flex-col bg-Element'} w-full py-2 top-full shadow-md absolute z-20 hover:cursor-pointer`} onClick={(e)=>setUrlCountries(`https://restcountries.com/v3.1/region/${e.target.innerHTML.toLowerCase()}`)} >
        <Li el = {'Africa'}></Li>
        <Li el = {'America'}></Li>
        <Li el = {'Asia'}></Li>
        <Li el = {'Europe'}></Li>
        <Li el = {'Oceania'}></Li>
      </ul>
      </div>
    </div>
  )
}

export default Filters;
