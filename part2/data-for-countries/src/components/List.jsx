import React from "react";
import Country from "./Country";

const List = ({ listTooBig, data, handleShowDetails, detailsList }) => {
  if (listTooBig || !data) {
    return <div>Too many matches, specify another filter</div>;
  }
  return data.map((currentCountry, index) => {
    const details = {
      languages: currentCountry?.languages,
      flag: currentCountry?.flag,
      population: currentCountry?.population,
      capital: currentCountry?.capital,
      numericCode: currentCountry?.numericCode,
      weather: currentCountry?.weather
    };
    const name = currentCountry?.name;
    const showDetails = detailsList.some(
      (currentDetail) => details.numericCode === currentDetail
    );

    return (
      <Country
        key={details?.numericCode}
        name={name}
        showDetails={showDetails}
        handleShowDetails={handleShowDetails}
        details={details}
      />
    );
  });
};

export default List;
