
const express = require('express');
const router = express.Router();
const util = require('../util');
const db = require("../db")
const multer = require('multer');
const upload = multer({dest:"uploads/"})

router.post('/' ,upload.single('thumbnail'),(request,response)=>{
    const{title,artistId,duration} = request.body;

    const filename = request.file.filename;

    const query = `insert into album (title,artistId,thumbnail,duration) 
                   values ('${title}','${artistId}','${filename}','${duration}')`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result));
    })
})


router.get('/' ,(request,response)=>{
    const query = `select album.*,artist.firstName as artistFirstName,artist.lastName as artistLAstName from album,artist where album.artistId = artist.id`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result));
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
                    album.thumbnail as albumThumbnail,
                    artist.firstName as artistFirstName,
                    artist.lastName as artistLastName,
                    album.title as albumTitle
                    from album,artist,song
                    where artist.id = album.artistId 
                    and song.albumId = album.id
                    and album.id = ${id}`
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