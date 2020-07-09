import React from "react";

const Languages = ({ data = [] }) => {
  return (
    <ul>
      {data.map((currentLanguage) => (
        <li key={currentLanguage.name}>{currentLanguage.name}</li>
      ))}
    </ul>
  );
};

const Weather = ({ capital, weather }) => {
  const { temperature, weather_icons, wind_speed, wind_dir } = weather ?? {};
  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>
        <strong>Temperature: </strong>
        {temperature} Celcius
      </div>
      <img src={weather_icons?.[0]} alt="Weather Icon" />
      <div>
        <strong>Wind: </strong>
        {wind_speed} mph direction {wind_dir}
      </div>
    </div>
  );
};

const Country = ({ name, details, showDetails, handleShowDetails }) => {
  const {
    capital,
    population,
    languages,
    weather,
    numericCode,
    flag,
  } = details;
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => handleShowDetails(numericCode)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails ? (
        <>
          <div>Capital: {capital}</div>
          <div>Population: {population}</div>
          <h3>Languages:</h3>
          <Languages data={languages} />
          <img style={{ height: 200, width: 400 }} src={flag} alt="flag" />
          <Weather capital={capital} weather={weather?.current} />
        </>
      ) : null}
    </div>
  );
};

export default Country;
