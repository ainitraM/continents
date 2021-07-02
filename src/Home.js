import {Link} from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <div className="flex h-screen">
            <div className="text-center max-w-2xl m-auto tracking-widest text-6xl font-bold">
                <div className="text-sm font-normal">Click here to see all</div>
                <Link to="/continents">CONTINENTS</Link>
            </div>
        </div>
    )
}

export default Home;

