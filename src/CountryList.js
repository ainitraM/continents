import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';

const LIST_COUNTRIES = gql`
     query countriesList($continentCode: ID!) {
      continent(code: $continentCode) {
        name
        countries {
          name
          emoji
          languages {
            name
          }
        }
      }
    }
  `;

const CountryList = () => {
    let contCode = useParams();
    const {data, loading, error} = useQuery(LIST_COUNTRIES, { variables: { "continentCode": contCode.code} });

    if (loading) {
        return <div className="flex justify-center items-center">Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div className="flex justify-center items-center">Error!</div>;
    }
    return (
        <div className="font-bold text-xl space-y-2 w-9/12 mx-auto mt-2 mb-4 text-center">
            <div className="max-w-2xl m-auto tracking-widest text-3xl font-bold p-4">Countries in the {data.continent.name}</div>
            {data.continent.countries.map((country) => (
                <div className="grid grid-cols-7 gap-4">
                        <div className="p-4 flex justify-center items-center h-auto bg-green-100 col-span-4 rounded-2xl"><p>{country.name}</p></div>
                        <div className="flex justify-center items-center h-auto bg-green-100 col-span-1 rounded-2xl"><p>{country.emoji}</p></div>
                        <div className="flex flex-col justify-center items-center h-auto bg-green-100 col-span-2 rounded-2xl">
                        {country.languages.map((lan) => (
                            <p> {lan.name} </p>
                        ))}
                        </div>
                </div>
            ))}
        </div>
    );
};

export default CountryList;