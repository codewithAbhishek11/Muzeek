import React, { useEffect, useState } from 'react'
import {url} from '../common/url' 
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios'



function Newreleases({song, index}) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [isFav, setIsFav] = useState(false)

    const[songdetail,setSongDetail] = useState("")

    const audio = new Audio(url+"/"+songdetail);

    useEffect(()=>{
        setSongDetail(song.songFile)
    },[])
    

    const togglePlay =() =>{
    
        if(isPlaying){
            audio.pause();
            setIsPlaying(false)
        }else{
            audio.play();
            setIsPlaying(true)
        }
    }



    const toggleChoice =() =>{
        if(isFav){
           setIsFav(false)
        }else{
            setIsFav(true)
        }
    }

   
    

    return (
                <div className="newRelease">
                    <div id="newRelease-img-div">
                        <img id="newRelease-img" src={url+"/"+song.thumbnail}/>
                    </div>
                    {/* <div id="newRelease-title-div" >
                    
                    </div> */}
                    <div id="newRealease-progress-div">
                    {song.title}
                        </div>
                        <div id="newRelease-buttonarea">
                        <div id="newRelease-playarea">
                            {
                                isPlaying==false && (
                                    <div id="newRelease-play-button" onClick={togglePlay} ><PlayCircleFilledWhiteIcon color="action" style={{ fontSize: 35,marginLeft:5,marginTop:1 }}/></div>
                                )}
                            {
                                isPlaying ==true && (
                                    <div id="newRelease-pause-button" onClick={togglePlay}><PauseCircleFilledIcon color="secondary" style={{ fontSize: 35, marginLeft:5, marginTop:1}}/> </div>
                                )}
                        </div>
                        <div id="newRelease-addtofav">
                        {
                                isFav==false && (
                                    <div id="newRelease-addtofav-off" onClick={toggleChoice}><FavoriteBorderIcon style={{ fontSize: 35, marginLeft:5, marginTop:1}}/></div>
                                )
                            }
                            {
                                isFav ==true && (
                                    <div id="newRelease-addtofav-on" onClick={toggleChoice}><FavoriteIcon color="secondary" style={{ fontSize: 35, marginLeft:5, marginTop:1}}/></div>) }      
                        </div>
                        </div> 
                </div>
    
    )
}

export default Newreleases;

