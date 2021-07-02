import React from 'react';
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
        return <div className="flex justify-center items-center">Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div className="flex justify-center items-center">Error!</div>;
    }

    return (
        <div className="container flex flex-wrap flex-row items-center justify-evenly mx-auto h-screen">
            {data.continents.map((continent) => (
                <div className="border shadow shadow-lg ">
                    <Link to={"/continents/" + continent.code}>
                        <button className="text-lg font-bold rounded hover:bg-green-100 h-20 w-72" key={continent.id}>{continent.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ContinentList;