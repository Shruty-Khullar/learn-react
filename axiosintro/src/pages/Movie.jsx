import {useEffect, useState} from 'react'
import axios from 'axios'
import { Card } from '../components/UI/Card';
import { getMovie } from '../services/axiosService';
export const Movie = () => {
    //search is an array (search is data res)
    const [data, setData] = useState([]);
    // const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1'
    const getMovieData = async () => {
        try {
            //axios convert data into json automatically
            // const res = await axios.get(API);

            const res = await getMovie();
            console.log(res);  
            setData(res.data.Search);
        } catch(err){
            console.log('Error Message', err.message);
            //console.log('Error Status', err.response.status);
            console.log('Error Data', err.response.data)
        }
    }
    //always load data on refreshing
    useEffect(() => {
        getMovieData()
    },[])
    // In JSX: Inside {} → React expects an expression that returns something renderable; console.log() → returns undefined
    return (
        <ul className=''>
            {
                data.map((currElem) => {
                    return <Card key={currElem.imdbID} movieData={currElem}/>
                })
            }
        </ul>
    )
}