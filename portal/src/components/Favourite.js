import React from 'react'
import './Favourite.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
function Favourite() {
    return (
        <div id="div1">
                <ul>
                    <li>
                    <a href="#">
                        <span id="icon"><FavoriteIcon/></span>
                        <span id="title">Favorites</span>
                    </a>
                    </li>
                    <li>
                       <div id="favsong-div">
                       <table id="favourtlists">
                    <tr>
                        <th>Track</th>
                        <th>Artist</th>
                        <th>Duration</th>
                    </tr>
                    </table>
                       </div>
                    </li>
                    <li>
                       <div id="favsong-div">
                       <table id="favourtlists">
                    <tr>
                        <th>Track</th>
                        <th>Artist</th>
                        <th>Duration</th>
                    </tr>
                    </table>
                       </div>
                    </li>
                    
                </ul>
            </div> 
    )
}

export default Favourite
