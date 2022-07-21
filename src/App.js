import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//https://gitlab.com/amatos/rest-countries
//https://restcountries.com/v3.1/all
//https://restcountries.com/vX/region/{region}
//https://restcountries.com/v3.1/lang/{currency}
//https://restcountries.com/v3.1/name/{name}
import Home from './pages/Home';
import ThemeSwicher from './componants/ThemeSwicher';
import SingleCountry from './pages/SingleCountry';
import {ThemeSwitchState} from './utils/ThemeSwitchState';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${!darkMode ? "LM" : ""} bg-Background text-Text flex flex-col gap-4 text-sans h-full`}>
     <ThemeSwitchState.Provider value={{darkMode, setDarkMode}}>
     <ThemeSwicher/>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="Country/:name" element={<SingleCountry />} />
        </Routes>
     </BrowserRouter>
     </ThemeSwitchState.Provider>
    </div>
 );
}

export default App;
