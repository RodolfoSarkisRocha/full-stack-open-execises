import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import axios from "axios";
import List from "./components/List";

const countriesUrl = "https://restcountries.eu/rest/v2/all";

function App() {
  const [filter, setFilter] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [listTooBig, setListTooBig] = useState(false);
  const [detailsList, setDetailsList] = useState([]);

  const filterCountries = () => {
    const mappedCountries = countriesList.filter((currentCountry) => {
      const formattedCountry = currentCountry.name.toLowerCase();
      const formattedFilter = filter?.toLowerCase();
      const match = formattedCountry.includes(formattedFilter);
      if (match) return currentCountry;
      return null;
    });
    if (mappedCountries.length > 10) setListTooBig(true);
    else {
      setFilteredCountries(mappedCountries);
      setListTooBig(false);
    }
  };

  const mapWeatherToDetails = (weather, targetCountry) => {
    const newFilteredCountries = [...filteredCountries];
    const targetCountryIndex = newFilteredCountries.findIndex(
      (currentCountry) => currentCountry.numericCode === targetCountry
    );
    newFilteredCountries[targetCountryIndex] = {
      ...newFilteredCountries[targetCountryIndex],
      weather,
    };
    setFilteredCountries(newFilteredCountries);
  };

  const getWeather = async (countryCode) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const findCountry = filteredCountries.find(
      (currentCountry) => currentCountry.numericCode === countryCode
    );
    const countryName = findCountry?.name;
    const countryCapital = findCountry?.capital;
    if (countryCapital) {
      try {
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryCapital}`
        );
        mapWeatherToDetails(response.data, countryCode);
      } catch (err) {
        alert(`Impossible to get the weather for ${countryName}'s capital`);
      }
    }
  };

  const handleShowDetails = (value) => {
    const newDetailsList = [...detailsList];
    const detailIndex = detailsList.indexOf(value);
    if (detailIndex === -1) {
      newDetailsList.push(value);
      getWeather(value);
    } else newDetailsList.splice(detailIndex, 1);
    setDetailsList(newDetailsList);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setDetailsList([])
  };

  useEffect(filterCountries, [filter]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(countriesUrl);
        const data = response?.data;
        setCountriesList(data);
      } catch (err) {
        alert("Impossible to get countries", err);
      }
    };
    getCountries();
  }, []);

  return (
    <div>
      <Header text="Countries" />
      <Input
        value={filter}
        handleChange={handleFilterChange}
        label="Search for a country:"
      />
      <List
        handleShowDetails={handleShowDetails}
        data={filteredCountries}
        listTooBig={listTooBig}
        detailsList={detailsList}
      />
    </div>
  );
}

export default App;
