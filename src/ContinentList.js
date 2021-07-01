import React, {useState, useEffect} from 'react';
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

const ContinentList = () => {
    const {data, loading, error} = useQuery(LIST_CONTINENTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    return (
        <div className="continent-list-container">
            {data.continents.map((continent) => (
                <div className="continent-list-wrapper">
                    <Link to={"/continents/" + continent.code}>
                        <button key={continent.id}>{continent.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ContinentList;