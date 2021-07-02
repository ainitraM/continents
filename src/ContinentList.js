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
        <div className="container flex flex-wrap flex-row items-center justify-evenly mx-auto h-screen">
            {data.continents.map((continent) => (
                <div className="h-20 border shadow shadow-lg ">
                    <Link to={"/continents/" + continent.code}>
                        <button className="text-lg font-bold rounded hover:bg-green-100 h-16 w-72" key={continent.id}>{continent.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ContinentList;