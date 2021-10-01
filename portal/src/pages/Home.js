import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HorizontalSlider from '../components/HorizontalSlider';
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"
import{url} from '../common/url'
import Favourite from '../components/Favourite';

function Home() {

    const history = useHistory();
    const [albums,setAlbums] = useState([]);
    const [artists,setArtists] = useState([]);


    const getAlbums=()=>{
        const url = "http://localhost:4000"

        axios.get(url+"/album").then(response=>{
            const result = response.data;
            if(result.status ==="success"){
                setAlbums(result.data)
            }
        })
    }

    useEffect(()=>{
        getArtists();
        getAlbums();
    },[])

    const getArtists=()=>{
 
        axios.get(url+"/artist").then(response=>{
            const result = response.data;
            if(result.status ==="success"){
                setArtists(
                    result.data.map((artist)=>{
                        return{
                            ...artist,
                            title:`${artist.firstName} ${artist.lastName}`
                        }
                    })
                    )
                    
            }
        })
    }

    console.log(artists);
    const getAllSongsForArtist =(artist)=>{
        console.log(artist)
        alert("Artist got clicked")
        axios.get(url+"/artist/songs/"+artist.id).then(response=>{
            const result = response.data;
            if(result.status ==="success"){
                console.log(result.data)
                history.push("/songs-list" ,
                {   songs:result.data,
                    title:artist.title,
                    thumbnail:artist.thumbnail    
                })
            }else{
                
                alert("Error occurred while fetching songs for Artist")
            }
        })        
    };

    const getAllSongsForAlbum = (album)=>{
        alert("Album got clicked")
        console.log(album.title)
        console.log(album.thumbnail)
        axios.get(url+"/album/songs/"+album.id).then(response=>{
            const result = response.data;
            if(result.status ==="success"){
                console.log(result.data)
                history.push("/songs-list",
                {   songs:result.data,
                    title:album.title,
                    thumbnail:album.thumbnail    
                })  
            }else{
                alert("Error occurred while fetching songs for Album")
                console.log(result.error)
            }
        })  
    };

    return (
        <div className="flex-container">
            <Favourite/>
            <div id="div3">
                 {/* <h3>Home</h3> */}
                    <div>
                        <HorizontalSlider onItemSelect ={getAllSongsForArtist} items={artists} title={"Trending songs"}/>
                        <HorizontalSlider onItemSelect ={getAllSongsForAlbum} items={albums} title={"Featured Artists"}/>
                        <HorizontalSlider onItemSelect ={getAllSongsForAlbum} items={albums} title={"Muzeek Originals"}/>
                        <HorizontalSlider onItemSelect ={getAllSongsForAlbum} items={albums} title={"Evergreen Romance"}/>

                    </div> 
            </div>
        </div>
        
    )
}

export default Home
