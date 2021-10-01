import React, { useEffect, useState } from 'react'
import Favourite from '../components/Favourite';
import './Browse.css'
import TrendingSongs from '../components/TrendingSongs';
import axios from 'axios';
import { url } from '../common/url';

function MyMusic() {
    const [trendingSongs, setTrendingSongs] = useState([]);
    useEffect(()=>{
        getTrendingSongs();
    },[])

    const getTrendingSongs =()=>{
        axios.get(url+"/trendingsongs").then(response=>{
            const result = response.data;
            if(result.status=="success"){
                setTrendingSongs(
                    
                    result.data.map((trendingsongs)=>{
                        return{...trendingsongs}
                    })
                
                )
            }
        })
    }

    return (
        <div className="flex-container">
            <Favourite/>
            <div id="div3" className="trendingsongs-outer-div">
                <div className="newrelease-heading">
                    Trending Songs
                </div>
                <div className="tendingsongs-table-div">
                <div className="table-responsive">
                <table id="customers">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Track</th>
                        <th>Artist</th>
                        <th></th>
                        <th>Duration</th>
                    </tr>
                    {
                        trendingSongs.map((songsdetails)=>{
                            return  <TrendingSongs songsdetails={songsdetails}/>
                        })
                    }
                    </table>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default MyMusic
