import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "092842c7ac5b2096e7492bcaf0741cd7";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();//1.si(city) kullanmamızı 2.si değişiklik yapmamızı sağlar
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
          );
        console.log(response);
        setCity(response.data);//gelen veriyi setCity içinde kullanmamız için veriyi atar
      } catch (error) {
        console.error(error);
      }
    }
    getApi();

  },[search]);    //uygulama ilk çalıştığında kullanmak için içi boş köşeliler

console.log(search);

 return (

  <div className='App'>
  <div>

    <input 
    onChange={(e)=> setSearch(e.target.value)} //girilen değerlerin setSearch içine yazılması
      type="text"
      placeholder="Placeholder"
      className="px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
      />
      

{city && <City city={city} />}


  </div>
 </div>
 

 );
}


export default App;


