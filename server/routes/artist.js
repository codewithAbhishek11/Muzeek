const express = require('express');
const router = express.Router();
const db =require("../db");
const util = require("../util");
const multer = require('multer');
const upload = multer({dest:'uploads/'})


router.post("/", upload.single('thumbnail'),(request,response)=>{
    const{firstName, lastName} = request.body;
    const filename = request.file.filename;
    const query = `insert into artist(firstName, lastName, thumbnail) values(
    '${firstName}','${lastName}','${filename}')`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error, result));
    })
})

router.get("/", (request,response)=>{
    const query =   `select * from artist`

    db.query(query,(error,result)=>{
        if(error){
            response.send(util.createError(error))
        }else{
            if(result.length===0){
                response.send("artist does not exists")
            }
            else{
                response.send(util.createResult(error,result));
            }
        }
        
    })  
})

router.get('/songs/:id' ,(request,response)=>{
    const{id} = request.params;
    //const query = `select album.*,artist.firstName as artistFirstName,artist.lastName as artistLAstName from album, artist where album.artistId = artist.id and album.id =${id}`

    const query =   `select 
                    song.id,
                    song.title as songtitle,
                    song.duration, 
                    song.songFile, 
                    artist.firstName as artistFirstName,
                    artist.lastName as artistLastName,
                    artist.thumbnail as artistThumbnail,
                    album.thumbnail as albumThumbnail
                    from artist,song,album
                    where artist.id = song.artistId and
                    artist.id = album.artistId
                    and artist.id = ${id}`
    db.query(query,(error,result)=>{
        if(error){
            response.send(util.createError(error))
        }else{
            if(result.length===0){
                response.send("song  in album with the provided ID does not exists")
            }
            else{
                response.send(util.createResult(error,result));
            }
        }
        
    })  
})


module.exports = router;