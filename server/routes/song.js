const express = require('express');
const router = express.Router();
const db =require("../db");
const util = require("../util");
const multer = require('multer');
const upload = multer({dest:'uploads/'})


router.post("/", upload.single('songFile'),(request,response)=>{
    const{title,albumId,artistId,duration} = request.body;
    const songFile = request.file.filename;
    const query = `insert into song(title,albumId,artistId,duration,songFile) values(
    '${title}','${albumId}','${artistId}','${duration}','${songFile}')`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error, result));
    })
})

router.get("/", (request,response)=>{
   
    const query =   `select 
                    song.id,
                    song.title as songtitle,
                    song.duration,
                    song.songFile, 
                    artist.firstName as artistFirstName,
                    artist.lastName as artistLastName,
                    artist.thumbnail as artistThumbnail,
                    album.title as albumTitle
                    from album,artist,song
                    where artist.id = album.artistId and song.albumId = album.id`
                
    db.query(query,(error,result)=>{
    if(error){
        response.send(util.createError(error))
    }else{
        if(result.length===0){
            response.send("song does not exists")
        }
        else{
            response.send(util.createResult(error,result));
        }
    }
    
})  
})

module.exports = router;