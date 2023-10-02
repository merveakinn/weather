//rafce yazarak component oluşturma kısayolu
import React from "react";
//import { WiCloudy } from "react-icons/wi";
/*
const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className=" w-[650px] h-[520px] rounded-md shadow mx-auto bg-slate-900">
        <h1 className="mb-5 text-xl font-medium text-white">{city.main.temp}°C</h1>
        <h1 className="text-3xl font-semibold text-white">{city.name}</h1>
        <h1 className="text-white mb-5">{city.sys.country}</h1>
        <h1 className="mb-3 text-2xl text-white">{city.weather[0].main}</h1>
        <h1 className="mb-3 text-xl text-white">Hissedilen sıcaklık:{city.main.feels_like}</h1>
        <h1 className="text-white">Temp min:{city.main.temp_min}</h1>
        <h1 className="text-white">Temp max:{city.main.temp_max}</h1>

      </div>
    </div>
  );
};
*/

const City = ({ city }) => {
  console.log(city);
  return (
   
      
<div>
    <div class="flex flex-wrap">
        <div class="w-full   px-2">
            <div class="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full dark:bg-gray-600">
                <div class="px-6 py-6 relative">
                    <div class="flex mb-4 justify-between items-center">
                        <div>
                            <h5 class="mb-0 font-medium text-xl">{city.name},{city.sys.country}</h5>
                            <small>{city.weather[0].main}</small>
                        </div>
                        <div class="text-right">
                            <h3 class="font-bold text-4xl mb-0"><span>{city.main.temp}°C</span></h3>
                        </div>
                    </div>
                    <div class="block sm:flex justify-between items-center flex-wrap">
                        <div class="w-full sm:w-1/2">
                            <div class="flex mb-2 justify-between items-center"><span>Temp</span><small class="px-2 inline-block">{city.main.temp}°C</small></div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="flex mb-2 justify-between items-center"><span>Feels like</span><small class="px-2 inline-block">{city.main.feels_like}</small></div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="flex mb-2 justify-between items-center"><span>Temp min</span><small class="px-2 inline-block">{city.main.temp_min}</small></div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="flex mb-2 justify-between items-center"><span>Temp max</span><small class="px-2 inline-block">{city.main.temp_max}</small></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
);};
export default City;