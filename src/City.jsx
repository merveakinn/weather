//rafce yazarak component oluşturma kısayolu
import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="w-[550px] rounded-md shadow mx-auto">
        <h1 className="text-5xl font-bold">{city.main.temp} °C</h1>
        <h1 className="text-3xl font-semibold text-purple-400">{city.name}</h1>
        <h1>{city.sys.country}</h1>
        <h1 className="text-2xl text-green-300">{city.weather[0].main}</h1>
        <h1 className="text-xl text-blue-500">Hissedilen sıcaklık:{city.main.feels_like}</h1>

      </div>
    </div>
  );
};

export default City;