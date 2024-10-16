import React from "react";
import countryData from "@/countries";
import Link from "next/link";

type Country = keyof typeof countryData;

const CountryName = ({params}: {params: {country_name: string} }) => {
  const countryName = params.country_name;

  const isValidCountry = (countryName: string): countryName is Country => {
    return countryName in countryData;
  };
  return isValidCountry(countryName) ? (
    <div className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-bold">{countryData[countryName].name}</h1>
      <div className="bg-purple-700 flex justify-center items-center flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Population : {countryData[countryName].population}
          </h2>
          <h2 className="text-2xl font-semibold">
            Capital : {countryData[countryName].capital}
          </h2>
        </div>
        <Link href={"/countries"} className="bg-purple-900 px-4 py-2 rounded-lg">
          Back to country list page
        </Link>
      </div>
    </div>
  ) : (
    <div className="text-center text-4xl font-bold">Country not found</div>
  );
};

export default CountryName;