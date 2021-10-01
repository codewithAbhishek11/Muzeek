import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"
import{url} from '../common/url'
import Favourite from '../components/Favourite';
import "./Discover.css"
import Newreleases from '../components/Newreleases';

function Discover() {
    
    const [newRealease,setNewReleases] = useState([]);
    

    
    useEffect(()=>{
        getNewReleasesSong();
       
    },[])

    const getNewReleasesSong=()=>{
        axios.get(url+"/newreleases").then(response=>{
            const result = response.data;
            console.log(result.status)
            if(result.status ==="success"){
                setNewReleases(
                    result.data.map((newrelease)=>{
                        return {
                            ...newrelease
                           
                        }
                    })
                )   
            }
        })
    }



    
    return (
        <div className="flex-container">
            <Favourite/>
                <div className="trending-album-container">
                    <div className="newrelease-heading">
                        New Releases
                    </div>
                    <div className="flex-container-inner">
                        {newRealease.map((songs,index)=>{
                            return <Newreleases song={songs} key={index}/>  
                        })
                    }                      
                    </div>        
                </div>
           
            
        </div>
        
    )
}

export default Discover
