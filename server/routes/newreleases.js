const express = require('express');
const router = express.Router();
const db =require("../db");
const util = require("../util");
const multer = require('multer');
const upload = multer({dest:'new/'})


router.post("/", upload.single('thumbnail'),(request,response)=>{
    const{title,duration} = request.body;
    const filename = request.file.filename;
    const query = `insert into newreleases(title,duration,thumbnail) values(
    '${title}','${duration}','${filename}')`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error, result));
    })
})
router.post("/song", upload.single('songFile'),(request,response)=>{
    const{newreleasesId} = request.body;
    const filename = request.file.filename;
    const query = `insert into newreleasessongs(songFile,newreleasesId) values('${filename}','${newreleasesId}')`
    db.query(query,(error,result)=>{
        response.send(util.createResult(error, result));
    })
})


router.get('/' ,(request,response)=>{
    const query = `select newreleases.*,newreleasessongs.songFile from newreleases, newreleasessongs
                    where newreleases.id = newreleasessongs.newreleasesId `
    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result));
    })
})

/*router.get('/song/:id' ,(request,response)=>{
    const{id} = request.params;
    const query =   `select newreleasessongs.songFile as songFile from newreleasessongs,newreleases
        where newreleasessongs.newreleasesId = newreleases.id and newreleases.id=${id}`
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
})*/

module.exports = router;