import React, { useState } from 'react'
import {url} from '../common/url'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SongRow({song,index}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isFav, setIsFav] = useState(false)
    const audio = new Audio(url+"/"+song.songFile);
    const togglePlay =() =>{
        if(isPlaying){
            audio.pause()
            setIsPlaying(false)
        }else{
            audio.play()
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
            <tr>
                <td><img className="row-thumbnail"src={url+"/"+song.albumThumbnail}/></td>
                <td>{song.songtitle}</td>
                <td>{song.artistFirstName} {song.artistLastName} </td>
                <td>
                <td>
                {
                        isFav==false && (
                            <div id="trendingsongs-addtofav-off" onClick={toggleChoice}><FavoriteBorderIcon style={{ fontSize: 25, marginLeft:5, marginTop:1}}/></div>
                        )
                    }
                    {
                        isFav ==true && (
                            <div id="trendingsongs-addtofav-on" onClick={toggleChoice}><FavoriteIcon color="secondary" style={{ fontSize: 25, marginLeft:5, marginTop:1}}/></div>) } 
                </td>
                </td>
                <td>{song.duration}</td> 
                <td>{
                    isPlaying==false && (
                        <div onClick={togglePlay}><PlayCircleFilledWhiteIcon/></div>
                    )
}
                    {
                    isPlaying ==true && (
                        <div onClick={togglePlay}><PauseCircleFilledIcon/> </div> ) }
                    </td> 
                    
            </tr>
       
    )
}
/*remenber this condition rendering is inside map so this is for each element of the row not in combine so dont get confused*/

export default SongRow
