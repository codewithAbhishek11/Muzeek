const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express();


app.use(cors('*'));
app.use(bodyParser.json())



const routerUser= require("./routes/user")
const routerArtist= require("./routes/artist")
const routerAlbum= require("./routes/album")
const routerSong= require("./routes/song")
//const routerNewReleases= require("./routes/newreleases")
const routerNewReleases = require("./routes/newreleases")
const routerTrendingSongs = require("./routes/trendingsongs")
const routerFavList = require("./routes/fav")

app.use('/user', routerUser)
app.use('/artist', routerArtist)
app.use('/album', routerAlbum)
app.use('/song', routerSong)
app.use('/newreleases', routerNewReleases)
app.use('/trendingsongs', routerTrendingSongs)
app.use('/favlist', routerFavList)


app.use(express.static('uploads'));
app.use(express.static('new'));
app.use(express.static('trending'));
app.use(express.static('fav'));


app.listen(4000,"0.0.0.0", ()=>{
    console.log("Server Listening to Port 4000")
})