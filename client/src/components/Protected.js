import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from "./axiosWithAuth"

const Protected = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/restricted/data")
            .then(res =>{
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            
            {data ? (data.map(recipe => 
            <div>
                <h2>{recipe.name}</h2>
                <h3>{recipe.course}</h3>
                <h3>{recipe.technique}</h3>
            </div>
            )
            ):(
                <h2>Loading...</h2>
            )
            }
            </>
    )
}

export default Protected