import React, {useState, useEffect} from 'react';
import { gql, useQuery } from "@apollo/client";

const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;


const ContinentList = () => {
    const [continents, setContinents] = [];
    const {data, loading, error} = useQuery(LIST_CONTINENTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        setContinents(data.continents);
    }, []);

    return (
        <div>
            adsasdadad
        </div>
    );
};


export default ContinentList;