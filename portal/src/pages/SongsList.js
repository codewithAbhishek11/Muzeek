import React from 'react'
import { useLocation } from 'react-router';
import {url} from '../common/url' 
import SongRow from '../components/SongRow'
import "./SongsList.css"
import Favourite from '../components/Favourite';

function SongsList() {

    const location  = useLocation();
    const songs = location.state.songs
    //console.log(songs);

    //console.log(location.state.thumbnail)

    return (
        <div className="flex-container">
            <Favourite/>
            <div className="outer-container">
        <div  className="page-title">
            <div className="songs-row">
            <div className="col-4 thumbnail">
                <img src={url +"/"+location.state.thumbnail} alt="thumbnail"/>
            </div>
            <div className="col-4 title-div">
                <p>{location.state.title}</p>
            </div>
            </div>
            <div className="table-responsive">
            <table id="customers">
                <thead>
                    <tr>
                        <th></th>
                        <th>Song</th>
                        <th>Artist</th>
                        <th></th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.map((song,index)=>{
                            return <SongRow song={song} index={index}/>
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SongsList
