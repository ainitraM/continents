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
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    return (
        <div className="continent-list-container">
            {data.continent.countries.map((country) => (
                <div className="continent-list-wrapper">
                    <button>
                        <div>{country.name}</div>
                        <div>{country.emoji}</div>
                        {country.languages.map((lan) => (
                            <div>{lan.name}</div>
                        ))}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CountryList;