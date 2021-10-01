const express = require('express');
const router = express.Router();
const db = require("../db");
const util = require('../util');
const multer = require('multer');
const { request } = require('http');


const upload = multer({dest:'trending/'});


router.post("/",upload.single("thumbnail"),(request,response)=>{
const{title,duration,artist} = request.body;
const filename = request.file.filename;

const query = `insert into trending(title,duration,thumbnail,artist)
values('${title}','${duration}','${filename}','${artist}')`

db.query(query,(error,result)=>{
    response.send(util.createResult(error,result));
})

})



router.post("/song",upload.single('songFile'),(request,response)=>{
    const{trendingId} = request.body;
    const fileName = request.file.filename;

    const query = `insert into trendingsongs(trendingId,songFile)
    values('${trendingId}','${fileName}')`
    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result));
    })
})

router.get("/",(request,response)=>{
    const query = `select trending.*,trending.title as title,trending.duration as duration,
    trendingsongs.songFile as songFile from trending ,trendingsongs where trending.id= trendingsongs.trendingId `

    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result));
    })
})























module.exports = router;