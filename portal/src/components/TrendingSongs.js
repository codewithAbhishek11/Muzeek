import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {url} from '../common/url' 
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';



function TrendingSongs({songsdetails}) {

    console.log("songsDetails")
    console.log(songsdetails)
    const [isFav, setIsFav] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const[song,setSong] = useState("")

 const audio = new Audio(url+"/"+song);

    useEffect(()=>{
        setSong(songsdetails.songFile)
    },[])


    const toggleChoice =(id) =>{
      //  console.log(id);
        if(isFav){
           // deleteFromFavList(id);
           setIsFav(false)
        }else{
            //addToFavList(id);
            setIsFav(true)
        }
    }

    const togglePlay =() =>{
    
        if(isPlaying){
           audio.pause();
            setIsPlaying(false)
        }else{
            audio.play();
            setIsPlaying(true)
        }
    }

    return (
        <>
      
            <tr>
                <td><div className="trendingsong-thumbnail"><img id="trendingsong-img" src={url+"/"+songsdetails.thumbnail}/></div></td>
                <td>
                {
                    isPlaying==false && (
                        <div id="newRelease-play-button" onClick={togglePlay} ><PlayCircleFilledWhiteIcon color="action" style={{ fontSize: 35,marginLeft:5,marginTop:1 }}/></div>
                    )}
                {
                    isPlaying ==true && (
                        <div id="newRelease-pause-button" onClick={togglePlay}><PauseCircleFilledIcon color="secondary" style={{ fontSize: 35, marginLeft:5, marginTop:1}}/> </div>
                    )}
                </td>
                <td>{songsdetails.title}</td>
                <td>{songsdetails.artist}</td>
                <td>
                {
                        isFav==false && (
                            <div id="trendingsongs-addtofav-off" onClick={()=>toggleChoice(songsdetails.id)}><FavoriteBorderIcon style={{ fontSize: 25, marginLeft:5, marginTop:1}}/></div>
                        )
                    }
                    {
                        isFav ==true && (
                            <div id="trendingsongs-addtofav-on" onClick={()=>toggleChoice(songsdetails.id)}><FavoriteIcon color="secondary" style={{ fontSize: 25, marginLeft:5, marginTop:1}}/></div>) } 
                </td>
                <td>{songsdetails.duration}</td>
            </tr>
        </>
    )
}

export default TrendingSongs
