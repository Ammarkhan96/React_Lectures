import React from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()

    return(
        <div>
            Github Followers: {data?.followers}
            <img 
            src={data?.avatar_url}
            alt="Git Picture"
            className="bg-red-900"
        width={250}
            />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const responseApi = await fetch("https://api.github.com/users/ammarkhan96");
    return responseApi.json();
  };